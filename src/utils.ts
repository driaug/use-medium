import { Element, ElementCompact } from 'xml-js';
import { Root } from './types';

export function parseFeed(feed: Element | ElementCompact) {
  const typed = feed as Root;
  return typed.rss.channel.item.map(i => {
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
