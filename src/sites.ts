export interface Site {
  id: string;
  title: string;
  url: string;
  articleSelector: string;
  headlineSelector: string;
  bodySelector?: string;
  imageSelector?: string;
}

export const sites: Site[] = [
  {
    id: "telegraph",
    title: "Telegraph",
    url: "https://www.telegraph.co.uk/",
    articleSelector: ``,
    headlineSelector: "h2",
  },
  {
    id: "bbc",
    title: "BBC News",
    url: "https://www.bbc.co.uk/news",
    articleSelector: `[data-entityid^="container-top-stories"]`,
    headlineSelector: "h3",
    bodySelector: "p",
    imageSelector: "img",
  },
  {
    // TODO: Layout very broken.
    id: "dailymail",
    title: "Daily Mail", // TODO: Should this be called Mail Online?
    url: "https://www.dailymail.co.uk/home/index.html",
    articleSelector: ".article",
    headlineSelector: "h2",
    bodySelector: "p",
    imageSelector: "img",
  },
  {
    id: "guardian",
    title: "The Guardian",
    url: "https://www.theguardian.com/uk",
    articleSelector: ``,
    headlineSelector: "h3",
    bodySelector: "",
  },
  {
    id: "mirror",
    title: "Mirror",
    url: "https://www.mirror.co.uk/",
    articleSelector: `article`,
    headlineSelector: "h2",
    imageSelector: "img",
  },
  {
    id: "ft",
    title: "Financial Times",
    url: "https://www.ft.com/",
    articleSelector: ``,
    headlineSelector: `[data-trackable-context-story-link="heading-link"]`,
  },
  {
    id: "independent",
    title: "The Independent",
    url: "https://www.independent.co.uk/",
    articleSelector: ``,
    headlineSelector: "h2",
  },
  {
    // TODO: Layout very broken.
    id: "sky",
    title: "Sky News",
    url: "https://news.sky.com/uk",
    articleSelector: ``,
    headlineSelector: ".ui-story-headline",
  },
];
