# Yamina Boukari: personal research website

A static site with no build step and no dependencies. It is plain HTML, CSS and JavaScript.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `publications.html` | Publications list with search, filters and sorting |
| `about.html` | Career, education and awards |
| `data.js` | **Content.** Publications, citation stats and links. Edit this to add papers or update citation counts. |
| `styles.css` | Styles, including dark mode |
| `site.js` | Shared navigation, footer and publication-card template |

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Add a publication

Add an entry to the `pubs` array in `data.js`:

```js
{ y: 2026, t: "Title", a: "Y Boukari, A Coauthor, et al.", v: "Journal 1(2)", type: "Article", theme: "data", c: 0, doi: "10.xxxx/xxxxx" }
```

- `type`: one of Article, Commentary, Preprint, Abstract, Thesis
- `theme`: `data`, `covid`, `justice` or `biomat`
- Add `featured: true` to show the paper on the home page.

## Publish (free)

Push this repo to GitHub, then go to **Settings → Pages → Deploy from branch → main / root**. The site will be live at `https://<username>.github.io/<repo>/`. You can add a custom domain in the same settings screen.
