import React from 'react';
import { Download, FileText } from 'lucide-react';
import { MarqueeText } from '../components/MarqueeText';

const VIDEO_PLACEHOLDER = "https://www.youtube.com/embed/0glU6Qu06kU";

interface VideoGridProps {
  count: number;
}

const VideoGrid: React.FC<VideoGridProps> = ({ count }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="group relative bg-transparent border-r border-b border-white/10 flex flex-col h-full transition-all duration-500">
          
          {/* Video Container med padding som matcher resten av kortene */}
          <div className="p-8 md:p-10 flex flex-col flex-grow">
            <div className="relative aspect-video bg-black border border-white/5 overflow-hidden mb-6">
              <iframe 
                className="absolute inset-0 w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src={VIDEO_PLACEHOLDER}
                title={`Teknikk video ${i + 1}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              ></iframe>
              
              {/* Oransje Tag - Oppe til høyre */}
              <div className="absolute top-0 right-0 bg-jjn-orange text-white font-black text-[8px] uppercase py-2 px-4 z-20">
                TEKNIKK 0{i+1}
              </div>
            </div>

            {/* Label - Blir oransje ved hover på kortet */}
            <div className="space-y-1">
               <h4 className="text-sm font-black text-white uppercase tracking-widest group-hover:text-jjn-orange transition-colors duration-300">
                 Demonstrasjon 0{i+1}
               </h4>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Teknisk utførelse</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Curriculum2025View: React.FC = () => {
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
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Revisjon 2025 / 未来</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              GRADERING- <br/><span className="text-outline">SYSTEMET</span> 2025
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: DOKUMENTASJON --- */}
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
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">01 / Nedlasting</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    FULLSTENDIG <br/><span className="text-outline">OVERSIKT</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                    Det oppdaterte systemet for neste generasjon utøvere i Ju Jitsu Norge.
                  </p>
                  <p>
                    Dette dokumentet inneholder alle krav til gradering for 2025-revisjonen, inkludert tekniske beskrivelser, teori og krav til utførelse.
                  </p>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => alert("Laster ned PDF...")}
                    className="group flex items-center gap-10 py-6 px-10 border-[1px] border-white/10 bg-transparent hover:border-jjn-orange transition-all duration-300 outline-none"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-gray-500 font-black uppercase text-[10px] tracking-[0.3em] mb-1 group-hover:text-jjn-orange/60 transition-colors">System_2025.pdf</span>
                      <span className="text-white font-black uppercase text-xl tracking-tighter group-hover:text-jjn-orange transition-colors">Last ned pensum</span>
                    </div>
                    <Download 
                      className="text-white/20 group-hover:text-jjn-orange transition-colors duration-300" 
                      size={28} 
                    />
                  </button>
                </div>
              </div>

              <div className="w-full">
                <div className="aspect-[3/4] lg:aspect-[4/5] border border-white/10 relative overflow-hidden group shadow-2xl w-full max-w-md mx-auto bg-[#1a1a1a]">
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                      <FileText size={100} strokeWidth={1} className="text-white mb-6" />
                      <span className="text-white font-black uppercase tracking-[0.5em] text-xs">Pensumkrav 2025</span>
                   </div>
                   <img 
                    src="/images/voksen_pdf1.jpg" 
                    alt="2025 System" 
                    className="w-full h-full object-cover brightness-[0.9] group-hover:scale-100 transition-all duration-[2000ms]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VIDEO SEKSJONER --- */}
        
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
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">GRUPPE 1 / 基礎</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                FALL- OG <br/><span className="text-outline">BEVEGELSE</span>
              </h2>
            </div>
            <VideoGrid count={9} />
          </div>
        </section>

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
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">GRUPPE 2 / 移動</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                BLOKKERING <br/><span className="text-outline">& UNNVIKELSE</span>
              </h2>
            </div>
            <VideoGrid count={7} />
          </div>
        </section>

        <section className="relative py-24 md:py-40 bg-[#050505] animate-fade-in-up opacity-0 [animation-delay:900ms]">
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
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">GRUPPE 3 / 攻撃</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                SLAG <br/><span className="text-outline">& SPARK</span>
              </h2>
            </div>
            <VideoGrid count={10} />
          </div>
        </section>

        <section className="relative py-24 md:py-40 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:1050ms]">
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
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">GRUPPE 4 / 投げ技</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                KAST <br/><span className="text-outline">& FELLINGER</span>
              </h2>
            </div>
            <VideoGrid count={3} />
          </div>
        </section>
      </div>

      <MarqueeText />
    </div>
  );
};