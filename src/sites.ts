interface Site {
  id: string
  title: string
  url: string
  headlineSelector: "h1" | "h2" | "h3" | "h4"
}

export const sites: Site[] = [
  {
    id: "telegraph",
    title: "Telegraph",
    url: "https://www.telegraph.co.uk/",
    headlineSelector: "h2"
  },
  {
    id: "bbc",
    title: "BBC News",
    url: "https://www.bbc.co.uk/news",
    headlineSelector: "h3"
  },
  {
    id: "dailymail",
    title: "Daily Mail", // TODO: Should this be called Mail Online?
    url: "https://www.dailymail.co.uk/home/index.html",
    headlineSelector: "h2"
  },
  {
    id: "guardian",
    title: "The Guardian",
    url: "https://www.theguardian.com/uk",
    headlineSelector: "h3"
  }
]
