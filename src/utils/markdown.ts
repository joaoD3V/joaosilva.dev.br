export function stripMarkdown(markdown: string): string {
  return (
    markdown
      .replace(/^#+\s+/gm, '')
      .replace(/(\*\*|__|\*|_|`)/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/^\s*>\s+/gm, '')
      .replace(/^\s*[-+*]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
      .replace(/^(-{3,}|\*{3,}|_{3,})$/gm, '')
      .replace(/<[^>]*>/g, '')
      .trim()
  );
}