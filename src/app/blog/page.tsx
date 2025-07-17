import Link from 'next/link';
import { getAllPosts } from '@/lib/notion';
import { PostCard } from './_components/PostCard';

export const revalidate = 600; // 10min

export default async function Articles() {
  const posts = await getAllPosts();

  return (
    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      {posts.map((post) => (
        <Link href={`/blog/posts/${post?.slug}`} key={post?.id} passHref>
          <PostCard
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}
          />
        </Link>
      ))}
    </div>
  );
}
