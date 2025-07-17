import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '@/lib/notion';
import { Author } from '../../_components/Author';
import { PublishedAt } from '../../_components/PublishedAt';
import { ReadTime } from '../../_components/ReadTime';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post?.slug,
  }));
}

export const revalidate = 60 * 10; // 10min

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const post = await getPostBySlug(slug);

  return (
    <div className="w-full">
      {post.cover && (
        <Image alt="teste" height={100} src={post.cover} width={100} />
      )}
      <div className="mb-2 flex flex-col gap-2 lg:flex-row lg:gap-5">
        <Author />
        <PublishedAt publishedAt={post.createdAt} />
        <ReadTime readTime={post.timeToRead} />
      </div>
      <h1 className="font-semibold text-4xl leading-relaxed lg:text-5xl">
        {post.title}
      </h1>

      <article className="custom-prose mt-8 max-w-full prose-h2:text-2xl lg:mt-12 prose-h2:lg:text-3xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      <section className="mt-6 flex flex-col gap-2 border-text border-t pt-5">
        <h6 className="font-medium text-lg">Obrigado por ler até aqui :)</h6>
        <p className="text-lg">
          Esse post foi útil pra você? Me acompanhe nas redes sociais para mais
          conteúdo como esse!
        </p>
      </section>
    </div>
  );
}
