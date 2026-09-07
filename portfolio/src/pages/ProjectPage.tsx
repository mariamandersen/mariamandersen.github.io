import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import portfolioHTML from "../portfolio-body.html?raw";
import { getProject, projects as allProjects } from "../data/projects";
import { initCarousels } from "../portfolio-script";
import SkyboundAppGallery from "../components/SkyboundAppGallery";
import NIBIOCatalogGallery from "../components/NIBIOCatalogGallery";
import SchoolVisitGallery from "../components/SchoolVisitGallery";
import SustainedByVoicesPage from "../components/SustainedByVoicesPage";

function makePathsAbsolute(html: string): string {
  // Rewrite relative src/srcset/href attributes to absolute paths
  return html
    .replace(/\bhref="(images\/[^"]+)"/g, 'href="/$1"')
    .replace(/\bsrc="(?!http|\/|data:)([^"]+)"/g, 'src="/$1"')
    .replace(/\bsrcset="([^"]+)"/g, (_match, srcset) =>
      `srcset="${srcset.replace(/(?<![,\s])(images\/[^\s,]+)/g, '/$1')}"`
    );
}

function extractArticle(html: string, id: string): string {
  const start = html.indexOf(`id="${id}"`);
  if (start === -1) return "";
  // walk back to find the opening <article tag
  const articleStart = html.lastIndexOf("<article", start);
  if (articleStart === -1) return "";
  // walk forward counting depth
  let pos = html.indexOf(">", articleStart) + 1;
  let depth = 1;
  while (depth > 0 && pos < html.length) {
    const nextOpen = html.indexOf("<article", pos);
    const nextClose = html.indexOf("</article>", pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 1;
    } else {
      depth--;
      pos = nextClose + "</article>".length;
    }
  }
  return html.slice(articleStart, pos);
}

interface ProjectPageProps {
  lang: "no" | "en";
  onToggleLang: (lang: "no" | "en") => void;
}

export default function ProjectPage({ lang, onToggleLang }: ProjectPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  const project = getProject(slug ?? "");

  const articleId = isEn ? project?.idEn : project?.idNo;
  const articleHTML = articleId
    ? makePathsAbsolute(extractArticle(portfolioHTML, articleId))
        .replace(/(<article[^>]*class=")[^"]*(")/, '$1story-article$2')
        .replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/, '<h1$1>$2</h1>')
    : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!contentRef.current) return;
    initCarousels(contentRef.current);
  }, [articleHTML, lang]);

  if (!project) {
    return (
      <div className="portfolio-home">
        <div className="container" style={{ paddingTop: "4rem" }}>
          <Link to="/" className="back-link">← {isEn ? "Back" : "Tilbake"}</Link>
          <p style={{ marginTop: "2rem" }}>{isEn ? "Project not found." : "Prosjekt ikke funnet."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-home">
      <header>
        <div className="container bar">
          <Link to="/" className="site-name">
            Maria Malmstedt Andersen — UX Designer
          </Link>
          <div className="header-controls">
            <nav className="header-contacts" aria-label="Kontakt / Contact">
              <a href="mailto:mariam300802@gmail.com" aria-label="Send e-post" title="Send e-post">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6.5l-9 6-9-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="sr-only">E-post</span>
              </a>
              <a href="https://www.linkedin.com/in/maria-malmstedt-andersen/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <rect x="2" y="3" width="20" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 10.5v6M7 8.5v.01M11 16.5v-4.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M11 12.5c1.2 0 2 0.8 2 2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </nav>
            <div className="language-toggle" role="group" aria-label="Språk / Language">
              <button type="button" aria-pressed={isEn} onClick={() => onToggleLang("en")} aria-label="Switch to English">EN</button>
              <span aria-hidden="true" className="sep">|</span>
              <button type="button" aria-pressed={!isEn} onClick={() => onToggleLang("no")} aria-label="Bytt til norsk">NO</button>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <div className="project-page-back">
          <div className="container">
            <Link to="/" className="back-link">
              ← {isEn ? "All projects" : "Alle prosjekter"}
            </Link>
          </div>
        </div>

        {articleHTML && (
          <div className="case-study-layout">
            <figure className="story-cover">
              <img src={project.coverImage} alt={isEn ? project.titleEn : project.titleNo} loading="eager" />
            </figure>
            <div
              ref={contentRef}
              className="project-page-content story-content"
              dangerouslySetInnerHTML={{ __html: articleHTML }}
            />
          </div>
        )}

        {slug === "sustained-by-voices" && (
          <SustainedByVoicesPage lang={lang} />
        )}

        {slug === "school-visit-planner" && (
          <div className="section">
            <div className="container">
              <SchoolVisitGallery lang={lang} />
            </div>
          </div>
        )}

        {slug === "nibio" && (
          <div className="section">
            <div className="container">
              <NIBIOCatalogGallery lang={lang} />
            </div>
          </div>
        )}

        {slug === "skybound" && (
          <div className="section">
            <div className="container">
              <SkyboundAppGallery lang={lang} />
            </div>
          </div>
        )}

        {/* Next project navigation */}
        <nav className="project-nav-footer section" aria-label={isEn ? "More projects" : "Flere prosjekter"}>
          <div className="container">
            <p className="project-nav-label">{isEn ? "More projects" : "Flere prosjekter"}</p>
            <div className="project-nav-links">
              {(() => {
                const idx = allProjects.findIndex((p) => p.slug === slug);
                const prev = allProjects[(idx - 1 + allProjects.length) % allProjects.length];
                const next = allProjects[(idx + 1) % allProjects.length];
                return (
                  <>
                    <Link to={`/prosjekt/${prev.slug}`} className="project-nav-pill">
                      ← {isEn ? prev.titleEn : prev.titleNo}
                    </Link>
                    <Link to={`/prosjekt/${next.slug}`} className="project-nav-pill">
                      {isEn ? next.titleEn : next.titleNo} →
                    </Link>
                  </>
                );
              })()}
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
