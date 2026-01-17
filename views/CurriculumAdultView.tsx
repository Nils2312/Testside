import React from 'react';
import { CURRICULUM_ADULTS } from '../constants';
import { ChevronRight } from 'lucide-react';
import { View } from '../types';
import { MarqueeText } from '../components/MarqueeText';

interface CurriculumAdultViewProps {
  onNavigate: (view: View) => void;
}

export const CurriculumAdultView: React.FC<CurriculumAdultViewProps> = ({ onNavigate }) => {

  const handleCardClick = (item: any) => {
    if (item.targetView) {
      onNavigate(item.targetView);
    } else {
      alert(`Laster ned: ${item.label}`);
    }
  };

  // Plassholder-bilder for PDF-forsider (alltid i farger)
  const getPlaceholderImage = (idx: number) => {
    const images = [
      "/images/voksen_pdf1.jpg",
      "/images/voksen_pdf2.png",
      "/images/voksen_pdf3.png",
      "/images/voksen_pdf4.png",
      "/images/voksen_pdf5.png",
      "/images/voksen_pdf6.png",
      "/images/voksen_pdf7.png",
    ];
    return images[idx % images.length];
  };

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
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Senior / 13+ År</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              PENSUM FOR <br/><span className="text-outline">VOKSNE</span>
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: INTRODUKSJON (50/50 SPLIT) --- */}
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
                    src="/images/15.jpg" 
                    alt="Voksen Trening" 
                    className="w-full h-full object-cover brightness-[0.7] group-hover:scale-100 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-10 py-16 lg:py-0 lg:pl-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">01 / Filosofi</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    EN HELHETLIG <br/><span className="text-outline">METODIKK</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed w-full">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight max-w-xl">
                    Ju jitsu i JJN er hovedsakelig selvforsvarsorientert, men rommer hele spekteret av kampkunsten.
                  </p>
                  <p className="w-full">
                    Siden det i praksis ikke finnes grenser for hva som er mulig, har vi valgt tekniske løsninger som bygger på noen grunnleggende ideer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PENSUM ARKIV --- */}
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
              <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">02 / Arkiv</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                PENSUM <br/><span className="text-outline">& GRADERING</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10 relative z-10">
              {CURRICULUM_ADULTS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-transparent transition-all duration-500 border-r border-b border-white/10 overflow-hidden flex flex-col h-full cursor-pointer"
                  onClick={() => handleCardClick(item)}
                >
                  
                  {/* Øverste del med bilde og tekst */}
                  <div className="p-8 md:p-12 pb-6 flex flex-col">
                    {/* PDF Cover Part - A4 Aspect Ratio */}
                    <div className="relative aspect-[1/1.414] bg-[#1a1a1a] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20 mb-8">
                      <img 
                        src={getPlaceholderImage(idx)} 
                        alt={item.label}
                        className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-100 transition-all duration-700"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-jjn-orange transition-colors duration-300 leading-tight">
                        {item.label}
                      </h3>
                      {item.subLabel && (
                        <p className="text-jjn-orange font-black uppercase text-[10px] tracking-[0.2em] opacity-80">
                          {item.subLabel}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-auto">
                    <div 
                      className="w-full py-6 px-8 md:px-12 border-t border-white/10 flex items-center justify-start gap-3 transition-all duration-300 outline-none text-left bg-transparent"
                    >
                      <span className="text-gray-400 font-black uppercase text-[10px] tracking-[0.25em] transition-colors duration-300 group-hover:text-jjn-orange">
                        Se fullstendig pensum
                      </span>
                      <ChevronRight size={14} className="text-gray-500 transition-all duration-300 group-hover:text-jjn-orange group-hover:translate-x-1" />
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