export function parseFeed(feed: Document) {
  return Array.from(feed.querySelectorAll('rss > channel > item')).map(i => {
    return {
      title: i.querySelector('title')?.childNodes[0].textContent as string,
      description: i
        .querySelector('description')
        ?.childNodes[0].textContent?.replace(/<[^>]*>?/gm, '') as string,
      author: i.querySelector('dc\\:creator')?.innerHTML as string,
      link: i.querySelector('link')?.innerHTML as string,
      guid: i.querySelector('guid')?.innerHTML as string,
      date: new Date(i.querySelector('pubDate')?.innerHTML ?? ''),
    };
  });
}

export function fetcher(url: string) {
  return fetch(url)
    .then(r => r.text())
    .then(xml => {
      return new window.DOMParser().parseFromString(xml, 'text/xml');
    });
}
