import { HTMLElement } from "node-html-parser";

import { Site } from "./sites";

export interface Article {
  headline?: HTMLElement;
  body?: HTMLElement;
  image?: HTMLElement;
}

export function swapArticle(destArticle: Article, sourceArticle: Article) {
  if (!destArticle || !sourceArticle) {
    return;
  }

  if (destArticle.headline && sourceArticle.headline) {
    destArticle.headline.textContent = sourceArticle.headline.textContent;
  }

  if (destArticle.body && sourceArticle.body) {
    sourceArticle.body.textContent = destArticle.body.textContent;
  }
}

export function getSiteArticles(site: Site, document: HTMLElement): Article[] {
  const titles = document.querySelectorAll(site.headlineSelector);

  const articles: Article[] = [];
  titles.forEach((title) => {
    articles.push({
      headline: title,
    });
  });

  return articles;

  // const articles = document.querySelectorAll(siteConfig.articleSelector);
  // if (articles.length === 0)
  //   throw Error(`No articles found for ${JSON.stringify(siteConfig)}.`);
  // return articles[0];
}
