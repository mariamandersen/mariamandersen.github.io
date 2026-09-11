/** Keep the existing project content and carousel behaviour, but use one layout. */
export function formatCaseStudy(html: string): { html: string; introHTML: string; reflectionHTML: string } {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const source = doc.querySelector(".project-inner");
  if (!source) return { html: "", introHTML: "", reflectionHTML: "" };

  source.querySelectorAll(".case-preview-source").forEach(node => node.remove());
  source.querySelectorAll('[id^="nibio-fairwizard-carousel"]').forEach(carousel => {
    const gallery = doc.createElement("div");
    gallery.className = "case-media-group fairwizard-flow";
    gallery.setAttribute("aria-label", carousel.getAttribute("aria-label") ?? "FAIR Wizard");
    carousel.querySelectorAll("figure").forEach(figure => {
      figure.removeAttribute("hidden");
      figure.removeAttribute("aria-hidden");
      figure.className = "";
      gallery.append(figure);
    });
    carousel.replaceWith(gallery);
  });
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
  for (const selector of [".case-facts", ".case-question", ".case-introduction"]) {
    const node = source.querySelector(selector);
    if (node) {
      node.className = {".case-question": "study-summary", ".case-introduction": "study-summary", ".kicker": "study-context", ".case-facts": "study-facts"}[selector]!;
      intro.append(node);
    }
  }
  const introHTML = intro.outerHTML;
  const divider = doc.createElement("hr");
  divider.className = "study-divider";
  article.append(divider);

  let reflectionHTML = "";
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
        "fairwizard-flow": "study-fairwizard-flow",
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
      content.querySelectorAll<HTMLImageElement>("img").forEach(img => {
        if (img.closest("a")) return;
        const link = doc.createElement("a");
        link.className = "study-image-link";
        link.href = img.getAttribute("src") ?? "";
        link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", `${source.parentElement?.id.endsWith("-en") ? "Open full-size image" : "Åpne bilde i full størrelse"}: ${img.alt}`);
        img.replaceWith(link);
        link.append(img);
      });
      content.querySelectorAll(".study-narrative").forEach(block => {
        if (block.querySelector(":scope > .study-image-grid")) block.classList.add("study-narrative--gallery");
        if (block.querySelector('img[src*="figma" i], img[src*="gigamap" i], img[src*="interaktiv_protoype" i]')) block.classList.add("study-narrative--wide");
      });
      while (content.firstChild) chapter.append(content.firstChild);
    }
    if (section.classList.contains("case-reflection")) {
      chapter.classList.add("study-reflection");
      reflectionHTML = chapter.outerHTML;
    } else {
      article.append(chapter);
    }
  });
  return { html: article.outerHTML, introHTML, reflectionHTML };
}
