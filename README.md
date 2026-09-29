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
| `build.js` | Writes the publications into the HTML for search engines (see below) |
| `sitemap.xml`, `robots.txt` | Help search engines find the pages |
| `CNAME` | Custom domain for GitHub Pages. Don't delete it. |
| `favicon.svg`, `*.png` | Browser icon and social-sharing preview image |

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

Then run `node build.js` (requires [Node.js](https://nodejs.org)). This copies the list into the HTML so Google can index every paper, and it updates the sitemap date. The site still works without this step, but search engines will see the old list.

## Publish (free)

Push this repo to GitHub, then go to **Settings → Pages → Deploy from branch → main / root**. The site will be live at `https://<username>.github.io/<repo>/`. You can add a custom domain in the same settings screen.

## Search engines

- The pages include Person structured data (JSON-LD) that links her ORCID, Google Scholar, LinkedIn and institutional profiles.
- Register the site in [Google Search Console](https://search.google.com/search-console) as a Domain property, verified by a TXT record in Cloudflare DNS. Submit `https://yaminaboukari.com/sitemap.xml`.
- Add `https://yaminaboukari.com` to her Google Scholar, ORCID and LinkedIn profiles. These links help most with search ranking.
