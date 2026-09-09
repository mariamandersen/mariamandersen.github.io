export interface Project {
  slug: string;
  idNo: string;
  idEn: string;
  titleNo: string;
  titleEn: string;
  shortTitleNo: string;
  shortTitleEn: string;
  questionNo: string;
  questionEn: string;
  kickerNo: string;
  kickerEn: string;
  coverImage: string;
  tags: string[];
  tagsEn: string[];
  year: string;
}

export const projects: Project[] = [
  {
    slug: 'nibio',
    idNo: 'NIBIO-Internship',
    idEn: 'NIBIO-Internship',
    titleNo: 'NIBIO',
    titleEn: 'NIBIO',
    shortTitleNo: 'Intern datakatalog',
    shortTitleEn: 'Internal Data Catalogue',
    questionNo: 'Hvordan kan en stor forskningsorganisasjon få bedre oversikt over egne data, uten å gi forskerne enda mer dokumentasjonsarbeid?',
    questionEn: 'How can a large research organisation improve its overview of internal data without adding more documentation work for researchers?',
    kickerNo: 'IT-konsulent · IKT og informasjonsforvaltning · Sommeren 2026',
    kickerEn: 'IT Consultant · ICT and Information Management · Summer 2026',
    coverImage: '/images/NIBIO/nibio-cover-mockup.png',
    tags: ['Brukerinnsikt', 'Forretningsutvikling', 'Prototyping', 'Utvikling'],
    tagsEn: ['User Research', 'Business Development', 'Prototyping', 'Development'],
    year: '2026',
  },
  {
    slug: 'skybound',
    idNo: 'proj-rocket-no',
    idEn: 'proj-rocket-en',
    titleNo: 'Skybound',
    titleEn: 'Skybound',
    shortTitleNo: 'Planleggingsapp for rakettoppskytning',
    shortTitleEn: 'Rocket Launch Planning App',
    questionNo: 'Hvordan kan vi gjøre planlegging av rakettoppskytninger enklere for brukeren?',
    questionEn: 'How can we make rocket launch planning simpler for the user?',
    kickerNo: 'UX-ansvarlig · Android-app · IN2000 · 2025',
    kickerEn: 'UX Lead · Android App · IN2000 · 2025',
    coverImage: '/images/skybound/skybound-cover-mockup.png',
    tags: ['Brukerinnsikt', 'Prototyping', 'Figma', 'Material 3', 'Brukertesting'],
    tagsEn: ['User Research', 'Prototyping', 'Figma', 'Material 3', 'User Testing'],
    year: '2025',
  },
  {
    slug: 'sustained-by-voices',
    idNo: '',
    idEn: '',
    titleNo: 'Sustained by Voices',
    titleEn: 'Sustained by Voices',
    shortTitleNo: 'Interaktiv installasjon',
    shortTitleEn: 'Interactive Installation',
    questionNo: 'Hvordan kan en stemme holde noe i live?',
    questionEn: 'How can a voice keep something alive?',
    kickerNo: 'Tangible Interaction · Masterprosjekt · 2025',
    kickerEn: 'Tangible Interaction · Master Project · 2025',
    coverImage: '/images/sustained-by-voices/sustained-cover-mockup.png',
    tags: ['Konseptutvikling', 'Tangible Interaction', 'Fysisk prototyping'],
    tagsEn: ['Concept Development', 'Tangible Interaction', 'Physical Prototyping'],
    year: '2025',
  },
  {
    slug: 'deltakende-design',
    idNo: 'proj-in5510-no',
    idEn: 'proj-in5510-en',
    titleNo: 'Deltakende Design',
    titleEn: 'Participatory Design',
    shortTitleNo: 'Frivillig organisasjon og roller',
    shortTitleEn: 'Volunteer Organisation & Roles',
    questionNo: 'Hvordan kan deltakende design skape felles forståelse av roller og ansvar i en frivillig organisasjon?',
    questionEn: 'How can participatory design build a shared understanding of roles and responsibilities in a volunteer organisation?',
    kickerNo: 'Fasilitator · Paragone · UiO · 2025',
    kickerEn: 'Facilitator · Paragone · UiO · 2025',
    coverImage: '/images/in5510/participatory-design-cover-mockup.png',
    tags: ['Fasilitering', 'Workshops', 'LEGO', 'Collaging', 'Prototyping'],
    tagsEn: ['Facilitation', 'Workshops', 'LEGO', 'Collaging', 'Prototyping'],
    year: '2025',
  },
  {
    slug: 'school-visit-planner',
    idNo: 'proj-in5320-no',
    idEn: 'proj-in5320-en',
    titleNo: 'School Visit Planner',
    titleEn: 'School Visit Planner',
    shortTitleNo: 'Webapp for skoleinspektører',
    shortTitleEn: 'Web App for School Inspectors',
    questionNo: 'Hvordan kan skoleinspektører bruke eksisterende data til bedre planlegging og oppfølging?',
    questionEn: 'How can school inspectors use existing data for better planning and follow-up?',
    kickerNo: 'UX og utvikling · DHIS2 · React',
    kickerEn: 'UX and Development · DHIS2 · React',
    coverImage: '/images/in5320/school-visit-cover-mockup.png',
    tags: ['UX-design', 'React', 'DHIS2', 'Brukertesting'],
    tagsEn: ['UX Design', 'React', 'DHIS2', 'User Testing'],
    year: '2024',
  },
  {
    slug: 'ai-autonome-systemer',
    idNo: 'proj-in5620-no',
    idEn: 'proj-in5620-en',
    titleNo: 'KI og autonome systemer',
    titleEn: 'AI and Autonomous Systems',
    shortTitleNo: 'Læringsassistent for videregående',
    shortTitleEn: 'AI Learning Assistant for High School',
    questionNo: 'Hvordan kan KI støtte elevenes læring uten å overta arbeidet deres?',
    questionEn: 'How can AI support student learning without replacing their work?',
    kickerNo: 'Konsept og prototyping · ChatVGS · 2025',
    kickerEn: 'Concept and Prototyping · ChatVGS · 2025',
    coverImage: '/images/in5620/chatvgs-cover-mockup.png',
    tags: ['Intervju', 'Tematisk analyse', 'Chatbot', 'Prototyping'],
    tagsEn: ['Interviews', 'Thematic Analysis', 'Chatbot', 'Prototyping'],
    year: '2025',
  },
  {
    slug: 'meditasjonsball',
    idNo: 'proj-medball-no',
    idEn: 'proj-medball-en',
    titleNo: 'Meditasjonsball',
    titleEn: 'Meditation Ball',
    shortTitleNo: 'Skjermfri pusteveileder',
    shortTitleEn: 'Screen-free Breathing Guide',
    questionNo: 'Hvordan kan en fysisk gjenstand hjelpe nybegynnere med å finne en rolig pusterytme uten skjerm?',
    questionEn: 'How can a physical object help beginners find a calm breathing rhythm without a screen?',
    kickerNo: 'Interaksjonsdesign · Arduino · Neopixel · 2022',
    kickerEn: 'Interaction Design · Arduino · Neopixel · 2022',
    coverImage: '/images/medball/meditation-ball-cover-mockup.png',
    tags: ['Brukerinnsikt', 'Arduino', 'Fysisk prototyping', 'Brukertesting'],
    tagsEn: ['User Research', 'Arduino', 'Physical Prototyping', 'User Testing'],
    year: '2022',
  },
  {
    slug: 'ekko-kamre',
    idNo: 'proj-echo-no',
    idEn: 'proj-echo-en',
    titleNo: 'Ekko-kamre og demokrati',
    titleEn: 'Echo Chambers & Democracy',
    shortTitleNo: 'Romlig installasjon om algoritmisk polarisering',
    shortTitleEn: 'Spatial Installation on Algorithmic Polarisation',
    questionNo: 'Hvordan kan en fysisk installasjon gjøre algoritmisk polarisering synlig og merkbar?',
    questionEn: 'How can a physical installation make algorithmic polarisation visible and tangible?',
    kickerNo: 'Konsept og etikk · Design for demokrati',
    kickerEn: 'Concept and Ethics · Design for Democracy',
    coverImage: '/images/echo/echo-chambers-cover-mockup.png',
    tags: ['Gigamapping', 'Romlig prototyping', 'Etikk', 'Evaluering'],
    tagsEn: ['Gigamapping', 'Spatial Prototyping', 'Ethics', 'Evaluation'],
    year: '2024',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
