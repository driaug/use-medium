import useSWR from 'swr';
import { parseFeed, fetcher } from './utils';
import { State } from './types';

/**
 * Use-Medium
 * @param username {string} Your Medium handle without @
 * @param config {object} Optional configuration parameters
 */
export function useMedium(
  username: string,
  config?: { proxy?: string },
): State {
  const endpoint = config?.proxy
    ? `${config.proxy}https://medium.com/feed/@${username}`
    : `https://thingproxy.freeboard.io/fetch/https://medium.com/feed/@${username}`;

  const { data: feed, error } = useSWR(endpoint, fetcher, {
    refreshInterval: 600000,
  });

  if (error) {
    return {
      status: 'error',
      articles: null,
    };
  }

  if (!feed) {
    return {
      status: 'loading',
      articles: null,
    };
  }

  return { status: 'connected', articles: parseFeed(feed) };
}

export * from './types';
