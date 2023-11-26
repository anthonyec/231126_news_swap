import { Hono } from "hono";
import { serve } from '@hono/node-server'

import { sites } from "./sites"
import { fetchDocument } from "./fetch_document";

const app = new Hono();

app.get("/swap/:source/:destination", async (context) => {
  const source = context.req.param("source")
  const destination = context.req.param("destination")
  if (source === destination) throw Error("Source and destination cannot be the same") // TODO: Replace with returned errors.

  const sourceSite = sites.find(site => site.id === source)
  const destinationSite = sites.find(site => site.id === destination)
  if (!sourceSite || !destinationSite) throw Error("Source or destination does not exist")

  const sourceDocument = await fetchDocument(sourceSite.url)
  const destinationDocument = await fetchDocument(destinationSite.url)

  const sourceTitles = sourceDocument.querySelectorAll(sourceSite.headlineSelector)
  const destinationTitles = destinationDocument.querySelectorAll(destinationSite.headlineSelector)

  // TODO: Do something smarter here.
  destinationTitles.forEach((destinationTitle, index) => {
    if (!sourceTitles[index]) return
    destinationTitle.textContent = sourceTitles[index].textContent
  })

  console.log(`Swapping ${destinationTitles.length} ${destinationSite.title} titles with ${sourceTitles.length} ${sourceSite.title} titless`)

  return context.html(destinationDocument.outerHTML)
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
});
