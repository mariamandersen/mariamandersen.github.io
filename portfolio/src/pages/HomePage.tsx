import { Link } from "react-router-dom";
import { projects } from "../data/projects";

interface HomePageProps {
  lang: "no" | "en";
  onToggleLang: (lang: "no" | "en") => void;
}

export default function HomePage({ lang, onToggleLang }: HomePageProps) {
  const isEn = lang === "en";

  return (
    <div className="portfolio-home">
      {/* Header */}
      <header>
        <div className="container bar">
          <span className="site-name">Maria Malmstedt Andersen — UX Designer</span>
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
              <a href="https://github.com/mariamandersen" target="_blank" rel="noopener" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 .1.7 1.6.7 1.6.9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.5-1.4-2.7-.3-5.5-1.3-5.5-5.7 0-1.2.4-2.3 1-3.1-.1-.3-.4-1.4.1-2.8 0 0 .8-.3 2.8 1.1a9.6 9.6 0 0 1 5 0c2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.5.1 2.8.6.8 1 1.9 1 3.1 0 4.4-2.8 5.4-5.5 5.7.3.3.6.8.6 1.6v2.4c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" fill="currentColor"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </nav>
            <div className="language-toggle" role="group" aria-label="Språk / Language">
              <button
                type="button"
                aria-pressed={isEn}
                onClick={() => onToggleLang("en")}
                aria-label="Switch to English"
              >EN</button>
              <span aria-hidden="true" className="sep">|</span>
              <button
                type="button"
                aria-pressed={!isEn}
                onClick={() => onToggleLang("no")}
                aria-label="Bytt til norsk"
              >NO</button>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="home-hero section">
          <div className="container home-hero-grid">
            <div className="home-hero-text">
              <h1>{isEn ? "Hi! I'm Maria." : "Hei! Jeg er Maria."}</h1>
              <p className="hero-support">
                {isEn
                  ? "I enjoy understanding people, finding out what they need help with and solving problems that matter to them. As a UX designer, I use that curiosity to create solutions that make everyday life easier."
                  : "Jeg liker å forstå mennesker, finne ut hva de trenger hjelp med og løse problemer som betyr noe for dem. Som UX-designer bruker jeg denne nysgjerrigheten til å lage løsninger som gjør hverdagen enklere."}
              </p>
            </div>
            <figure className="home-hero-photo">
              <img
                src="/images/meg_selv_ub.png"
                alt="Portrett av Maria Malmstedt Andersen"
                width="900"
                height="1200"
                loading="eager"
              />
            </figure>
          </div>
        </section>

        {/* Project grid */}
        <section className="home-projects section">
          <div className="container">
            <h2 className="home-projects-heading">
              {isEn ? "Projects" : "Prosjekter"}
            </h2>
            <div className="project-cards-grid">
              {projects.map((proj) => (
                <Link
                  key={proj.slug}
                  to={`/prosjekt/${proj.slug}`}
                  className="project-card"
                  state={{ lang }}
                >
                  <div className="project-card-image">
                    <img
                      src={proj.coverImage}
                      alt={isEn ? proj.titleEn : proj.titleNo}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-card-body">
                    <div className="project-card-meta">
                      <span className="project-card-year">{proj.year}</span>
                      <div className="project-card-tags">
                        {(isEn ? proj.tagsEn : proj.tags).slice(0, 3).map((tag) => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="project-card-title">
                      {isEn ? proj.titleEn : proj.titleNo}
                      {(isEn ? proj.shortTitleEn : proj.shortTitleNo) && (
                        <span className="project-card-subtitle">
                          {isEn ? proj.shortTitleEn : proj.shortTitleNo}
                        </span>
                      )}
                    </h3>
                    <p className="project-card-question">
                      {isEn ? proj.questionEn : proj.questionNo}
                    </p>
                    <span className="project-card-cta" aria-hidden="true">
                      {isEn ? "Read case study" : "Les case study"} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact footer */}
        <footer className="home-footer section">
          <div className="container home-footer-inner">
            <p className="home-footer-cta">
              {isEn
                ? "Do you have a complex problem that needs a clearer solution?"
                : "Har du et komplekst problem som trenger en tydeligere løsning?"}
            </p>
            <div className="home-footer-links">
              <a href="mailto:mariam300802@gmail.com" className="footer-link-pill">
                {isEn ? "Send me an email" : "Send meg en e-post"} ↗
              </a>
              <a
                href="https://www.linkedin.com/in/maria-malmstedt-andersen/"
                target="_blank"
                rel="noopener"
                className="footer-link-pill"
              >
                LinkedIn ↗
              </a>
            </div>
            <p className="home-footer-copy">
              © <span>{new Date().getFullYear()}</span> Maria Malmstedt Andersen
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
