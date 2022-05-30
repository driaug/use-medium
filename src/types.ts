export interface CData {
  _cdata: string;
}

export interface Text {
  _text: string;
}

export interface Root {
  _declaration: Declaration;
  rss: Rss;
}

export interface Declaration {
  _attributes: {
    version: string;
    encoding: string;
  };
}

export interface Rss {
  _attributes: {
    'xmlns:dc': string;
    'xmlns:content': string;
    'xmlns:atom': string;
    version: string;
    'xmlns:cc': string;
  };
  channel: Articles;
}

export interface Articles {
  title: CData;
  description: CData;
  link: Text;
  image: Image;
  generator: Text;
  lastBuildDate: Text;
  'atom:link': AtomLink[];
  webMaster: CData;
  item: ArticleItem[];
}

export interface Image {
  url: Text;
  title: Text;
  link: Text;
}

export interface AtomLink {
  _attributes: {
    href: string;
    rel: string;
    type?: string;
  };
}

export interface ArticleItem {
  title: CData;
  description: CData;
  link: Text;
  guid: Text;
  category: CData[];
  'dc:creator': CData;
  pubDate: Text;
  'atom:updated': Text;
}
