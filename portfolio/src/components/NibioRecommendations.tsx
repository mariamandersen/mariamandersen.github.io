const recommendations = [
  {
    name: "Hanne Tvete",
    role: "Avdelingsleder Informasjonsforvaltning, NIBIO",
    date: "2026-08-25",
    displayDate: "25. august 2026",
    excerpt: "Maria viste stor evne til å sette seg inn i nye fagområder, arbeide strukturert og omsette teori til praktiske anbefalinger.",
    paragraphs: [
      "Jeg har hatt gleden av å være veileder for Maria som summer intern i NIBIO. I løpet av internshipet arbeidet hun sammen med en medstudent, med komplekse problemstillinger innen forskningsdataforvaltning, FAIR-prinsipper og machine-actionable Data Management Plans (maDMP). Hun bidro blant annet til evaluering av verktøyet FAIRWizard, kartlegging av muligheter for gjenbruk av metadata og utvikling av kunnskapsgrunnlag for en institusjonell datakatalog.",
      "Maria viste stor evne til å sette seg inn i nye fagområder, arbeide strukturert og omsette teori til praktiske anbefalinger. Arbeidet var preget av høy kvalitet, selvstendighet og gode analytiske ferdigheter. Hun samarbeidet godt med medstudent, kolleger og kommuniserte funn og resultater på en klar og profesjonell måte.",
      "Jeg kan varmt anbefale Maria til roller som krever analytisk kompetanse, evne til å lære raskt og interesse for forskning, data og digital utvikling."
    ],
  },
  {
    name: "Kenneth Osenbroch",
    role: "Avdelingsleder, IKT, NIBIO",
    date: "2026-08-24",
    displayDate: "24. august 2026",
    excerpt: "Sammen med sin medstudent viste Maria en oppgaveforståelse og analytisk tilnærming som oversteg våre forventninger.",
    paragraphs: [
      "Jeg har vært en av de faglige veilederne for Maria Malmstedt Andersen under sommerinternshipet i NIBIO sommeren 2026. Som en del av internshipet arbeidet Maria, sammen med en medstudent, med problemstillinger knyttet til forskningsdata, FAIR-prinsipper, dataforvaltning og datakatalog.",
      "Gjennom internshipet viste Maria god evne til å tilegne seg ny kunnskap, analysere problemstillinger og omsette innsikt til konkrete resultater og anbefalinger. Hun arbeidet selvstendig, strukturert og målrettet, samtidig som hun samarbeidet tett med sin medstudent og øvrige faglige ressurser.",
      "Sammen med sin medstudent viste Maria en oppgaveforståelse og analytisk tilnærming som oversteg våre forventninger. De identifiserte tidlig muligheter og perspektiver som ikke inngikk i de opprinnelige forutsetningene for prosjektet, og valgte en løsningstilnærming som ga prosjektet betydelig merverdi. Resultatet ble leveranser som gir et godt grunnlag for NIBIOs videre arbeid innen dataforvaltning og datakatalog.",
      "Maria har vist høy arbeidskapasitet, god gjennomføringsevne og sterke samarbeidsevner gjennom hele internshipet. Jeg gir henne mine beste anbefalinger og er trygg på at hun vil være en verdifull ressurs i framtidige roller innen teknologi, dataforvaltning eller digitalisering."
    ],
  },
];

export default function NibioRecommendations({ lang }: { lang: "no" | "en" }) {
  const isEn = lang === "en";
  return (
    <section className="case-study-layout study-chapter recommendations" aria-labelledby="recommendations-title">
      <h2 id="recommendations-title">{isEn ? "Recommendations" : "Anbefalinger"}</h2>
      <p className="recommendations-intro">{isEn ? "From my supervisors at NIBIO, published on LinkedIn. Original recommendations in Norwegian." : "Fra veilederne mine i NIBIO, publisert på LinkedIn."}</p>
      <div className="recommendations-grid">
        {recommendations.map(item => (
          <article key={item.name} className="recommendation" lang="no">
            <blockquote><p>«{item.excerpt}»</p></blockquote>
            <div className="recommendation-author">
              <h3>{item.name}</h3>
              <p>{item.role}</p>
              <p className="recommendation-date">LinkedIn · <time dateTime={item.date}>{item.displayDate}</time></p>
            </div>
            <details>
              <summary lang={lang}>{isEn ? "Read full recommendation" : "Les hele anbefalingen"}</summary>
              <blockquote className="recommendation-full">{item.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</blockquote>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
