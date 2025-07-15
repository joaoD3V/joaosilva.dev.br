const regex = /\s+/;

function getAllWordsFromText(text: string) {
  return text.trim().split(regex).length;
}

export function readTimeEstimate(title: string, content: string) {
  const wordsPerMinute = 200;

  const totalWords = getAllWordsFromText(title) + getAllWordsFromText(content);

  return Math.ceil(totalWords / wordsPerMinute);
}
