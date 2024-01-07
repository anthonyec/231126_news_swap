import { HTMLElement } from "node-html-parser";

import { Site } from "./sites";

export type MaybeHTMLElement = HTMLElement | null;

export interface Article {
  headline?: MaybeHTMLElement;
  body?: MaybeHTMLElement;
  image?: MaybeHTMLElement;
}

export function swapArticle(
  destArticle: Article,
  destSite: Site,
  sourceArticle: Article,
  sourceSite: Site,
) {
  if (!destArticle || !sourceArticle) {
    return;
  }

  if (destArticle.headline && sourceArticle.headline) {
    destArticle.headline.textContent = sourceArticle.headline.textContent;
  }

  if (destArticle.body && sourceArticle.body) {
    destArticle.body.textContent = sourceArticle.body.textContent;
  }

  if (
    destArticle.image &&
    sourceArticle.image &&
    destSite.image &&
    sourceSite.image
  ) {
    //  TODO: Workout how to swap images reliably
    const source = sourceSite.image.get
      ? sourceSite.image.get(sourceArticle.image)
      : sourceArticle.image.getAttribute("src");

    if (source && source.src && destSite.image && destArticle.image) {
      if (destSite.image.set) {
        destSite.image.set(destArticle.image, source);
      } else {
        destArticle.image.setAttribute("src", source.src);
      }
    }
  }
}

export function getSiteArticles(site: Site, document: HTMLElement): Article[] {
  const articles: Article[] = [];

  if (site.articleSelector) {
    //  selecting a parent article element first and other selectors
    //  then used in the context of that parent
    const articleEls = document.querySelectorAll(site.articleSelector);
    articleEls.forEach((articleEl) => {
      const article: Article = {};

      if (site.headlineSelector) {
        article.headline = articleEl.querySelector(site.headlineSelector);
      }
      if (site.bodySelector) {
        article.body = articleEl.querySelector(site.bodySelector);
      }
      if (site.image && site.image.selector) {
        article.image = articleEl.querySelector(site.image.selector);
      }

      articles.push(article);
    });
  } else {
    //  global selectors
    //  assuming we always have at least headline
    if (site.headlineSelector) {
      const headlines = document.querySelectorAll(site.headlineSelector);

      const bodies = site.bodySelector
        ? document.querySelectorAll(site.bodySelector)
        : [];
      const images = site.imageSelector
        ? document.querySelectorAll(site.imageSelector)
        : [];

      headlines.forEach((headline, index) => {
        const article: Article = {
          headline,
        };

        if (bodies && bodies[index]) {
          article.body = bodies[index];
        }

        if (images && images[index]) {
          article.image = images[index];
        }
        articles.push(article);
      });
    }
  }

  return articles;
}
