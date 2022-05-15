import useSWR from 'swr';
import fetch from 'unfetch';
import parser from 'xml-js';
import { parseFeed } from './utils';

const fetcher = (url: string) =>
  fetch(url)
    .then(r => r.text())
    .then(xml => parser.xml2js(xml, { compact: true }));

export function useMedium(username: string) {
  const endpoint = `https://thingproxy.freeboard.io/fetch/https://medium.com/feed/@${username}`;

  const { data: feed, error } = useSWR(endpoint, fetcher, {
    refreshInterval: 60,
  });

  if (error) {
    console.error(error);
  }

  if (!feed) {
    return;
  }

  return parseFeed(feed);
}

export * from './types';
