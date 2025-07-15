'use server';

import {
  Client,
  type DatabaseObjectResponse,
  type GetPageResponse,
} from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { stripMarkdown } from '@/utils/markdown';
import { readTimeEstimate } from '@/utils/readTimeEstimate';
import { slugify, splitSlugAndUUID } from '@/utils/slug';

type Language = 'pt-BR' | 'eng';

type Status = 'draft' | 'automation' | 'publish';

type Property = {
  title: {
    title: { plain_text: string }[];
  };
  excerpt: {
    rich_text: { plain_text: string }[];
  };
  status: {
    status: { name: Status };
  };
  slug: {
    rich_text: { plain_text: string }[];
  };
  tags: {
    multi_select: { name: string }[];
  };
  language: {
    multi_select: { name: Language }[];
  };
};

type Cover = {
  type: 'external' | 'file';
  external?: { url: string };
  file?: { url: string };
};

type Result = {
  properties: Property;
  cover: Cover;
};

type DatabaseResult = DatabaseObjectResponse & Result;

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  language: Language;
  status: Status;
  createdAt: string;
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
});

function getCover(cover: Cover) {
  return cover.type === 'external' ? cover.external?.url : cover.file?.url;
}

export async function getAllPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error('Database ID is required.');
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'status',
      status: { equals: 'publish' },
    },
  });
  const queryResult = response.results as DatabaseResult[];
  const posts: Post[] = queryResult.map((result) => {
    if (!('properties' in result)) {
      throw new Error('Invalid response: missing properties.');
    }

    const cover = result.cover ? getCover(result.cover) : null;
    const title = result.properties.title.title[0].plain_text;
    const slug = slugify(title).concat(`-${result.id}`);

    return {
      id: result.id,
      slug,
      cover,
      title,
      excerpt: result.properties.excerpt.rich_text[0].plain_text,
      tags: result.properties.tags.multi_select.map((tag) => tag.name),
      language: result.properties.language.multi_select[0].name,
      status: result.properties.status.status.name,
      createdAt: result.created_time,
    };
  });

  return posts;
}

export async function getPostBySlug(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error('Database ID is required.');
  }

  const { uuid: pageId } = splitSlugAndUUID(slug);

  const response = await notion.pages.retrieve({
    page_id: pageId,
  });

  const result = response as GetPageResponse &
    Result & { created_time: string };
  const cover = result.cover ? getCover(result.cover) : null;
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const title = result.properties.title.title[0].plain_text;
  const content = mdString.parent;
  const contentRaw = stripMarkdown(content);

  return {
    cover,
    title,
    excerpt: result.properties.excerpt.rich_text[0].plain_text,
    timeToRead: readTimeEstimate(title, contentRaw),
    content,
    createdAt: result.created_time,
  };
}
