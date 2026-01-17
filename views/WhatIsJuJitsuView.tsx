import React, { useEffect, useState, useRef } from 'react';
import { MarqueeText } from '../components/MarqueeText';

export const WhatIsJuJitsuView: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<number | null>(null);
  const systemRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const options = { 
      threshold: 0.5,
      rootMargin: '0px 0px -10% 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = systemRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) setActiveSystem(index + 1);
        }
      });
    }, options);

    systemRefs.forEach(ref => ref.current && observer.observe(ref.current));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden">
      
      {/* --- INNHOLD MED GUIDER --- */}
      <div className="relative">
        {/* --- BAKGRUNNSLINJER FOR ULTRA-WIDE (Begrenset til innholdsdel) --- */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
          <div className="absolute left-8 md:left-12 inset-y-0 w-px bg-white"></div>
          <div className="absolute right-8 md:right-12 inset-y-0 w-px bg-white"></div>
        </div>

        {/* --- HERO --- */}
        <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Definisjon / 定義</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              HVA ER <span className="text-outline">JU JITSU?</span>
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: KONSEPTET (50/50 SPLIT) --- */}
        <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:450ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10">
              <div className="space-y-10 py-16 lg:py-0 lg:pr-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Arven / 伝統</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    EN KAMPKUNST <br/><span className="text-outline">FOR SELVFORSVAR</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                    Ju jitsu er en selvforsvarsorientert kampkunst med historiske røtter i samuraienes kamptradisjoner i Japan.
                  </p>
                  <p>
                    I sin moderne form kombinerer kampkunsten et bredt spekter av teknikker med allsidig fysisk trening og systematisk ferdighetsutvikling. 
                  </p>
                  <p>
                    Målet er å sette utøveren i stand til å håndtere potensielle trussel- og voldssituasjoner på en effektiv, kontrollert og situasjonstilpasset måte.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1200&auto=format&fit=crop" 
                    alt="Ju Jitsu Fokus" 
                    className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: UTVIKLING --- */}
        <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:600ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10">
              <div className="order-2 lg:order-1 w-full">
                <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Fysisk Utvikling" 
                    className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-10 py-16 lg:py-0 lg:pl-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Utvikling / 向上</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    GRADERING <br/><span className="text-outline">& MESTRING</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed w-full">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight w-full">
                    Gjennom regelmessig trening utvikles styrke, bevegelighet, koordinasjon og balanse.
                  </p>
                  <p className="w-full">
                    Utøverens progresjon dokumenteres over tid gjennom graderingssystemet, som symboliseres med ulike beltefarger. Disse går fra gult, oransje, grønt, blått, brunt og til slutt sort belte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: TRENINGSSYSTEMET --- */}
        <section className="relative py-24 md:py-40 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:750ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="mb-24">
              <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Metodikk / 方法</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                TREDELT <br/><span className="text-outline">SYSTEM</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 relative z-10">
              {[
                {
                  kanji: "基",
                  title: "Basisferdigheter",
                  desc: "Trening av basisferdigheter, med fokus på grunnleggende teknikker, bevegelser og kroppsforståelse.",
                  num: "01"
                },
                {
                  kanji: "守",
                  title: "Selvforsvar",
                  desc: "Trening av selvforsvarsorienterte teknikker, rettet mot ulike typer angrep og realistiske situasjoner.",
                  num: "02"
                },
                {
                  kanji: "実",
                  title: "Praktisk anvendelse",
                  desc: "Teknikkene integreres i varierte scenarioer for å utvikle situasjonsforståelse og handlingskompetanse.",
                  num: "03"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  ref={systemRefs[idx]}
                  className="group relative bg-[#0c0c0c] p-8 md:p-12 transition-all duration-500 overflow-hidden flex flex-col min-h-[400px]"
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <span className={`font-black text-4xl mb-8 block transition-colors duration-500 ${activeSystem === idx + 1 ? 'text-jjn-orange' : 'text-jjn-orange/20 group-hover:text-jjn-orange'}`}>
                        {item.num}
                      </span>
                      <h3 className={`text-3xl font-black uppercase tracking-tighter mb-6 transition-colors duration-500 ${activeSystem === idx + 1 ? 'text-jjn-orange' : 'text-white group-hover:text-jjn-orange'}`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-base font-light leading-relaxed tracking-widest text-[11px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Watermark Kanji */}
                  <div className={`absolute -right-4 -bottom-4 pointer-events-none select-none transition-all duration-700 ${activeSystem === idx + 1 ? 'opacity-[0.08]' : 'opacity-[0.02] group-hover:opacity-[0.08]'}`}>
                    <span className={`text-[15rem] font-black leading-none transition-colors duration-500 ${activeSystem === idx + 1 ? 'text-jjn-orange' : 'text-white'}`}>
                      {item.kanji}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <MarqueeText />
    </div>
  );
};