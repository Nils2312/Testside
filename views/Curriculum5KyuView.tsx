import React from 'react';
import { Download, Play } from 'lucide-react';
import { MarqueeText } from '../components/MarqueeText';

const VIDEO_PLACEHOLDER = "https://www.youtube.com/embed/0glU6Qu06kU";

// Hjelpekomponent for bakgrunnsguidene med mulighet for å velge antall midtlinjer
const GridGuides = ({ singleMiddle = false }: { singleMiddle?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
    <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
      <div className="w-px h-full bg-white"></div>
      {singleMiddle ? (
        <div className="hidden lg:block w-px h-full bg-white mx-auto absolute left-1/2 -translate-x-1/2"></div>
      ) : (
        <>
          <div className="hidden lg:block w-px h-full bg-white"></div>
          <div className="hidden lg:block w-px h-full bg-white"></div>
        </>
      )}
      <div className="w-px h-full bg-white"></div>
    </div>
  </div>
);

interface VideoGridProps {
  count: number;
  startId?: number;
  noTopBorder?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ count, startId = 1, noTopBorder = false }) => {
  const items = Array.from({ length: count });
  const remainder = count % 3;
  const placeholderCount = remainder === 0 ? 0 : 3 - remainder;
  const placeholders = Array.from({ length: placeholderCount });

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-white/10 relative z-10 ${noTopBorder ? '' : 'border-t'}`}>
      {items.map((_, i) => (
        <div key={i} className="group relative bg-transparent border-r border-b border-white/10 flex flex-col h-full transition-all duration-500">
          <div className="p-8 md:p-10 flex flex-col flex-grow">
            <div className="relative aspect-video bg-black border border-white/5 overflow-hidden mb-6">
              <iframe 
                className="absolute inset-0 w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src={VIDEO_PLACEHOLDER}
                title={`Teknikk video ${startId + i}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              ></iframe>
              <div className="absolute top-0 right-0 bg-jjn-orange text-white font-black text-[8px] uppercase py-2 px-4 z-20">
                VIDEO 0{startId + i}
              </div>
            </div>
            <div className="space-y-1">
               <h4 className="text-sm font-black text-white uppercase tracking-widest group-hover:text-jjn-orange transition-colors duration-300">
                 Demonstrasjon 0{startId + i}
               </h4>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Teknisk utførelse</p>
            </div>
          </div>
        </div>
      ))}
      {placeholders.map((_, i) => (
        <div key={`empty-${i}`} className="hidden lg:flex relative bg-transparent border-r border-b border-white/10 flex-col h-full min-h-[300px]">
          <div className="p-10 flex flex-col items-center justify-center h-full opacity-[0.02]">
             <Play size={40} strokeWidth={1} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Curriculum5KyuView: React.FC = () => {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden">
      
      <div className="relative">
        {/* --- BAKGRUNNSLINJER FOR ULTRA-WIDE --- */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
          <div className="absolute left-8 md:left-12 inset-y-0 w-px bg-white"></div>
          <div className="absolute right-8 md:right-12 inset-y-0 w-px bg-white"></div>
        </div>

        {/* --- HERO --- */}
        <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
          {/* GridGuides fjernet herfra for å ha ren bakgrunn i overskriften */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Gult Belte / 黄帯</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              PENSUM TIL <br/><span className="text-outline">5. KYU</span>
            </h1>
          </div>
        </header>

        {/* --- INTRO & PDF --- */}
        <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#0c0c0c]">
          <GridGuides singleMiddle />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10">
              <div className="space-y-10 py-16 lg:py-0 lg:pr-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">00 / Reisen starter</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    GRADERINGS- <br/><span className="text-outline">KRAV</span>
                  </h2>
                </div>
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                    Når du har trent regelmessig (2 ganger per uke) i ca. 3-4 måneder gis det mulighet til at du kan gå opp til en test til 5 KYU gult belte.
                  </p>
                  <p>
                    I tillegg til konkrete fysiske krav er det viktig at du kan knyte ditt belte (Obi) med riktig knute. Samtidig er vi opptatt av at du viser god 
                    budoetikette i form av korrekte hilsninger mot både instruktører og dine kolleger på matta. Drakten du har på deg er ren, og du har påsydde JJN merker evt. også klubbens merker.
                  </p>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => alert("Laster ned PDF...")}
                    className="group flex items-center gap-10 py-6 px-10 border-[1px] border-white/10 bg-transparent hover:border-jjn-orange transition-all duration-300 outline-none"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-gray-500 font-black uppercase text-[10px] tracking-[0.3em] mb-1 group-hover:text-jjn-orange/60 transition-colors">5_Kyu_System.pdf</span>
                      <span className="text-white font-black uppercase text-xl tracking-tighter group-hover:text-jjn-orange transition-colors">Last ned pensum</span>
                    </div>
                    <Download className="text-white/20 group-hover:text-jjn-orange transition-colors duration-300" size={28} />
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div className="aspect-[3/4] lg:aspect-[4/5] border border-white/10 relative overflow-hidden group shadow-2xl w-full max-w-md mx-auto bg-[#1a1a1a]">
                   <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200" alt="Gult Belte" className="w-full h-full object-cover grayscale brightness-[0.2] group-hover:scale-105 transition-all duration-[2000ms]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 501: GRUNNLEGGENDE --- */}
        <section className="relative py-24 md:py-40 bg-[#050505] border-b border-white/5">
          <GridGuides />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10 bg-[#050505] relative z-10">
              <div className="p-10 border-r border-b border-white/10 lg:col-span-1 flex flex-col justify-center">
                <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">501 / 基礎</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  GRUNNLEGGENDE <br/><span className="text-outline">ELEMENTER</span>
                </h2>
              </div>
              <div className="p-10 border-r border-b border-white/10 lg:col-span-2 text-gray-400 font-light text-lg leading-relaxed">
                <p>
                  <strong>Stående (rei), Klarposisjon (yoi) og Guard posisjon (kamai).</strong><br/>
                  Når du hilser mot angriper, står du samlet med bena. Du bukker med blikket rettet mot angriper. Fra denne posisjonen setter du kroppen din i beredskap via det vi kaller en yoi posisjon. Hendene er knyttet foran deg, og du har skulder breddes avstand mellom dine føtter. Du har en viss spenning i kroppen. Guard posisjonen indikerer at du er klar til å forsvare deg, og denne guarden har åpne hender. 
                  Du står i god stilling med god balanse og hendene dine er såpass høye at du dekker hodet.
                </p>
              </div>
            </div>
            <VideoGrid count={1} startId={1} noTopBorder />
          </div>
        </section>

        {/* --- 502: FORSVAR MOT DYTT --- */}
        <section className="relative py-24 md:py-40 bg-[#0c0c0c] border-b border-white/5">
          <GridGuides />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10 bg-[#0c0c0c] relative z-10">
              <div className="p-10 border-r border-b border-white/10 lg:col-span-1 flex flex-col justify-center">
                <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">502 / 受身</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  ANGRIPER <br/><span className="text-outline">DYTTER DEG</span>
                </h2>
              </div>
              <div className="p-10 border-r border-b border-white/10 lg:col-span-2 text-gray-400 font-light text-lg leading-relaxed">
                <p>
                  <strong>Volt forover, volt bakover, ryggfall og sidefall.</strong><br/>
                  Det forventes at du mestrer volter under god kroppskontroll. Dette er nødvendig for en behagelig og trygg Ju jitsu trening.
                </p>
              </div>
            </div>
            <VideoGrid count={4} startId={2} noTopBorder />
          </div>
        </section>

        {/* --- 503: FRA SITTEPOSISJON --- */}
        <section className="relative py-24 md:py-40 bg-[#050505] border-b border-white/5">
          <GridGuides />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10 bg-[#050505] relative z-10">
              <div className="p-10 border-r border-b border-white/10 lg:col-span-1 flex flex-col justify-center">
                <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">503 / 寝技</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  FRA <br/><span className="text-outline">SITTEPOSISJON</span>
                </h2>
              </div>
              <div className="p-10 border-r border-b border-white/10 lg:col-span-2 text-gray-400 font-light text-lg leading-relaxed">
                <p>
                  Beveg deg rundt en stående angriper. Beskytt deg og bruk slag/spark for å regulere avstand. Målet er kontroll og <strong>teknisk oppgang (tachi agari)</strong> til stående guard.
                </p>
              </div>
            </div>
            <VideoGrid count={1} startId={6} noTopBorder />
          </div>
        </section>

        {/* --- 504: RETT SLAG KOMBO --- */}
        <section className="relative py-24 md:py-40 bg-[#0c0c0c] border-b border-white/5">
          <GridGuides />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10 bg-[#0c0c0c] relative z-10">
              <div className="p-10 border-r border-b border-white/10 lg:col-span-1 flex flex-col justify-center">
                <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">504 / 組合せ</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  RETT SLAG <br/><span className="text-outline">KOMBINASJON</span>
                </h2>
              </div>
              <div className="p-10 border-r border-b border-white/10 lg:col-span-2 text-gray-400 font-light text-lg leading-relaxed">
                <p>
                  Forflytning bakover med avledninger. Svar med slag, fellinger (hiki/o soto otoshi) og kontrollgrep (ude hishigi hiza gatame) i stående posisjon.
                </p>
              </div>
            </div>
            <VideoGrid count={4} startId={7} noTopBorder />
          </div>
        </section>

        {/* --- PRAKTISK VISNING --- */}
        <section className="relative py-24 md:py-40 bg-[#050505] border-b border-white/5">
          <GridGuides />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            
            {/* OVERSKRIFT & INTRO - Bakgrunnslinjene er synlige her */}
            <div className="mb-24 px-10 lg:px-0 relative z-10">
               <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Testen / 審査</span>
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                PRAKTISK VISNING OG <br/><span className="text-outline">GJENNOMFØRING AV EN TEST</span>
               </h2>
               <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                 Testen starter med lett oppvarming. Deretter skal du vise de ulike teknikkene i en dynamisk serie som følger:
               </p>
            </div>

            {/* DEL 1 SEKSJON - Maskerer linjene bak tekstboksen */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-0 bg-[#050505] relative z-10 mb-0">
              <div className="p-10 border border-white/10 bg-[#050505] relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">DEL 1</h3>
                <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                  <p>
                    Du starter vendt vekk fra angriper i guard. Angriper dytter deg bakfra, og du gjør en volt forover. Du må da komme deg opp i guard. Deretter gjør du en volt mot angriper igjen uten dytt.
                  </p>
                  <p>
                    Deretter dytter angriper deg forfra hvor du viser volt bakover, og du snur deg rundt og gjør samme volt mot angriper igjen.
                  </p>
                  <p>
                    Angriper vil da dytte deg forfra igjen, og du viser da ryggfall med teknisk oppgang.
                  </p>
                  <p>
                    Angriper vil deretter komme på deg igjen, og angripe deg med høyre og venstre slag. Du gjør forsvaret, kaster og viser kontrollgrep.
                  </p>
                </div>
              </div>
            </div>
            {/* VideoGrid uten 'mt-4' slik at linjene strekker seg helt opp */}
            <VideoGrid count={1} startId={11} noTopBorder />

            {/* DEL 2 SEKSJON - Maskerer linjene bak tekstboksen */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-0 bg-[#050505] relative z-10 mt-20 mb-0">
              <div className="p-10 border border-white/10 bg-[#050505] relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">DEL 2</h3>
                <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                  <p>
                    Du sitter i guard. Angriper holder pads (stor pute) og beveger seg rundt deg. I det angriper er nære deg viser du ulike slag og spark teknikker. Når du føler at du har riktig avstand kommer du deg opp i guard, via tachi agari.
                  </p>
                </div>
              </div>
            </div>
            <VideoGrid count={1} startId={12} noTopBorder />

            {/* AVSLUTTENDE MERKNAD - Ren tekst uten oransje strek eller skillelinje */}
            <div className="mt-16 bg-transparent relative z-10">
               <p className="text-white font-bold uppercase tracking-[0.1em] text-sm md:text-base leading-relaxed">
                Del 1 er den viktigste delen ved en gradering. Det å kunne vise at du behersker rette slag teknisk bra i bevegelse med god balanse anser vi som viktig.
              </p>
            </div>

          </div>
        </section>
      </div>

      <MarqueeText />
    </div>
  );
};