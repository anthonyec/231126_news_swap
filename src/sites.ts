import { HTMLElement } from "node-html-parser";

export interface ContentItemConfig {
  selector: string;
  get?: (el: HTMLElement) => any;
  set?: (el: HTMLElement, source: any) => void;
}

export interface Site {
  id: string;
  title: string;
  url: string;
  articleSelector: string;
  headlineSelector: string;
  bodySelector?: string;
  imageSelector?: string;
  image?: ContentItemConfig;
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
    image: {
      selector: "img",
      set: (destEl, source) => {
        destEl.setAttribute("src", source.src);
        destEl.setAttribute("data-src", source.src);
        destEl.setAttribute("srcset", "");

        //  @TODO - try to keep proportions of the image, not working
        //  being stripped or modified client side
        destEl.setAttribute("style", "height:auto;");
      },
    },
  },
  {
    // TODO: Layout very broken.
    id: "dailymail",
    title: "Daily Mail", // TODO: Should this be called Mail Online?
    url: "https://www.dailymail.co.uk/home/index.html",
    articleSelector: ".article",
    headlineSelector: "h2",
    bodySelector: "p",
    image: {
      selector: "img",
      get: (el) => {
        return {
          src: el.getAttribute("data-src"),
          width: el.getAttribute("width"),
          height: el.getAttribute("height"),
        };
      },
    },
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
