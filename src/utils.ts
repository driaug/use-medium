import parser, { Element, ElementCompact } from 'xml-js';
import { Root } from './types';

export function parseFeed(feed: Element | ElementCompact) {
  return (feed as Root).rss.channel.item.map(i => {
    return {
      title: i.title._cdata,
      description: i.description._cdata.replace(/<[^>]*>?/gm, ''),
      author: i['dc:creator']._cdata,
      link: i.link._text,
      guid: i.guid._text,
      date: new Date(i.pubDate._text),
    };
  });
}

export function fetcher(url: string) {
  return fetch(url)
    .then(r => r.text())
    .then(xml => parser.xml2js(xml, { compact: true }));
}
