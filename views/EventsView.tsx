import React from 'react';
import { Button } from '../components/Button';
import { MarqueeText } from '../components/MarqueeText';

export const EventsView: React.FC = () => {
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
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Kalender / イベント</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              ARRANGE<span className="text-outline">MENTER</span>
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: SOSIALE MEDIER & OPPDATERINGER --- */}
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
                    src="https://images.unsplash.com/photo-159967100542-907e96e98c09?q=80&w=1200&auto=format&fit=crop" 
                    alt="Sosialt fellesskap" 
                    className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-10 py-16 lg:py-0 lg:pl-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Oppdateringer / ニュース</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    FØLG OSS PÅ <br/><span className="text-outline">FACEBOOK</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed w-full">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight max-w-xl">
                    Vi bruker Facebook som vår primære kanal for løpende oppdateringer og invitasjoner.
                  </p>
                  <p className="w-full">
                    For å sikre at du får med deg alle kommende arrangementer, treningssamlinger og nyheter fra klubbene, anbefaler vi å følge vår offisielle Facebook-side. Her legger vi ut informasjon fortløpende.
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://www.facebook.com/jujitsunorge/', '_blank')}
                  >
                    Åpne Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SOMMERLEIR (50/50 SPLIT) --- */}
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
              <div className="space-y-10 py-16 lg:py-0 lg:pr-24">
                <div>
                  <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Høydepunkt / 夏合宿</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    SOMMER<br/><span className="text-outline">LEIREN</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                    Årets viktigste samling for både store og små.
                  </p>
                  <p>
                    Sommerleiren er ju jitsu-året sitt store høydepunkt. Her samles klubber fra hele landet for en uke med intensiv trening, graderinger og ikke minst et fantastisk sosialt fellesskap.
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="primary"
                    onClick={() => window.open('https://sommerleir.no', '_blank')}
                  >
                    Les mer på sommerleir.no
                  </Button>
                </div>
              </div>

              <div className="w-full">
                <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 relative overflow-hidden group shadow-2xl w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1200&auto=format&fit=crop" 
                    alt="Sommerleir Trening" 
                    className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
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