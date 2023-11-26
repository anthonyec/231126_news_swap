# News swap prototype

Prototyping an idea from [Zdenek](https://github.com/zdenekhynek).

## Requirements

- Node 18

## Getting started

```sh
npm ci
npm run dev
```

To swap news sources use the URL scheme `/swap/:source/:destination`. Source is where the news content should come from, and destination is the layout used to display the content.

For example to display Daily Mail content in the BBC News layout, go to `/swap/dailymail/bbc`.

The full list of available news websites can be found in `./src/sites.ts`. Use the `id` as the source or destination.
