export interface Root {
  _declaration: Declaration;
  rss: Rss;
}

export interface Declaration {
  _attributes: Attributes;
}

export interface Attributes {
  version: string;
  encoding: string;
}

export interface Rss {
  _attributes: Attributes2;
  channel: Channel;
}

export interface Attributes2 {
  'xmlns:dc': string;
  'xmlns:content': string;
  'xmlns:atom': string;
  version: string;
  'xmlns:cc': string;
}

export interface Channel {
  title: Title;
  description: Description;
  link: Link;
  image: Image;
  generator: Generator;
  lastBuildDate: LastBuildDate;
  'atom:link': AtomLink[];
  webMaster: WebMaster;
  item: Item[];
}

export interface Title {
  _cdata: string;
}

export interface Description {
  _cdata: string;
}

export interface Link {
  _text: string;
}

export interface Image {
  url: Url;
  title: Title2;
  link: Link2;
}

export interface Url {
  _text: string;
}

export interface Title2 {
  _text: string;
}

export interface Link2 {
  _text: string;
}

export interface Generator {
  _text: string;
}

export interface LastBuildDate {
  _text: string;
}

export interface AtomLink {
  _attributes: Attributes3;
}

export interface Attributes3 {
  href: string;
  rel: string;
  type?: string;
}

export interface WebMaster {
  _cdata: string;
}

export interface Item {
  title: Title3;
  description: Description2;
  link: Link3;
  guid: Guid;
  category: Category[];
  'dc:creator': DcCreator;
  pubDate: PubDate;
  'atom:updated': AtomUpdated;
}

export interface Title3 {
  _cdata: string;
}

export interface Description2 {
  _cdata: string;
}

export interface Link3 {
  _text: string;
}

export interface Guid {
  _attributes: Attributes4;
  _text: string;
}

export interface Attributes4 {
  isPermaLink: string;
}

export interface Category {
  _cdata: string;
}

export interface DcCreator {
  _cdata: string;
}

export interface PubDate {
  _text: string;
}

export interface AtomUpdated {
  _text: string;
}
