/** Keep the existing project content and carousel behaviour, but use one layout. */
export function formatCaseStudy(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const source = doc.querySelector(".project-inner");
  if (!source) return "";

  source.querySelectorAll(".case-preview-source").forEach(node => node.remove());
  const article = doc.createElement("article");
  article.className = "study-article";
  const intro = doc.createElement("section");
  intro.className = "study-intro";
  const title = source.querySelector("h2");
  if (title) {
    const h1 = doc.createElement("h1");
    h1.innerHTML = title.innerHTML;
    intro.append(h1);
  }
  for (const selector of [".case-question", ".kicker", ".case-facts"]) {
    const node = source.querySelector(selector);
    if (node) {
      node.className = {".case-question": "study-summary", ".kicker": "study-context", ".case-facts": "study-facts"}[selector]!;
      intro.append(node);
    }
  }
  article.append(intro);
  const divider = doc.createElement("hr");
  divider.className = "study-divider";
  article.append(divider);

  source.querySelectorAll(".case-section").forEach(section => {
    const chapter = doc.createElement("section");
    chapter.className = "study-chapter";
    const heading = doc.createElement("h2");
    heading.textContent = section.querySelector(".case-section-heading")?.textContent ?? "";
    chapter.append(heading);
    const content = section.querySelector(".case-section-content");
    if (content) {
      // Retain only classes used by interactive media; legacy card/layout styles
      // must not compete with the shared case-study typography and spacing.
      const mappings: Record<string, string> = {
        "case-narrative-block": "study-narrative",
        "case-narrative-copy": "study-copy",
        "case-media-group": "study-image-grid",
        "case-media": "study-media",
      };
      content.querySelectorAll<HTMLElement>("*").forEach(node => {
        const classes = Array.from(node.classList);
        const keep = classes.filter(c => /^(carousel|single-carousel|carousel-viewport|slide|car-prev|car-next|dots|sr-only|phone-mock|phone-mock__.*)$/.test(c));
        for (const [old, next] of Object.entries(mappings)) {
          if (classes.includes(old)) keep.push(next);
        }
        if (classes.includes("carousel")) keep.push("single-carousel");
        node.setAttribute("class", keep.join(" "));
        node.removeAttribute("style");
      });
      content.querySelectorAll(".study-media").forEach(media => {
        if (media.querySelectorAll(":scope > figure").length > 1) media.classList.add("study-image-grid");
      });
      content.querySelectorAll(".study-narrative").forEach(block => {
        if (block.querySelector(":scope > .study-image-grid")) block.classList.add("study-narrative--gallery");
      });
      while (content.firstChild) chapter.append(content.firstChild);
    }
    article.append(chapter);
  });
  return article.outerHTML;
}
