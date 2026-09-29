// Shared nav, footer, helpers
if (typeof document !== "undefined") (function () {
  const page = document.body.dataset.page;
  const L = SITE.links;
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `<div class="wrap">
    <a class="brand" href="index.html"><span class="mono">YB</span><span>Yamina Boukari</span></a>
    <ul>
      <li><a href="index.html" ${page === "home" ? "aria-current=page" : ""}>Home</a></li>
      <li><a href="publications.html" ${page === "pubs" ? "aria-current=page" : ""}>Publications</a></li>
      <li><a href="about.html" ${page === "about" ? "aria-current=page" : ""}>About</a></li>
    </ul></div>`;
  document.body.prepend(nav);
  const f = document.createElement("footer");
  f.innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} Yamina Boukari · Oxford, UK</span>
    <span><a href="mailto:${L.email}">Email</a><a href="${L.scholar}">Scholar</a><a href="${L.orcid}">ORCID</a><a href="${L.linkedin}">LinkedIn</a></span></div>`;
  document.body.append(f);

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  window.observeReveal = () => document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  observeReveal();
})();

window.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
window.pubUrl = p => p.doi ? `https://doi.org/${p.doi}` : `https://scholar.google.com/scholar?q=${encodeURIComponent('"' + p.t + '"')}`;
window.isFirst = p => p.a.startsWith("Y Boukari");
window.pubCard = p => `<article class="card lift pub reveal">
  <div class="meta"><span class="tag t-${p.theme}">${SITE.themes[p.theme]}</span><span class="type">${p.type}</span>${isFirst(p) ? '<span class="type first">First author</span>' : ""}<span class="cites">${p.c ? p.c + " citation" + (p.c > 1 ? "s" : "") : ""}</span></div>
  <a class="title" href="${pubUrl(p)}" target="_blank" rel="noopener">${esc(p.t)}</a>
  <div class="authors">${esc(p.a).replace(/Y Boukari/g, "<b>Y Boukari</b>")}</div>
  <div class="venue">${esc(p.v)} · ${p.y}</div>
</article>`;
