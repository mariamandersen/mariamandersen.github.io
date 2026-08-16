# Portfolio context for Codex

## Goal

This repository is Maria Malmstedt Andersen's UX portfolio.

The portfolio is being updated for a new full-time job search, primarily for UX designer roles in:
- larger consulting firms
- companies with large technology departments

The portfolio should present Maria as a UX designer with strong technical understanding. It should show that she can work across user research, interaction design, prototyping, technical implementation and system-level thinking.

The full portfolio should be scannable/readable in about 5–10 minutes.

## Writing style

Keep all portfolio text:
- short
- concrete
- easy to scan
- written in simple Norwegian

Avoid typical AI-sounding patterns:
- em dashes / long dashes
- “ikke X, men Y” contrast constructions
- unnecessary lists of three adjectives or descriptors
- overuse of colon-led lists
- Oxford commas
- long sentences
- generic UX buzzwords

Prefer short paragraphs and clear headings.

Do not make the tone overly polished, corporate or “LinkedIn-like”.

## Hero

Current preferred hero copy:

Maria Malmstedt Andersen

UX-designer med bakgrunn i informatikk og psykologi.

Jeg liker å forstå mennesker og problemene de møter. Det bruker jeg til å lage gode digitale løsninger.

## Portfolio hierarchy

The portfolio should no longer feel like a list of university assignments.

Preferred case hierarchy:

1. NIBIO
2. Skybound
3. Deltakende design / Paragone

Other projects can remain available, but should be visually secondary.

Avoid emphasizing university course codes such as IN5510 and IN2000.

## General case-study principles

Do not structure every case as:
- Hva jeg gjorde
- Hvorfor
- Hva jeg lærte

Instead, use a short narrative that shows:
- what the problem was
- how Maria approached it
- what she learned from users
- what decisions followed
- what was built
- what changed after testing
- what Maria learned

Show UX thinking through decisions and evidence, not through lists of UX methods.

Use visuals to replace text wherever possible.

## Layout principles

The current portfolio often uses text on the left and images on the right. This creates too much empty space.

Use more varied layouts based on the content:
- text left / image right
- image left / text right
- full-width visual sections
- two-column comparisons
- three-step visual sequences
- large visual with short explanatory text

Do not alternate left/right mechanically. Let the content decide the layout.

The portfolio should feel compact and visually integrated.

## NIBIO case

### Role and context

Maria worked at NIBIO in summer 2026 as an IT consultant/intern together with one other intern.

Do not describe her role as “UX designer”. Her actual role was broader.

The project included:
- user research
- organizational and technical mapping
- design
- prototyping
- usability testing
- programming and technical exploration
- architecture/system thinking

The case should show Maria as both a UX designer and technologist.

### Core story

The project started as a very large and open assignment around research data management, DMPs and an internal data catalog.

A key realization was that the problem was:
- organizational
- cultural
- technical

Maria and the other intern had to narrow the scope and decide what would move NIBIO in the right direction without requiring a complete change in organizational structure or culture.

The chosen direction was to improve overview first.

The logic:
NIBIO needs to know what data exists and how it is handled before it can make better data-driven decisions.

The solution should create value quickly and fit into existing work practices.

### Insight work

This is an important part of the case.

Maria and the other intern came into NIBIO with little knowledge of the organization.

They:
- read internal reports
- reviewed earlier work
- mapped systems
- talked with IKT and Informasjonsforvaltning
- interviewed researchers from different parts of NIBIO
- investigated existing DMP tools and implementations

The point is not to summarize every finding.

The case should show that Maria can enter a new and complex domain, understand the organization and talk to the people doing the actual work.

Important findings that directly affected the design:
- researchers had very different levels of data-management competence
- researchers were often met with terminology they did not understand
- documentation competed with research time
- duplicate registration across systems was very frustrating
- researchers wanted better overview and easier reuse
- researchers did not want unnecessary complexity

### Main concept

A key idea was “register once”.

Much of the information NIBIO needs is already entered into data management plans.

The DMP and the internal data catalog were therefore connected.

Information is entered once in the DMP and can then be reused in the data catalog.

This reduces duplicate registration.

Suggested visual:
DMP → Datakatalog → Gjenfinning og gjenbruk

### FAIR Wizard: build vs buy

The team considered whether to build a DMP tool from scratch.

They decided against it because an internally built solution would need:
- maintenance
- operations
- future development as standards and requirements change

