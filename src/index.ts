import useSWR from 'swr';
import { parseFeed, fetcher } from './utils';

/**
 * Use-Medium
 * @param username {string} Your Medium handle without @
 * @param config {object} Optional configuration parameters
 */
export function useMedium(username: string, config: { proxy?: string }) {
  const endpoint = config.proxy
    ? `${config.proxy}https://medium.com/feed/@${username}`
    : `https://thingproxy.freeboard.io/fetch/https://medium.com/feed/@${username}`;

  const { data: feed, error } = useSWR(endpoint, fetcher, {
    refreshInterval: 600000,
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
