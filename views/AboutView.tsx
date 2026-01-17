import React, { useState } from 'react';
import { INSTRUCTORS } from '../constants';
import { MarqueeText } from '../components/MarqueeText';
import { ChevronDown, ChevronUp } from 'lucide-react';

const VIDEO_URL = "https://www.youtube.com/embed/Cj7HuokZapk";

export const AboutView: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Viser de første 8 instruktørene initialt
  const visibleInstructors = showAll ? INSTRUCTORS : INSTRUCTORS.slice(0, 8);

  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden">
      
      {/* --- INNHOLD MED GUIDER --- */}
      <div className="relative">
        {/* --- BAKGRUNNSLINJER (Fjernet de absolutte linjene ytterst) --- */}

        {/* --- HERO: ANIMERT OVERSKRIFT --- */}
        <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">
              Ju Jitsu Norge / 創設
            </span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              OM <span className="text-outline">OSS</span>
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: OPPDRAGET --- */}
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
              <div className="order-2 lg:order-1 w-full">
                <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="/images/9.jpg" 
                    alt="Trening" 
                    className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-10 py-16 lg:py-0 lg:pl-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Fellesskap / 絆</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    STYRKE GJENNOM <br/><span className="text-outline">FELLESSKAP</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed w-full">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight max-w-xl">
                    Ju jitsu Norge er et samarbeid mellom klubber som underviser ju jitsu som en selvforsvarsorientert kampkunst.
                  </p>
                  <p className="w-full">
                    Klubber og instruktører samarbeider nært om et felles system for alle aldre. Ved siden av klubbdrift samarbeider vi via treningssamlinger både i Norge og internasjonalt, primært via <a href="https://www.facebook.com/WorldKobudoFederation/" target="_blank" rel="noopener noreferrer" className="text-jjn-orange hover:text-white transition-colors duration-300 decoration-jjn-orange/30">World Kobudo Federation</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: ETABLERING & VEKST --- */}
        <section className="bg-[#050505] relative py-24 md:py-40 border-b border-white/5 animate-fade-in-up opacity-0 [animation-delay:600ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10">
              <div className="space-y-10 py-16 lg:py-0 pr-12 lg:pr-24 flex flex-col justify-center">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Historie / 史</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    ETABLERING <br/><span className="text-outline"> & VEKST</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-xl tracking-tight leading-tight">
                    Ju jitsu Norge (JJN) ble opprettet i et konstituerende møte 17.12.1983.
                  </p>
                  <p>
                  Rune S. Henrichsen, Runar Omland og etter hvert Torbjørn Arntsen var forgrunnsfigurene for JJN i de påfølgende årene. Karl Fredrik Skjørshammer ble også en sentral instruktør, kjent som en svært dyktig teknisk utøver og i flere år leder for vårt oppvisningsteam. 
                  <br></br><br></br>
                  Det ble etablert en mer demokratisk styringsform, og arbeidet med å få ju jitsu anerkjent som idrett på lik linje med andre idretter startet.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="aspect-[3/2] lg:aspect-[4/4] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="/images/10.jpg" 
                    alt="Etablering og Vekst" 
                    className="w-full h-full object-cover brightness-[0.6] contrast-100 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: VIDEO (TIDLØSE PRINSIPPER) --- */}
        <section className="relative py-24 md:py-48 border-b border-white/5 animate-fade-in-up opacity-0 [animation-delay:750ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden md:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch relative z-10">
              <div className="flex flex-col justify-center space-y-8 py-16 pr-12 lg:pr-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">Arkiv / 記録</span>
                  <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                    TIDLØSE <br/><span className="text-outline">PRINSIPPER</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                      Metodene våre utvikles kontinuerlig, men fundamentet forblir det samme. 
                    </p>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    Opptaket fra 2010 viser demonstrasjon av ulike ju jitsu-teknikker, og gir et tidsbilde av både teknisk utførelse og treningskultur i Ju Jitsu Norge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center relative py-16 md:py-0 pl-0">
                <div className="w-full relative group h-full flex flex-col justify-center">
                  <div className="relative aspect-video bg-black overflow-hidden border-y border-r border-white/5">
                    <iframe 
                      className="absolute inset-0 w-full h-full opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                      src={VIDEO_URL}
                      title="Ju Jitsu Norge Arkivvideo"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: LANDETS EKSPERTISE --- */}
        <section className="bg-[#050505] relative py-24 md:py-40 animate-fade-in-up opacity-0 [animation-delay:900ms]">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white hidden md:block"></div>
              <div className="w-px h-full bg-white hidden lg:block"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="mb-24">
              <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Våre trenere / 師</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                LANDETS <br/><span className="text-outline">EKSPERTISE</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-transparent relative z-10 border-t border-l border-white/10">
              {visibleInstructors.map((instructor) => (
                <div key={instructor.id} className="group relative bg-transparent transition-all duration-500 border-r border-b border-white/10 p-8">
                  <div className="aspect-[4/3] overflow-hidden border border-white/5 mb-8 relative">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover transition-none grayscale-0"
                    />
                    <div className="absolute top-0 right-0 bg-jjn-orange text-white font-black text-[8px] uppercase py-2 px-4 z-20">
                      <span className="inline-block">{instructor.rank}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-jjn-orange transition-colors duration-500">
                      {instructor.name}
                    </h3>
                    <p className="text-gray-500 text-[10px] font-light leading-relaxed uppercase tracking-[0.15em]">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              ))}

              {!showAll && (
                <button 
                  onClick={() => setShowAll(true)}
                  className="border-r border-b border-white/10 p-8 flex items-center justify-start text-white hover:text-jjn-orange transition-colors duration-300 group text-left outline-none"
                >
                  <span className="flex items-center gap-3 font-black uppercase text-xs tracking-[0.3em]">
                    Se mer <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </button>
              )}
            </div>

            {showAll && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-white/10">
                 <button 
                  onClick={() => setShowAll(false)}
                  className="border-r border-b border-white/10 p-8 flex items-center justify-start text-white hover:text-jjn-orange transition-colors duration-300 group text-left outline-none"
                >
                  <span className="flex items-center gap-3 font-black uppercase text-xs tracking-[0.3em]">
                    Se mindre <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
                <div className="lg:col-span-3"></div>
              </div>
            )}
          </div>
        </section>
      </div>

      <MarqueeText />
    </div>
  );
};