FAIR Wizard was selected because:
- it could be adapted to NIBIO
- it had an API that made integration with the data catalog possible
- it was relevant to a future national DMP solution
- this could make future integrations with other institutions and systems easier

Important principle:
Being able to build something does not mean building it from scratch is the best choice.

### FAIR Wizard as UX work

FAIR Wizard is a SaaS product, but the user experience still needed to be designed for NIBIO.

This is an important part of Maria’s UX contribution.

The knowledge model determines much of the experience:
- which questions users see
- question order
- language
- help text
- follow-up questions
- conditional logic
- when complexity is shown or hidden

Maria used UX expertise to adapt this to researchers.

The team had studied frustrations from other DMP implementations and found that some problems came from poorly designed knowledge models.

A recurring issue was that solutions appeared to be designed from the staff/administrative perspective rather than the researcher’s perspective.

The NIBIO version should instead make the task easy for the researcher.

### FAIR Wizard visual example

There are three screenshots showing dataset registration.

Use them as a three-step sequence.

Step 1:
The researcher is first asked whether the project has generated data.

Step 2:
If the researcher answers no, nothing more is required.
If the researcher answers yes, relevant guidance and dataset options appear.

Step 3:
Only when the researcher chooses to add a dataset do detailed questions appear.

This is a concrete example of reducing complexity through conditional logic.

Suggested captions:

1. Ett enkelt spørsmål
2. Bare relevant informasjon
3. Detaljer ved behov

### Visual design of FAIR Wizard

FAIR Wizard is visually plain and gray.

The team could have built a visually more custom solution, but usability testing showed that researchers did not care much about visual flair.

They preferred a simple and efficient interface.

Many were already used to documenting work in plain tools such as Word.

This led the team to prioritize:
- flow
- language
- guidance
- efficiency

Do not frame the UI as “ugly” or “boring” in the portfolio.

A short callout can explain that the simple visual style was acceptable because users valued efficiency more than decorative UI.

### Data catalog

The team also developed a prototype for an internal data catalog.

The catalog helps researchers:
- find previous projects
- find research data
- see who to contact
- discover possible reuse
- discover collaboration opportunities

It can also give staff better overview of what exists in the organization.

The prototype uses dummy data only.

### Two search modes

The data catalog has two different search modes.

1. Traditional search and filtering
For users who know fairly precisely what they are looking for.

2. Semantic search
For users who do not know what already exists or do not know the exact terminology.

This is important because NIBIO spans many disciplines and similar work may be described using different terms.

Suggested layout:
two equal columns

Left:
“Jeg vet hva jeg leter etter”
Text search + filters

Right:
“Jeg vet ikke hva jeg leter etter”
Semantic search

### Design for redesign

The team deliberately designed the concept so NIBIO could continue developing it later.

The system should not become tightly coupled to one tool or one organizational structure.

The data catalog should be able to evolve even if:
- the DMP tool changes
- the organization changes
- new integrations are added later

This was described as “design for redesign”.

This supports Maria’s profile as someone who can:
- build from scratch
- improve existing solutions
- adapt SaaS products
- design things that others can continue building

Do not state these as a sales list on the page. Let the case demonstrate them.

### NIBIO case structure

Preferred compact structure:

1. Intro
2. Før vi kunne lage noe, måtte vi forstå NIBIO
3. Ett konsept, minst mulig ekstraarbeid
4. Bygge selv eller bruke noe som finnes?
5. En ferdig løsning trenger fortsatt design
6. Fra registrering til gjenfinning
7. Two search modes
8. Laget for å kunne bygges videre på
9. Hva jeg tar med meg

The final NIBIO case should be readable/scannable in about 2–3 minutes.

## Important visual assets

Use the existing screenshots and prototype visuals from the project where appropriate.

Key visual sequences:
- FAIR Wizard dataset flow
- FAIR Wizard → data catalog
- catalog filtering vs semantic search
- simple architecture / concept flow if easy to understand

Prefer visuals with short captions over long explanatory paragraphs.

## Implementation guidance for Codex

Preserve the existing visual identity unless explicitly asked to redesign it.

Prefer reusable layout classes/components over one-off styling.

When editing:
- keep spacing compact
- avoid large empty vertical areas
- make image placement feel connected to the surrounding text
- keep responsive behavior in mind
- do not make all images the same size by default
- use full-width visuals when the image itself carries the explanation

Before making major structural changes, inspect the existing HTML/CSS/JS and reuse existing patterns where possible.
