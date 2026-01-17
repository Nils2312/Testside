import React from 'react';
import { MarqueeText } from '../components/MarqueeText';

// Fleksibel hjelpekomponent for bakgrunnsguidene som kan justeres per seksjon
const GridGuides = ({ 
  opacity = "opacity-5", 
  cols = 3,
  showInner = [true, true],
  showOuter = true
}: { 
  opacity?: string, 
  cols?: 2 | 3,
  showInner?: boolean[],
  showOuter?: boolean
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${opacity} z-0`}>
      <div className={`max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 grid grid-cols-${cols}`}>
        {/* Venstre ytre linje */}
        <div className={`${showOuter ? 'border-l border-white' : ''} h-full relative`}>
          {/* Indre linje for 2-kolonne system (midtstilt) */}
          {cols === 2 && showInner[0] && (
            <div className="absolute right-0 top-0 bottom-0 w-px bg-white hidden lg:block"></div>
          )}
        </div>
        
        {/* Indre linjer for 3-kolonne system */}
        {cols === 3 && (
          <>
            <div className={`h-full hidden lg:block ${showInner[0] ? 'border-l border-white' : ''}`}></div>
            <div className={`h-full hidden lg:block ${showInner[1] ? 'border-l border-white' : ''}`}></div>
          </>
        )}
        
        {/* Høyre ytre linje */}
        {showOuter && (
          <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-px bg-white"></div>
        )}
      </div>
    </div>
  );
};

export const HistoryNorwayView: React.FC = () => {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden font-sans">
      
      {/* --- HERO --- */}
      <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Historisk Arkiv / 記録</span>
          <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
            JU JITSU <br/><span className="text-outline">I NORGE</span>
          </h1>
        </div>
      </header>

      {/* --- 1929: HAAKON SCHØNNING (50/50 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:450ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1929 / Pioneren</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                HAAKON <br/><span className="text-outline">SCHØNNING</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Som nevnt er Ju jitsu den første orientalske kampformen som presenteres i vesten, også i Norge. Lenge før både karate og judo blir kjent, introduseres ju jitsu til landet av politimannen Haakon Schønning.
                </p>
                <p>
                  Han underviser ju jitsu ved «Statens Politiskole» allerede fra 1929. I 1931 gir Schønning ut boka: «Selvforsvar, jiu-Jitsu og Politigrep», som kommer ut i flere opplag.
                </p>
                <p>
                  Erfaring fra arten hentet han fra bl.a. «Shangai Municipal Police» under W.E Fairburn, og trening i Japan rundt 1930. Fairburn hadde bl.a. bodd og studert ju jitsu i Japan og England, mest Shinnoshindo ryu, og han startet senere sitt eget system som han kalte «defendu».
                </p>
              </div>
            </div>
            <div className="lg:border-l border-white/5 py-0 flex items-center justify-end">
              <div className="w-full aspect-[1/1.014] border-b border-white/10 overflow-hidden relative brightness-50 contrast-105">
                <img 
                  src="/images/historie1.png" 
                  alt="Historisk portrett" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1934: FRANKE POLITISKOLE (33/66 Split - Bildet er mindre) --- */}
      <section className="relative border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:600ms]">
        <GridGuides cols={3} showInner={[true, false]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1 lg:border-r border-white/5 py-0 flex items-center justify-start">
              <div className="w-full aspect-[1/1.414] border-b border-white/10 overflow-hidden relative brightness-[0.79]">
                <img 
                  src="/images/historie2.jpg" 
                  alt="Arkiv bilde" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2 py-20 md:py-32 lg:pl-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1934 / 昭和九年</span>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Schønning demonstrerte også ju jitsu for den franske politiskolen. Dette var i 1934, samtidig som han tjenestegjorde i La Garde Republicaine. Schønning var en svært anerkjent og respektabel politimann i mange år før krigen. 
                </p>
                <p>
                  Under krigen, og etter krigen ble han utsatt for beskyldninger om landssvik og tiltalt for disse forholdene. Han ble etter hvert frifunnet for disse anklagene. Etter denne tiden sier kilder at han aldri ble seg selv igjen, og Schønning døde våren 1950. 
                </p>
                <p>
                  Kunnskapen som Schønning ervervet seg, ble fortsatt formidlet og trent ved politiskolen i 50-60 og 70 årene.
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 pt-4">Kilde: yumpu.com/no/document/read/18402666/haakon-schnning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1946: JOHN SLAATEN (66/33 Split - Teksten er bredere) --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:750ms]">
        <GridGuides cols={3} showInner={[false, true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
            <div className="lg:col-span-2 py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1946 / 昭和二十一年</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                JOHN <br/><span className="text-outline">SLAATEN</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  I 1946 kommer en ny person inn som instruktør ved politiskolen, John Slaaten. Han skal ha vært kompani Linge soldat under den annen verdenskrig, og ble en ledende skikkelse innenfor både arrestasjonsteknikk og kroppsøving.
                </p>
                <p>
                  I 1970 utgir Slaaten «politigrep» som er en manual i arrestasjonsteknikk, selvforsvar og kroppsøvingsøvelser. Denne bygger helt og holdent på Schønnings ideer og bøker.
                </p>
                <p>
                  Manualen var i bruk i undervisningsøyemed helt frem til 1975. I 1982 kommer judo inn som pensum på politiskolen, og erstatter de fleste av de teknikkene og ideene som Schønning innførte. I Sverige ble Ju jitsu systematisert i moderne form på 60-tallet. Men også der hadde det vært tidligere trening av ju jitsu, gjennom bla. bøkene til Viking Cronholm. I tillegg hadde major Einar Thunander avholdt brevkurs innen fysisk trening og ju jitsu, og han underviste fra 1938-1961 ved politiskolen i Stockholm. Allerede før krigen hadde det etter sigende vært treningssamlinger i ju jitsu i Sverige.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 lg:border-l border-white/5 py-0 flex items-center justify-end">
              <div className="w-full aspect-[1/1.414] border-b border-white/10 overflow-hidden relative brightness-[0.79]">
                <img 
                  src="/images/historie3.jpg"
                  alt="Slaaten Dokumentasjon" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1940: SAM MELBERG (50/50 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:900ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
             <div className="order-2 lg:order-1 lg:border-r border-white/5 py-0 flex items-center justify-start">
              <div className="w-full aspect-[1/1.414] border-b border-white/10 overflow-hidden relative brightness-[0.99]">
                <img 
                  src="/images/historie4.jpg"
                  alt="Melberg Historie" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 py-20 md:py-32 lg:pl-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1940 / 昭和十五年</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                SAM <br/><span className="text-outline">MELBERG</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Før utbruddet av 2. verdenskrig i Norge startet Sam Melberg med ju jitsu. Han hadde lært ju jitsu/militær nærstrid i Tyskland før krigen, og hadde trent ju jitsu for en japaner på besøk i Norge. Det er også kjent at han bl.a. var involvert i motstandsbevegelsen Milorg, og trening av denne i perioden 1941-42 (muligens også utover dette).
                </p>
                <p>
                  I 1942 gir han ut en lærebok om sin jiu- jitsu sammen med sin yngre bror Håkon Melberg. De første organiserte tilfellene av instruksjon foregår så tidlig som 1940 i Halden, idet som het Arbeidersamfunnets bryteklubb. Disse lokalene var ledig grunnet norsk idrettsboikott i forhold til tyskerne. I 1943 flytter han till Oslo, og starter trening i 1949 i Meieribolagets gård på Carl Berner i Oslo. 
                </p>
                <p>
                  Høsten 1950 flytter Melberg til Bislet Bad og kaller driften Sam Melberg institutt. Treningen foregår mer som en «helseklubb», hvor det foregår styrketrening i tillegg til regelmessig kurs i ju jitsu. 
                </p>
                <p>
                  Under arbeidet med Milorg treffer Melberg Henrik Lundh, som er den store judopioneren i Norge. Lundh trener ju jitsu sammen med Melberg, som så starter med judo in 1947. Begge trener ved Bislet bad, og der ble judoaktiviteten i Norge uoffisielt startet i 1952 av en gjeng på om lag 8 personer som begynte å trene judo ved Sam Melbergs gym. Disse treningene ble startet og ledet av Henrik Lundh og Torkel Sauer. Judokompetanse og impulser hentet de spesielt fra Danmark, England og Frankrike. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1960: NJJK OG KARATE --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:1050ms]">
        <GridGuides cols={3} showInner={[true, true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 py-20 md:py-32 lg:pr-24 space-y-12">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1960 / 昭和三十五年</span>
              <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Denne gruppen kalte seg etter hvert Norsk Judo og Jiu-jitsu klubb (NJJK), og den ble stiftet 12.10.1960.
                  Senere på høsten i 1962 flytter SMI (Sam Melbergs institutt) til lokaler i Waldemar Thranesgate, og NJJK velger derfor å bryte med Melberg, og starter opp på Halling skole. Etter en stund flytter Melberg igjen, og i 1966 legger han ned instituttet og flytter til Spania. 
                </p>
                <p>
                  En parallell til instituttet på Bislet bad er at den alle første karatetreningen i landet også startet her, med bla. engelskmennene John Groves og Terrence Westall, ungareren Gabor Olgayai, samt nordmannen Alfred Liahagen. Weshall og Groves hadde bla. trent ju jitsu i England før de flyttet til Norge. I tillegg til styrketreningen hadde disse lyst til å trene noe annet enn judo og ju jitsu. De startet derfor med karate in 1963. Et års tid senere starter disse opp landets første karateklubb- Norsk karate klubb, som straks etter endrer navn til Norsk Budokan club. Denne navnendringen skal etter sigende være fordi de da også kunne trene andre ting enn karate.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 hidden lg:block lg:border-l border-white/5 h-full"></div>
          </div>
        </div>
      </section>

      {/* --- 1975: DUREWALL OG MJUK TEKNIKK (66/33 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:1200ms]">
        <GridGuides cols={3} showInner={[false, true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
            <div className="lg:col-span-2 py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1975 / 昭和五十年</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                DUREWALL & <br/><span className="text-outline">MJUK TEKNIKK</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Wolfgang Wedde ble også en kjent instruktør i Oslo området, og gjennom sitt institutt drev han også noe med ju jitsu tidlig på 1970- tallet. Etter den tid var det relativt stille med ju jitsu trening i Norge, og det var først i 1975 ju jitsu skulle få et godt fotfeste i Norge.
                </p>
                <p>
                  Nils-Erik Løvstad som på den tiden bodde ved Gofjell rett utenfor Kragerø begynte å trene hos Kurt Durewall i Gøteborg (Gøteborg judo ock jiujitsu-skola). Durewall er regnet som pioneren innen moderne svensk ju jitsu. Han er mannen bak begrepet «mjuk teknik», og var med på å starte det som i begynnelsen ble ju jitsu seksjonen innen Svenska Judoforbundet. 
                </p>
                <p>
                  Durewall var en foregangsmann innen den litt mer moderne tenkingen rundt ju jitsu. Han innførte et unikt tankesett via Svenska Jiu jitsuforbundet hvor grunnprinsippet var, og fortsatt er: «Med minst mulig kraft skal man nå mest mulig effekt, uten å forårsake smerte eller skade». Basert på dette bygde han sin tanke om ju jitsu systemet rundt noen grunnleggende prinsipper som dannet grunnlaget for etablering av en rekke klubber i Sverige.
                </p>
                <p>
                  Durewall døde i 2013. Disse prinsippene hadde en sentral tankegang for videre utvikling fra many instruktører i Skandinavia de neste årene.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 lg:border-l border-white/5 py-0 flex items-center justify-end">
              <div className="w-full aspect-[1/1.414] border-b border-white/10 overflow-hidden relative brightness-[0.99] ">
                <img 
                  src="/images/historie5.jpg"
                  alt="Kurt Durewall Stil" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1976: LØVSTAD OG HENRICHSEN (33/66 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:1350ms]">
        <GridGuides cols={3} showInner={[true, false]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
            <div className="lg:col-span-1 lg:border-r border-white/5 py-0 flex items-center justify-start">
              <div className="w-full aspect-[1/1.414] border-b border-white/10 overflow-hidden relative brightness-[0.7]">
                <img 
                  src="/images/historie6.jpg"
                  alt="Rune Schou Henrichsen Arkiv" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2 py-20 md:py-32 lg:pl-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1976 / 昭和五十一年</span>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Løvstad gikk i skole hos Durewall og allerede som Orange belte startet han opp klubber- først Kragerø i 1976, og senere in Drangedal og Stathelle (Telemark), samt Arendal. Klubben i Kragerø legges ned når han starter opp de andre klubbene. 
                </p>
                <p>
                  Rune Schou Henrichsen startet sin kampkunst karriere i Stathelle ved årsskifte 1976/1977 hvor han var bosatt. Hans familie hadde flyttet fra Åsgårdstrand (rett utenfor Tønsberg) til Stathelle pga. Hans fars bidrag til å bygge en fabrikk for Diplom-is i Brevik. Han ble sammen med Harald Persson instruktør i Stathelle, men også senere in Porsgrunn og Skien hvor det ble etablert klubber. 
                </p>
                <p>
                  Oslo Ju jitsuklubb starter opp rundt årsskiftet 1977/78 i Oslo Turnhall i St. Olavsgate. Omtrent på samme tid starter Løvstad sin Løvstad jiu-jitsuskole, som drives på heltid. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1978: NJF (50/50 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:1500ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1978 / 昭和五十三年</span>
              <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Norges Jiu jitsu forbund stiftes i Oslo turnhall 22.10.1978, i forbindelse med et besøk av Kurt Durewall. Forbundet bruker forkortelsen NJF, som medfører en del diskusjoner med Norges Judoforbund. Løvstad ansettes samtidig som riksinstruktør i forbundet, og styrer dette forbundet i praksis alene. I 1979 startes det opp flere klubber i Norge.
                </p>
                <p>
                  Rune S. Henrichsen ansettes av Løvstad på heltid og flytter til Trondheim hvor han starter Trondheim Ju jitsuklubb in 1980. På samme tid etablerer han klubber i Molde, Kr. Sund og Levanger. I tillegg til dette oppholdt han seg mye i Oslo hvor han utdannet instruktører, og deltok på hyppige treningssamlinger. 
                </p>
                <p>
                  Etter hvert kom det flere andre personer inn i styret i NJF, og demokratiske retningslinjer ble krevd fra many instruktører. NJF omorganiseres med nye vedtekter ved Gofjell in 1980. Våren 1981 flyttes hovedkontoret til Bergen, hvor Leon Hjelle fra Bergen fungerte som president. Sommeren 1981 går Løvstad av som riksinstruktør i NJF, og Runar Omland med bistand fra Rune S. Henrichsen overtar som leder for instruktørene. Runar Omland fungerer da som instruktør i Sandefjord Ju jitsuklubb. Endelig brudd oppstår mellom Løvstad og NJF høsten 1981. Dette skyldes ulike oppfatninger om hvordan NJF skulle videreføres. På denne tiden ble det også kontakt mellom World Ju jitsu Federation representert ved Richard Morris. 
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:border-l border-white/5 h-full"></div>
          </div>
        </div>
      </section>

      {/* --- 1982: SPLITTELSEN (66/33 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:1650ms]">
        <GridGuides cols={3} showInner={[false, true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
            <div className="lg:col-span-2 py-20 md:py-32 lg:pr-24 space-y-12">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1982 / 昭和五十七年</span>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  I 1982 trekker Arendal seg ut av Norges Jiu jitsu forbund, og våren 1983 følger Romerike jiu-jitsuklubb etter. De aller fleste resterende klubber trekker seg ut av NJF i november 1983. Hovedgrunnen til dette er manglende tillitt til styre og dets driftsform. 
                </p>
                <p>
                  I ettertid var det ingen tvil om at Løvstad var en stor organisator, markedsfører og pådriver. Han satte ju jitsu klart og tydelig på kartet og var dyktig med tanke på å markedsføre og utvikle ju jitsu som et produkt i Norge. Han produserte ulike lærerhefter som ble hyppig brukt i undervisningen.
                </p>
                <p>
                  Imidlertid kom han på den tiden dessverre på kant med både judo- og karatekretser grunnet hans kompromissløse stil. Dette medfører over en periode endeløse, og langt på vei useriøse diskusjoner om «budo vold» i many av landets aviser. Denne diskusjonen var en klar parallell til liknende diskusjoner i Sverige. Løvstad driver i dag noe som heter Løvstad skolen, hvor han og hans kone har utviklet metoder for konflikthåndtering og voldshåndtering rettet mot utsatte yrkesgrupper. 
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 lg:border-l border-white/5 py-0 flex items-center justify-end">
            </div>
          </div>
        </div>
      </section>

      {/* --- 1983: JJN OPPRETTES (50/50 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:1800ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1983 / 昭和五十八年</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                JU JITSU <br/><span className="text-outline">NORGE OPPRETTES</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  I forbindelse med det som praktisk sett medfører en nedleggelse av NJF, legger Runar Omland og Rune S. Henrichsen grunnlaget for et nytt undervisningssystem.
                  Ju jitsu Norge (JJN) opprettes så i et konstituerende møte den 17.12.1983. 
                </p>
                <p>
                  Rune S. Henrichsen, Runar Omland, og etter hvert Torbjørn Arntsen var forgrunnsfigurene for JJN de next årene. Videre ble Karl Fredrik Skjørshammer en viktig instruktør, og ikke minst kjent som en svært dyktig teknisk utøver, hvor han bla. i flere year var leder av vårt oppvisningsteam. Det ble etablert en mer demokratisk styringsform, og arbeidet med å få ju jitsu anerkjent som en idrett på lik linje med andre arter startet.
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:border-l border-white/5 h-full"></div>
          </div>
        </div>
      </section>

      {/* --- 1984: VEIEN TIL NIF (50/50 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:1950ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1984-1991 / 昭和五十九年–平成三年</span>
              <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Den 27 mai 1984 var Norges Karate forbund formelt godkjent som særforbund i NIF. Samtidig var det ønskelig med en fusjon med Taekwondo, og senere på året i 1984 endret forbundet navn til Norges karate- og taekwondo forbund (NKTF).
                </p>
                <p>
                  På våren 1991 startet NKTF sitt utredningsarbeid med henblikk på en mulig utvidelse til et Norges Budo forbund. Foranledningen var at JJN hadde søkt opptak i NIF ved forrige idretts ting 1990 i Haugesund. JJN ble av hensyn til et ønske fra NIF om å begrense antall særforbund bedt om å føre samtaler med eksisterende kampsportforbund, slik at JJN kunne innlemmes der hvor det var mest naturlig. JJN var på den tiden 20 klubber og ca. 2000 medlemmer. JJN foretrakk tilknytning til NKTF i stedet for judoforbundet. 
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:border-l border-white/5 h-full"></div>
          </div>
        </div>
      </section>

      {/* --- TIDSLINJE: FREMDRIFT (33/66 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:2100ms]">
        <GridGuides cols={3} showInner={[true, false]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-start">
            <div className="lg:col-span-1 py-20 md:py-32 lg:pr-12 space-y-4">
               <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">Prosess / 過程</span>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                UTREDNINGS- <br/><span className="text-outline">ARBEIDET</span>
               </h2>
               <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                 <p>
                   Den 23 mai 1992 besluttet idrettstinget enstemmig å innlemme ju jitsu som en tredje idrett i et Norges Budo forbund. 
                 </p>
               </div>
            </div>
            <div className="lg:col-span-2 lg:border-l border-white/5 py-20 md:py-32 lg:pl-24 h-full flex flex-col justify-center">
               <div className="space-y-4 text-gray-500 text-sm md:text-base font-light text-left">
                  <p><span className="text-jjn-orange">17/10-1990:</span> NIF ber NKTF ta stilling til JJNs søknad.</p>
                  <p><span className="text-jjn-orange">11/3-1991:</span> Første møtet mellom NIF, NKTF og JJN.</p>
                  <p><span className="text-jjn-orange">16/4-1991:</span> Møte mellom JJN og NKTF.</p>
                  <p><span className="text-jjn-orange">10/5-1991:</span> Forbundsstyret vedtar fortsettelse av samtaler.</p>
                  <p><span className="text-jjn-orange">14/6-1991:</span> Besøk hos Svenska Budoforbundet.</p>
                  <p><span className="text-jjn-orange">3/12-1991:</span> Vedtak om rammetilskudd.</p>
                  <p><span className="text-jjn-orange">12/12-1991:</span> NKTF vedtar forslag om opptak.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1993: BUDO GALLA (66/33 Split) --- */}
      <section className="relative border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:2250ms]">
        <GridGuides cols={3} showInner={[false, true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 py-20 md:py-32 lg:pr-12 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">1993 / 平成五年</span>
              <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Den 7 november 1993, arrangerte forbundet Norsk Budo galla i konserthuset i Oslo hvor Rune S. Henrichsen var prosjektansvarlig. Here ble blant annet Alain Sailly introdusert for Norske kampkunstinteresserte med stor suksess. Showet viste bredden i kampkunstene, og med en blanding av show og tradisjon ble dette en «snakkis» i many år etterpå. 
                </p>
                <p>
                  Norges Karate og Taekwondo Forbund ble altså opptatt som særforbund i NIF in 1984. I 1992 ble Ju jitsu tatt opp i forbundet og da ble navnet endret til Norges Budo Forbund. I 2000 ble forbundet «omdøpt» til Norges Kampsportforbund, og tok da inn alle typer kampkunster slik det foreligger i dag. 
                </p>
                <p>
                  I 1992 etablerte John Therien, Richard Morris og Alain Sailly organisasjonen World Kobudo Federation, og rundt 1986 etablerte Richard Morris en mindre organisasjon Jiu jitsu International.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 hidden lg:block lg:border-l border-white/5 h-full"></div>
          </div>
        </div>
      </section>

      {/* --- 2026: DAGENS SITUASJON (50/50 Split) --- */}
      <section className="relative py-0 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:2400ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="py-20 md:py-32 lg:pr-24 space-y-4">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] block">2026 / 令和八年</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                MODERNE <br/><span className="text-outline">METODIKK</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Richard Morris fra England ble i many år en nær samarbeidspartner for JJN. Han videreutviklet World Ju jitsu Federation sammen med Robert Clark. Etter many års samarbeid skilte de lag, og gikk hver sin retning innen Ju jitsu. Richard Morris døde i 2019. 
                </p>
                <p>
                  Dagens situasjon per januar 2026 er at de aller fleste ju jitsu klubber er medlem av Norges Kampsportforbund. Ju jitsu Norge regnes som en stilartsorganisasjon som lever sitt eget liv, men samarbeider med forbundet. 
                </p>
                <p>
                  Undervisningssystemet er fortsatt under utvikling, og klubbene samarbeider nært. Vi kaller vår stil for JJN Ju jitsu, hvor we benytter eget varemerke. Årets store høydepunkt er den årlige sommerleiren, som også er arena for testing av kandidater til ulike dan grader. 
                </p>
                <p>
                  Ju jitsu har hatt en noe begrenset utvikling de senere år. Det må være et håp om at alle klubber som trener ju jitsu kan forenes, og stå sammen for å fortsette utviklingen av en fantastisk selvforsvarsorientert kampkunst. 
                </p>
              </div>
            </div>
            <div className="lg:border-l border-white/5 py-0 flex items-center justify-end">
              <div className="w-full aspect-[0/0]overflow-hidden relative brightness-100">
                <img 
                  src="/images/historie7.png"
                  alt="Ju Jitsu Moderne Tid" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeText />
    </div>
  );
};