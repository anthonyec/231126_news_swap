import { parse, HTMLElement } from "node-html-parser";

export async function fetchDocument(url: string): Promise<HTMLElement> {
  const response = await fetch(url);
  const html = await response.text();

  return parse(html);
}
