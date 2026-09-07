import imgImageNibio from "./27bdd261dc1d015fda4bbef01389ae431dcea902.png";
import imgImage from "./c1f557729710ad33c3d7a2a563c8d1d3d56c1dc2.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M10 3L5 8L10 13" id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTilbakeTilKatalog() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button - Tilbake til katalog">
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#00574d] text-[14px] text-center whitespace-nowrap">Tilbake</p>
    </div>
  );
}

function Container1() {
  return <div className="bg-[rgba(0,0,0,0.15)] h-[20px] relative shrink-0 w-px" data-name="Container" />;
}

function ImageNibio() {
  return (
    <div className="h-[36px] opacity-80 relative shrink-0 w-[38.32px]" data-name="Image (NIBIO)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNibio} />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white border-[rgba(0,0,0,0.08)] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <ButtonTilbakeTilKatalog />
      <Container1 />
      <ImageNibio />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,87,77,0.3)] h-[220px] left-0 to-[rgba(0,87,77,0.75)] top-0 w-[1101px]" data-name="Container" />;
}

function PhaseBadge() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[32px] items-center pb-[8px] relative shrink-0 w-[1021px]" data-name="Container">
      <PhaseBadge />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[38.5px] not-italic relative shrink-0 text-[28px] text-white w-[720px]">Vindblåst sand og påvirkning på natur og infrastruktur</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[1021px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">Divisjon for miljø og naturressurser</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[220px] items-start justify-end left-0 pb-[32px] px-[40px] top-0 w-[1101px]" data-name="Container">
      <Container5 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[220px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image />
      <Container3 />
      <Container4 />
    </div>
  );
}

function SectionProsjektbeskrivelse() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section - Prosjektbeskrivelse">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.75)] w-[780px]">Prosjektet studerer eoliske prosesser – vindtransport av sand – i norske kystmiljøer og høyfjellsområder. Det kartlegges hvilke arealer som er mest utsatt, og hvilke konsekvenser sandflukt har for naturtyper, veinettet og nærliggende bebyggelse. Feltmålinger kombineres med vindmodellering og fjernmåling.</p>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="SectionHeading">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Administrativt</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Prosjektnummer</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">NIBIO-2025-0039</p>
    </div>
  );
}

function DetailField() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="DetailField">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Finansiør</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Norges forskningsråd</p>
    </div>
  );
}

function DetailField1() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="DetailField">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Prosjektleder</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function DetailField2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="DetailField">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Kontaktperson</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function DetailField3() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="DetailField">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Startdato</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">2025-08-01</p>
    </div>
  );
}

function DetailField4() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="DetailField">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Sluttdato</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">2028-07-31</p>
    </div>
  );
}

function DetailField5() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="DetailField">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[40px] gap-y-[24px] grid grid-cols-[__370px_370px] grid-rows-[___38.50px_38.50px_38.50px] relative shrink-0 w-full" data-name="Container">
      <DetailField />
      <DetailField1 />
      <DetailField2 />
      <DetailField3 />
      <DetailField4 />
      <DetailField5 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container:margin">
      <Container7 />
    </div>
  );
}

function SectionAdministrativInformasjon() {
  return (
    <div className="border-[rgba(0,0,0,0.08)] border-solid border-t content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Section - Administrativ informasjon">
      <SectionHeading />
      <ContainerMargin1 />
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="SectionHeading">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Forskningsdata</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Dataprosessering</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Rådata/Prosessert</p>
    </div>
  );
}

function DetailField6() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="DetailField">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Gjenbruk av data</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Ja</p>
    </div>
  );
}

function DetailField7() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="DetailField">
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Lisens</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">CC BY 4.0</p>
    </div>
  );
}

function DetailField8() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="DetailField">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Formater</p>
    </div>
  );
}

function Text() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">NetCDF</p>
    </div>
  );
}

function FormatBadges() {
  return (
    <div className="content-stretch flex gap-[4px] h-[22px] items-start pt-[2px] relative shrink-0 w-[370px]" data-name="FormatBadges">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Paragraph19 />
      <FormatBadges />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[40px] gap-y-[24px] grid grid-cols-[__370px_370px] grid-rows-[__38.50px_38.50px] relative shrink-0 w-full" data-name="Container">
      <DetailField6 />
      <DetailField7 />
      <DetailField8 />
      <Container9 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container:margin">
      <Container8 />
    </div>
  );
}

function SectionForskningsdata() {
  return (
    <div className="border-[rgba(0,0,0,0.08)] border-solid border-t content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Section - Forskningsdata">
      <SectionHeading1 />
      <ContainerMargin2 />
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="SectionHeading">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.55)] tracking-[0.55px] uppercase whitespace-nowrap">Gjenbruk av eksisterende data</p>
    </div>
  );
}

function Text3() {
  return <div className="bg-[#00574d] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] whitespace-nowrap">Meteorologisk institutts vinddata</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return <div className="bg-[#00574d] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] whitespace-nowrap">Statens vegvesens skaderapporter</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text5 />
      <Text6 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start pt-[16px] relative shrink-0 w-[780px]" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function SectionGjenbrukAvEksisterendeData() {
  return (
    <div className="border-[rgba(0,0,0,0.08)] border-solid border-t content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Section - Gjenbruk av eksisterende data">
      <SectionHeading2 />
      <List />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[860px] p-[40px] relative shrink-0 w-[860px]" data-name="Container">
      <SectionProsjektbeskrivelse />
      <SectionAdministrativInformasjon />
      <SectionForskningsdata />
      <SectionGjenbrukAvEksisterendeData />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container6 />
    </div>
  );
}

function DmpDetailPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start min-h-[737px] relative shrink-0 w-full" data-name="DmpDetailPage">
      <Container />
      <Container2 />
      <ContainerMargin />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col h-[737px] items-start relative shrink-0 w-[1101px]" data-name="Body">
      <DmpDetailPage />
    </div>
  );
}

export default function CatalogProject() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="catalog-project">
      <Body />
    </div>
  );
}