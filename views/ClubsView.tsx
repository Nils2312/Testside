import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MarqueeText } from '../components/MarqueeText';

export const ClubsView: React.FC = () => {
  const clubs = [
    {
      city: "Oslo",
      name: "Oslo Ju Jitsu Klubb",
      url: "https://www.facebook.com/OsloJuJitsuklubb/",
      img: "https://images.unsplash.com/photo-159967100542-907e96e98c09?q=80&w=800"
    },
    {
      city: "Bærum",
      name: "Bærum Ju Jitsu Klubb",
      url: "https://bjjk.no/",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
    },
    {
      city: "Sarpsborg",
      name: "Sentrum Kampsport",
      url: "https://www.sentrumkampsport.no/",
      img: "https://images.unsplash.com/photo-1585537884613-1a9bcd024983?q=80&w=800"
    },
    {
      city: "Horten",
      name: "Horten Ju Jitsu Klubb",
      url: "https://www.jujitsunorge.no",
      img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800"
    },
    {
      city: "Fredrikstad",
      name: "Fredrikstad Ju Jitsu",
      url: "https://www.jujitsunorge.no",
      img: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800"
    },
    {
      city: "Sandefjord",
      name: "Sandefjord Kampsport",
      url: "https://www.jujitsunorge.no",
      img: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=800"
    },
    {
      city: "Moss",
      name: "Moss Kampsportklubb",
      url: "https://www.jujitsunorge.no",
      img: "https://images.unsplash.com/photo-1594220088219-03c005b41315?q=80&w=800"
    },
    {
      city: "Ski",
      name: "Follo Ju Jitsu",
      url: "https://www.jujitsunorge.no",
      img: "https://images.unsplash.com/photo-1518619491930-37f2756fb864?q=80&w=800"
    },
    {
      city: "Drammen",
      name: "Drammen Ju Jitsu",
      url: "https://www.jujitsunorge.no",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden">
      
      {/* --- INNHOLD MED GUIDER --- */}
      <div className="relative">
        {/* --- BAKGRUNNSLINJER (Kun for øvre seksjoner) --- */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
          <div className="absolute left-8 md:left-12 inset-y-0 w-px bg-white"></div>
          <div className="absolute right-8 md:right-12 inset-y-0 w-px bg-white"></div>
        </div>

        {/* --- HERO: ANIMERT OVERSKRIFT --- */}
        <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">
              Våre Dojos / 道場
            </span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              FINN DIN <span className="text-outline">KLUBB</span>
            </h1>
          </div>
        </header>

        {/* --- INTRO SECTION --- */}
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
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Fellesskap / 共同体</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    EN NASJONAL <br/><span className="text-outline">ALLIANSE</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                    Ju Jitsu Norge består av uavhengige klubber som deler samme visjon og tekniske standard.
                  </p>
                  <p>
                    Våre medlemsklubber tilbyr et trygt og profesjonelt miljø for alle som ønsker å mestre selvforsvar, bygge selvtillit og utvikle fysisk styrke.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="https://images.unsplash.com/photo-159967100542-907e96e98c09?q=80&w=1200&auto=format&fit=crop" 
                    alt="Dojo Atmosfære" 
                    className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CLUBS GRID --- */}
        <section className="relative py-24 md:py-40 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:600ms]">
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
              <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Lokasjoner / 場所</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                VÅRE <br/><span className="text-outline">KLUBBER</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10 relative z-10">
              {clubs.map((club, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-transparent transition-all duration-500 border-r border-b border-white/10 overflow-hidden flex flex-col h-full cursor-pointer"
                  onClick={() => window.open(club.url, '_blank')}
                >
                  <div className="p-8 md:p-12 pb-6 flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden border border-white/5 mb-8 relative">
                      <img 
                        src={club.img} 
                        alt={club.name} 
                        className="w-full h-full object-cover brightness-90 grayscale-0 transition-transform duration-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-jjn-orange transition-colors duration-300">
                        {club.name}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="w-full py-6 px-8 md:px-12 border-t border-white/10 flex items-center justify-start gap-4 transition-all duration-300 outline-none text-left bg-transparent">
                      <span className="text-gray-500 font-black uppercase text-[10px] tracking-[0.25em] transition-colors duration-300 group-hover:text-jjn-orange">
                        Besøk nettside
                      </span>
                      <ChevronRight size={14} className="text-gray-600 transition-all duration-300 group-hover:text-jjn-orange group-hover:translate-x-1" />
                    </div>
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