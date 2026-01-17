import React from 'react';
import { MarqueeText } from '../components/MarqueeText';

// Hjelpekomponent for bakgrunnsguidene med grid-basert posisjonering for perfekt linjering
const GridGuides = ({ 
  opacity = "opacity-[0.03]", 
  cols = 3,
  showInner = [true, true],
  showOuter = true
}: { 
  opacity?: string, 
  cols?: 2 | 3,
  showInner?: boolean[],
  showOuter?: boolean
}) => {
  if (!showOuter && !showInner.some(v => v)) return null;

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

export const MeaningOfJuJitsuView: React.FC = () => {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden font-sans">
      
      {/* --- HERO SECTION --- */}
      {/* Fjernet GridGuides her for å ha en helt ren bakgrunn ved overskriften */}
      <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Etymologi / 語源</span>
          <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
            BETYDNINGEN <br/><span className="text-outline">AV NAVNET</span>
          </h1>
        </div>
      </header>

      {/* --- SECTION 1: HISTORISK PERSPEKTIV (1 midtlinje) --- */}
      <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:450ms]">
        <GridGuides opacity="opacity-5" cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            
            {/* Tekst på venstre side */}
            <div className="pr-0 lg:pr-24 space-y-10 order-2 lg:order-1 mt-16 lg:mt-0">
              <div>
                <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">01 / Bakgrunn</span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                  HISTORISK <br/><span className="text-outline">PERSPEKTIV</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                  Fra et historisk og filosofisk perspektiv har mange bøker forsøkt å forklare betydningen av ordene ju jutsu og yawara.
                </p>
                <p>
                  Her fokuserer vi på en språklig og terminologisk forklaring. Ordet ju jutsu har gjennom tidene blitt skrevet på mange måter: ju jutsu, jiu-jitsu, ju jitsu, jyu-jutsu, yawara, yawara-jutsu, osv.
                </p>
                <p>
                  På japansk skrives ordet<span className="text-jjn-orange font-black text-1xl mx-2">柔術</span>med kanji, de logografiske tegnene japanerne har hentet fra Kina.
                </p>
              </div>
            </div>

            {/* Bilde på høyre side */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[5/4] border border-white/10 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop" 
                  alt="Ju Jitsu Kanji" 
                  className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125 group-hover:scale-105 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: HVORFOR VARIASJON? (1 midtlinje) --- */}
      <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:600ms]">
        <GridGuides cols={2} showInner={[true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-24">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">02 / Utvikling</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              HVORFOR <br/><span className="text-outline">VARIASJON?</span>
            </h2>
            <p className="text-gray-500 mt-8 text-lg font-light tracking-widest">Flere faktorer forklarer variasjonene i skrivemåte:</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
            <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 group bg-transparent">
              <span className="text-jjn-orange font-black text-5xl mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">01</span>
              <p className="text-white text-xl md:text-1xl font-light leading-relaxed text-gray-400">
                Det har historisk vært ulike metoder for å overføre japanske tegn til det latinske alfabetet.
              </p>
            </div>
            <div className="p-10 md:p-16 group bg-transparent">
              <span className="text-jjn-orange font-black text-5xl mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">02</span>
              <p className="text-white text-xl md:text-1xl font-light leading-relaxed text-gray-400">
                Ordet ble skrevet på forskjellige måter i Japan, avhengig av tid og kontekst (ju jutsu, yawara-jutsu, osv.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KANJI ANALYSE (Kun venstre indre linje) --- */}
      <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:750ms]">
        <GridGuides opacity="opacity-5" cols={3} showInner={[true, false]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-16">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">03 / Analyse</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              KARAKTER- <br/><span className="text-outline">UTTALE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10 bg-[#0c0c0c]">
            {/* Tegnet 柔 */}
            <div className="p-10 border-r border-b border-white/10 flex items-center justify-center bg-transparent">
               <span className="text-[14rem] font-black text-white/5 leading-none select-none">柔</span>
            </div>
            <div className="p-10 border-r border-b border-white/10 lg:col-span-2 space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white uppercase tracking-widest inline-block">JU / YAWARA</h3>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Tegnet<span className="text-jjn-orange font-bold text-1xl mx-1">柔</span>uttales som <span className="text-white italic">ju</span> når det inngår i sammensatte ord,
                og som <span className="text-white italic">yawara</span> når det står alene. 
              </p>
              <p className="text-gray-500 text-base italic font-light">
                Tegnet brukes også i ord som <span className="text-white font-medium">柔らかい (yawarakai)</span>, som betyr «myk», der de siste tegnene er <span className="text-jjn-orange font-bold uppercase tracking-widest text-xs">hiragana</span>.
              </p>
            </div>

            {/* Tegnet 術 */}
            <div className="p-10 border-r border-b border-white/10 flex items-center justify-center bg-transparent">
               <span className="text-[14rem] font-black text-white/5 leading-none select-none">術</span>
            </div>
            <div className="p-10 border-r border-b border-white/10 lg:col-span-2 space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white uppercase tracking-widest inline-block">JUTSU</h3>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Tegnet<span className="text-jjn-orange font-bold text-1xl mx-1">術</span>uttales <span className="text-white italic">jutsu</span> og betyr «teknikk», «kunst» eller «metode». 
              </p>
              <p className="text-gray-500 text-base italic font-light">
                Det inngår i mange ord, for eksempel <span className="text-white font-medium uppercase tracking-widest text-xs">gijutsu</span> (teknikk/teknologi).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MYK TEKNIKK & FILOSOFI (Kun ytre linjer) --- */}
      <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:900ms]">
        <GridGuides cols={3} showInner={[false, false]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
            <div className="p-10 md:p-16 border-r border-b border-white/10 lg:col-span-3 bg-transparent">
              <p className="text-3xl md:text-5xl text-white font-black leading-none tracking-tighter uppercase">
                SAMMEN UTGJØR <span className="text-jjn-orange">柔術</span> JU JITSU, <br/>
                <span className="text-outline">«MYK TEKNIKK»</span>
              </p>
            </div>
            <div className="p-10 md:p-16 border-r border-b border-white/10 lg:col-span-2 text-gray-400 font-light text-lg md:text-xl leading-relaxed bg-transparent">
              <p className="mb-10">
                Ordet betegner både teknikk og prinsippet om å bruke fleksibilitet i kamp, snarere enn ren kraft. 
              </p>
              <p>
                I middelalderen var <span className="text-white italic">yawara</span> den vanligste betegnelsen, parallelt med ju jutsu. Over tid ble <span className="text-jjn-orange font-bold">ju jutsu</span> den standardiserte termen, mens <span className="text-white italic">yawara</span> i dag hovedsakelig brukes historisk.
              </p>
            </div>
            <div className="p-10 md:p-16 border-r border-b border-white/10 lg:col-span-1 bg-transparent flex flex-col justify-center">
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                Ju refererer ikke bare til fysisk fleksibilitet, men også til mental og strategisk smidighet. På
                norsk kan det sammenlignes med uttrykket <span className="text-jjn-orange font-black uppercase tracking-widest text-xs">«å vike for å vinne»</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: JUTSU VS DO (Standard 3 kolonner) --- */}
      <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:1050ms]">
        <GridGuides opacity="opacity-5" cols={3} showInner={[true, true]} />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-16">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">04 / Distinksjon</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              JUTSU <span className="text-outline">VS DO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
            <div className="p-10 md:p-16 border-r border-b border-white/10 lg:col-span-1 bg-transparent group">
              <h3 className="text-2xl font-black text-jjn-orange uppercase tracking-widest mb-6">JUTSU (術)</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Betegner teknikker med praktisk bruk, ofte i kamp. Fokus på effektivitet og metodikk.
              </p>
            </div>
            <div className="p-10 md:p-16 border-r border-b border-white/10 lg:col-span-1 bg-transparent group">
              <h3 className="text-2xl font-black text-jjn-orange uppercase tracking-widest mb-6">DO (道)</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Betegner en filosofisk vei eller disiplin, som kombinerer fysisk, mental og moralsk utvikling. Tegnet <span className="text-white">道</span> uttales michi når det står alene og do når det inngår i
                sammensatte ord.
              </p>
            </div>
            <div className="p-10 md:p-16 border-r border-b border-white/10 lg:col-span-1 bg-transparent flex flex-col justify-center">
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                I moderne Japan kjenner man først og fremst til ju jutsu, mens variasjoner som jiu-
                jitsu hovedsakelig er vestlige tolkninger av uttalen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MarqueeText />
    </div>
  );
};