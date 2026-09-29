// Writes the publication list into the HTML so search engines see it without running JavaScript.
// Run after editing data.js:  node build.js
const fs = require("fs");
global.window = global;
require("./data.js");
require("./site.js");
const P = SITE.pubs;

const fill = (file, key, html) => {
  const re = new RegExp(`(<!-- build:${key} -->)[\\s\\S]*?(<!-- /build:${key} -->)`);
  const src = fs.readFileSync(file, "utf8");
  if (!re.test(src)) throw new Error(`marker ${key} missing in ${file}`);
  fs.writeFileSync(file, src.replace(re, `$1\n${html}\n$2`));
};

const by = {};
P.forEach(p => (by[p.y] ||= []).push(p));
fill("publications.html", "list",
  Object.keys(by).sort((a, b) => b - a).map(y => `<h3 class="year-h">${y}</h3>\n` + by[y].map(pubCard).join("\n")).join("\n"));

const S = SITE.stats;
fill("index.html", "stats", [[S.citations, "Citations"], [S.hIndex, "h-index"], [P.length, "Research outputs"], [P.filter(isFirst).length, "First-authored"]]
  .map(([n, l]) => `<div class="stat reveal"><b data-n="${n}">${n}</b><span>${l}</span></div>`).join("\n"));
fill("index.html", "featured", P.filter(p => p.featured).map(pubCard).join("\n"));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync("sitemap.xml", fs.readFileSync("sitemap.xml", "utf8").replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`));
console.log(`Built ${P.length} publications, ${P.filter(p => p.featured).length} featured.`);
