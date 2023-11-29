import { Hono } from "hono";
import { serve } from "@hono/node-server";

import { sites } from "./sites";
import { fetchDocument } from "./fetch_document";
import { getSiteArticles, swapArticle } from "./articles";

const app = new Hono();

app.get("/swap/:source/:destination", async (context) => {
  const source = context.req.param("source");
  const destination = context.req.param("destination");
  if (source === destination)
    throw Error("Source and destination cannot be the same"); // TODO: Replace with returned errors.

  const sourceSite = sites.find((site) => site.id === source);
  const destinationSite = sites.find((site) => site.id === destination);
  if (!sourceSite || !destinationSite)
    throw Error("Source or destination does not exist");

  const sourceDocument = await fetchDocument(sourceSite.url);
  const destinationDocument = await fetchDocument(destinationSite.url);

  // parse both documents
  const sourceArticles = getSiteArticles(sourceSite, sourceDocument);
  const destinationArticles = getSiteArticles(
    destinationSite,
    destinationDocument,
  );

  destinationArticles.forEach((destArticle, index) => {
    swapArticle(destArticle, sourceArticles[index]);
  });

  console.log(
    `Swapping ${destinationArticles.length} ${destinationSite.title} titles with ${sourceArticles.length} ${sourceSite.title} titless`,
  );

  return context.html(destinationDocument.outerHTML);
});

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
