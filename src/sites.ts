interface Site {
  id: string;
  title: string;
  url: string;
  headlineSelector: string;
}

export const sites: Site[] = [
  {
    id: "telegraph",
    title: "Telegraph",
    url: "https://www.telegraph.co.uk/",
    headlineSelector: "h2",
  },
  {
    id: "bbc",
    title: "BBC News",
    url: "https://www.bbc.co.uk/news",
    headlineSelector: "h3",
  },
  {
    // TODO: Layout very broken.
    id: "dailymail",
    title: "Daily Mail", // TODO: Should this be called Mail Online?
    url: "https://www.dailymail.co.uk/home/index.html",
    headlineSelector: "h2",
  },
  {
    id: "guardian",
    title: "The Guardian",
    url: "https://www.theguardian.com/uk",
    headlineSelector: "h3",
  },
  {
    id: "mirror",
    title: "Mirror",
    url: "https://www.mirror.co.uk/",
    headlineSelector: "h2",
  },
  {
    id: "ft",
    title: "Financial Times",
    url: "https://www.ft.com/",
    headlineSelector: `[data-trackable-context-story-link="heading-link"]`,
  },
  {
    id: "independent",
    title: "The Independent",
    url: "https://www.independent.co.uk/",
    headlineSelector: "h2",
  },
  {
    // TODO: Layout very broken.
    id: "sky",
    title: "Sky News",
    url: "https://news.sky.com/uk",
    headlineSelector: ".ui-story-headline",
  },
];
