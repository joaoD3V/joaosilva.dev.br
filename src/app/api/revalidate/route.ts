import { revalidatePath } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { path } = await req.json();

  if (!path) {
    return new Response('Path is required', { status: 400 });
  }

  try {
    revalidatePath(path);
    return new Response(`Revalidated ${path}`, { status: 200 });
  } catch (error) {
    return new Response(`Revalidation failed: ${error}`, { status: 500 });
  }
}
