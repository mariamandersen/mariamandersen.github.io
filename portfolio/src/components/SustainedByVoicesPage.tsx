const BASE = "/images/sustained-by-voices";
const img01 = `${BASE}/01-ferdig-installasjon.jpg`;
const img02 = `${BASE}/02-felles-ideutvikling.jpg`;
const img03 = `${BASE}/03-konsept-lys-og-kropp.jpg`;
const img04 = `${BASE}/04-konsept-trekk-og-bevegelse.jpg`;
const img05 = `${BASE}/05-konsept-beroring.jpg`;
const img06 = `${BASE}/06-papirprototype.jpg`;
const img07 = `${BASE}/07-interaksjonsskisse.jpg`;
const img08 = `${BASE}/08-bygging-av-kroppen.jpg`;
const img09 = `${BASE}/09-oppsett-av-installasjonen.jpg`;
const img10 = `${BASE}/10-utstillingsplakat.png`;

interface Props { lang?: "no" | "en" }

export default function SustainedByVoicesPage({ lang = "no" }: Props) {
  const isEn = lang === "en";

  return (
    <article className="case-project case-study-layout" style={{ maxWidth: "var(--maxw, 1040px)", marginInline: "auto", paddingInline: "var(--gutter, clamp(24px, 6vw, 88px))" }}>

      {/* ── Hero image ── */}
      <figure style={{ margin: "0 0 clamp(2rem, 5vw, 4rem)", borderRadius: 12, overflow: "hidden", lineHeight: 0 }}>
        <img
          src={img01}
          alt={isEn
            ? "The finished Sustained by Voices installation — a human-scale abstract robot in a dark space"
            : "Den ferdige Sustained by Voices-installasjonen — en abstrakt robot i menneskestørrelse i et mørkt rom"}
          style={{ width: "100%", height: "clamp(320px, 55vw, 600px)", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </figure>

      {/* ── Intro ── */}
      <section style={{ marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1rem", color: "var(--color-text)" }}>
          Sustained by Voices
        </h1>
        <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.18rem)", lineHeight: 1.7, color: "var(--color-text-muted)", maxWidth: "62ch", marginBottom: "2rem" }}>
          {isEn
            ? "How can a voice keep something alive? Sustained by Voices is an interactive installation where visitors maintain the pulse of an abstract, human-scale robot by talking to it. The installation explores care through voice, attention, and presence."
            : "Hvordan kan en stemme holde noe i live? Sustained by Voices er en interaktiv installasjon der besøkende opprettholder pulsen til en abstrakt robot i menneskestørrelse ved å snakke til den. Installasjonen utforsker omsorg gjennom stemme, oppmerksomhet og tilstedeværelse."}
        </p>
        <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem 2rem", fontSize: "0.875rem" }}>
          {[
            { t: isEn ? "Context" : "Kontekst",       v: isEn ? "Tangible Interaction, master project" : "Tangible Interaction, masterprosjekt" },
            { t: isEn ? "Team" : "Team",               v: isEn ? "Five master's students — informatics, design, use and interaction" : "Fem masterstudenter i informatikk: design, bruk og interaksjon" },
            { t: isEn ? "Focus areas" : "Arbeidsområder", v: isEn ? "Concept development, interaction design, physical prototyping" : "Idéutvikling, konseptutvikling, interaksjonsdesign og fysisk prototyping" },
          ].map(({ t, v }) => (
            <div key={t}>
              <dt style={{ fontWeight: 700, color: "var(--color-text)", marginBottom: "0.25rem" }}>{t}</dt>
              <dd style={{ color: "var(--color-text-muted)", margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", marginBottom: "clamp(2rem, 5vw, 4rem)" }} />

      {/* ── Fra tema til ideer ── */}
      <Section label={isEn ? "From Theme to Ideas" : "Fra tema til ideer"}>
        <NarrativeBlock
          text={isEn
            ? "The starting point was a single theme: pulse. We each explored what pulse meant to us individually, then brought our ideas together and discussed them as a group. We moved between opening up new directions and narrowing down which ideas to pursue further."
            : "Utgangspunktet var ett tema: puls. Vi startet individuelt med å utforske hva puls betydde for hver av oss, før vi samlet ideene og diskuterte dem i gruppen. Vi vekslet mellom å åpne opp for nye retninger og å snevre inn hvilke ideer vi ville arbeide videre med."}
          image={img02}
          imageAlt={isEn ? "Group idea development with drawing and discussion around a table" : "Felles idéutvikling med tegning og diskusjon rundt bordet"}
          caption={isEn ? "Group idea development with drawing and discussion around the table." : "Felles idéutvikling med tegning og diskusjon rundt bordet."}
        />
      </Section>

      {/* ── Utforsking av konsept ── */}
      <Section label={isEn ? "Exploring Concept and Interaction" : "Utforsking av konsept og interaksjon"}>
        <p style={bodyStyle}>
          {isEn
            ? "Concept development took up a significant part of the project. We developed alternatives, presented them, received feedback, and adjusted. Both the body's expression and the ways of interacting with it were explored before we settled on voice as the central interaction."
            : "Konseptutviklingen tok en stor del av prosjektet. Vi utviklet alternativer, presenterte dem, fikk tilbakemeldinger og justerte. Både kroppens uttrykk og måtene å samhandle med den på ble utforsket før vi landet på stemme som den sentrale interaksjonen."}
        </p>
        <figure style={{ margin: "1.5rem 0 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(8px, 1.5vw, 16px)" }}>
            {[
              { src: img03, alt: isEn ? "Concept: light and body" : "Konsept: lys og kropp" },
              { src: img04, alt: isEn ? "Concept: pull and movement" : "Konsept: trekk og bevegelse" },
              { src: img05, alt: isEn ? "Concept: touch" : "Konsept: berøring" },
            ].map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 8, display: "block" }}
              />
            ))}
          </div>
          <figcaption style={captionStyle}>
            {isEn
              ? "AI-generated concept visualisations — exploring possible expressions and interactions."
              : "AI-genererte konseptvisualiseringer – utforsking av mulige uttrykk og interaksjoner."}
          </figcaption>
        </figure>
      </Section>

      {/* ── Fra idé til fysisk utforsking ── */}
      <Section label={isEn ? "From Idea to Physical Exploration" : "Fra idé til fysisk utforsking"}>
        <p style={bodyStyle}>
          {isEn
            ? "We brought the ideas further through simple physical prototypes. Paper models made it possible to explore the body's form and movement, while sketches helped us make concrete how the installation should respond over time."
            : "Vi tok ideene videre gjennom enkle fysiske prototyper. Papirmodeller gjorde det mulig å utforske kroppens form og bevegelse, mens skisser hjalp oss med å konkretisere hvordan installasjonen skulle reagere over tid."}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(12px, 2vw, 24px)", marginTop: "1.5rem" }}>
          <figure style={{ margin: 0 }}>
            <img
              src={img06}
              alt={isEn ? "A paper prototype to physically explore form and movement" : "En papirprototype for å utforske kropp og bevegelse fysisk"}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 8, display: "block" }}
            />
            <figcaption style={captionStyle}>
              {isEn
                ? "A paper prototype made it possible to explore body and movement physically."
                : "En papirprototype gjorde kropp og bevegelse mulig å utforske fysisk."}
            </figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <img
              src={img07}
              alt={isEn ? "Sketches of the body's response and development over time" : "Skisser av kroppens respons og utvikling over tid"}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", objectPosition: "center", borderRadius: 8, background: "var(--color-surface)", display: "block" }}
            />
            <figcaption style={captionStyle}>
              {isEn
                ? "Sketches of the body's response and development over time."
                : "Skisser av kroppens respons og utvikling over tid."}
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ── Stemme som omsorg ── */}
      <Section label={isEn ? "Voice as Care" : "Stemme som omsorg"}>
        <p style={bodyStyle}>
          {isEn
            ? "In the final concept, voice became the way to give care. Visitors had to speak to the installation to keep its pulse alive. The body's life was therefore dependent on human presence and attention."
            : "I det endelige konseptet ble stemmen måten å gi omsorg på. Besøkende måtte snakke til installasjonen for å holde pulsen i live. Kroppens liv var dermed avhengig av menneskelig tilstedeværelse og oppmerksomhet."}
        </p>
        <p style={{ ...bodyStyle, marginTop: "1rem" }}>
          {isEn
            ? "The installation also explores the limits of this care: what does it mean to keep giving attention to something that cannot be sustained forever?"
            : "Installasjonen utforsker også grensene for denne omsorgen: Hva betyr det å fortsette å gi oppmerksomhet til noe som ikke kan opprettholdes for alltid?"}
        </p>
      </Section>

      {/* ── Bygging og oppsett ── */}
      <Section label={isEn ? "Building and Installation" : "Bygging og oppsett"}>
        <p style={bodyStyle}>
          {isEn
            ? "Through physical prototyping we worked with body, scale, and materials. We assembled the parts into a human-scale installation and continued refining how it should appear in the space."
            : "Gjennom fysisk prototyping arbeidet vi med kropp, skala og materialer. Vi samlet delene til en installasjon i menneskestørrelse og arbeidet videre med hvordan den skulle fremstå i rommet."}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(12px, 2vw, 24px)", marginTop: "1.5rem" }}>
          <figure style={{ margin: 0 }}>
            <img
              src={img08}
              alt={isEn ? "Physical prototyping and building the body" : "Fysisk prototyping og bygging av kroppen"}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 8, display: "block" }}
            />
            <figcaption style={captionStyle}>
              {isEn ? "Physical prototyping and building the body." : "Fysisk prototyping og bygging av kroppen."}
            </figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <img
              src={img09}
              alt={isEn ? "Setting up and adjusting the installation" : "Oppsett og justering av installasjonen"}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 8, display: "block" }}
            />
            <figcaption style={captionStyle}>
              {isEn ? "Setting up and adjusting the installation." : "Oppsett og justering av installasjonen."}
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ── Resultat og utstilling ── */}
      <Section label={isEn ? "Result and Exhibition" : "Resultat og utstilling"}>
        <p style={bodyStyle}>
          {isEn
            ? "Sustained by Voices was the result of a process that moved between abstract ideas and concrete exploration. From the theme of pulse, we developed an installation that brought together voice, presence, and care in a physical experience."
            : "Sustained by Voices ble resultatet av en prosess som vekslet mellom abstrakte ideer og konkret utprøving. Fra temaet puls utviklet vi en installasjon som knyttet stemme, tilstedeværelse og omsorg sammen i en fysisk opplevelse."}
        </p>
        <figure style={{ margin: "2rem 0 0", display: "inline-block" }}>
          <a href={img10} target="_blank" rel="noopener" title={isEn ? "Open exhibition poster in full size" : "Åpne utstillingsplakat i full størrelse"}>
            <img
              src={img10}
              alt={isEn ? "Exhibition poster for Sustained by Voices" : "Utstillingsplakat for Sustained by Voices"}
              style={{
                width: "min(340px, 100%)",
                height: "auto",
                display: "block",
                borderRadius: 8,
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            />
          </a>
          <figcaption style={{ ...captionStyle, maxWidth: "min(340px, 100%)" }}>
            {isEn
              ? "Exhibition poster. Click to open in full size."
              : "Utstillingsplakat. Klikk for å åpne i full størrelse."}
          </figcaption>
        </figure>
      </Section>

    </article>
  );
}

// ── Helpers ──

const bodyStyle: React.CSSProperties = {
  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
  lineHeight: 1.75,
  color: "var(--color-text-muted)",
  maxWidth: "66ch",
  margin: 0,
};

const captionStyle: React.CSSProperties = {
  marginTop: "0.6rem",
  fontSize: "0.8rem",
  color: "var(--color-text-muted)",
  opacity: 0.7,
  fontStyle: "italic",
  lineHeight: 1.5,
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
      <h2
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "var(--color-pink)",
          marginBottom: "1.25rem",
        }}
      >
        {label}
      </h2>
      {children}
    </section>
  );
}

function NarrativeBlock({
  text, image, imageAlt, caption,
}: {
  text: string;
  image: string;
  imageAlt: string;
  caption: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "clamp(16px, 3vw, 40px)",
        alignItems: "center",
      }}
      className="sbv-narrative"
    >
      <p style={bodyStyle}>{text}</p>
      <figure style={{ margin: 0 }}>
        <img
          src={image}
          alt={imageAlt}
          style={{ width: "100%", height: "auto", maxHeight: 480, objectFit: "cover", borderRadius: 8, display: "block" }}
        />
        <figcaption style={captionStyle}>{caption}</figcaption>
      </figure>
    </div>
  );
}
