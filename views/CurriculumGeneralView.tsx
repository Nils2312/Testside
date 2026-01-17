import React from 'react';
import { View } from '../types';
import { MarqueeText } from '../components/MarqueeText';

export const CurriculumGeneralView: React.FC = () => {
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
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Systemet / 昇段</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              GENERELT OM <br/><span className="text-outline">SYSTEMET</span>
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: INTRODUKSJON --- */}
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
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">01 / Utvikling</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    TO VEIER TIL <br/><span className="text-outline">MESTRING</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                    I JJN Ju Jitsu har vi to ulike pensum. Hvilket av dem som gjelder for deg er avhengig av alderen din og når du startet.
                  </p>
                  <p>
                    Systemet er bygget for å sikre en naturlig progresjon, der vi tar hensyn til både fysiske forutsetninger og mental modenhet. Uansett hvilken vei du går, er målet det samme: Komplett ferdighet og sort belte.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="/images/13.jpg" 
                    alt="Pensum Trening" 
                    className="w-full h-full object-cover brightness-[0.7] group-hover:scale-100 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: KATEGORIER --- */}
        <section className="bg-[#050505] relative py-24 md:py-40 animate-fade-in-up opacity-0 [animation-delay:600ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="mb-24">
              <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">02 / Kategorier</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                VÅRE <br/><span className="text-outline">PROGRAMMER</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10 border border-white/10 bg-transparent">
              
              {/* Junior Program */}
              <div className="group relative border-b md:border-b-0 md:border-r border-white/10 bg-transparent p-8 md:p-16 overflow-hidden flex flex-col min-h-[450px] transition-all duration-500">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12">
                    <span className="text-jjn-orange font-black text-4xl mb-4 block opacity-10 group-hover:opacity-100 transition-opacity duration-500">01</span>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-jjn-orange transition-colors duration-500">
                      JUNIOR <br/><span className="text-outline">PENSUM</span>
                    </h3>
                    <p className="text-gray-400 text-base font-light leading-relaxed max-w-md">
                      Juniorprogrammet (8 - 16 år) er skreddersydd for å utvikle motoriske ferdigheter, disiplin og teknisk mestring. Vi legger et solid fundament gjennom strukturert trening som forbereder utøveren på videre avansert selvforsvar.
                    </p>
                  </div>
                </div>
                
                <div className="absolute -right-12 -bottom-12 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none select-none">
                  <span className="text-[25rem] font-black text-white leading-none">子</span>
                </div>
              </div>

              {/* Senior Program */}
              <div className="group relative bg-transparent p-8 md:p-16 overflow-hidden flex flex-col min-h-[450px] transition-all duration-500">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12">
                    <span className="text-jjn-orange font-black text-4xl mb-4 block opacity-10 group-hover:opacity-100 transition-opacity duration-500">02</span>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-jjn-orange transition-colors duration-500">
                      SENIOR <br/><span className="text-outline">PENSUM</span>
                    </h3>
                    <p className="text-gray-400 text-base font-light leading-relaxed max-w-md">
                      Seniorpensum (18+ år) dykker dypere inn i teknisk forståelse, anatomi, jus og avansert bruk av kraft. Dette er et fullstendig selvforsvarssystem utviklet for voksne utøvere med fokus på realisme og effektivitet.
                    </p>
                  </div>
                </div>

                <div className="absolute -right-12 -bottom-12 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none select-none">
                  <span className="text-[25rem] font-black text-white leading-none">道</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <MarqueeText />
    </div>
  );
};