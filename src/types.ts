export interface Article {
  title: string;
  description: string;
  author: string;
  link: string;
  guid: string;
  date: Date;
}

export type State =
  | { status: 'loading' | 'error'; articles: null }
  | { status: 'connected'; articles: Article[] };
