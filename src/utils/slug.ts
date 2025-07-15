export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const regex =
  /(.*)-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;

export function splitSlugAndUUID(combined: string) {
  const match = combined.match(regex);

  if (!match) {
    throw new Error('Invalid format.');
  }

  const slug = match[1];
  const uuid = match[2];
  return { slug, uuid };
}
