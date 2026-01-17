import React from 'react';
import { View } from '../types';
import { Button } from '../components/Button';
import { ChevronRight } from 'lucide-react';
import { MarqueeText } from '../components/MarqueeText';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center bg-[#0c0c0c]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/1.jpg"
            alt="Ju Jitsu Training"
            className="w-full h-full object-cover contrast-125 brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />
        </div>

        {/* Økt padding-top ytterligere (pt-64 på mobil, pt-48 på desktop) for å dytte teksten lenger ned */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-64 md:pt-48">
          <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">
            Ju Jitsu Norge / 武術
          </span>
          {/* Redusert tekststørrelse til 9vw/140px for en mer elegant look på Mac/mindre skjermer */}
          <h1 className="text-[9vw] 2xl:text-[140px] font-black uppercase text-white leading-[0.85] tracking-tighter mb-12 select-none">
            <span className="block animate-slide-in-bottom opacity-0 [animation-delay:200ms]">JU JITSU</span>
            <span className="block text-outline animate-slide-in-bottom opacity-0 [animation-delay:350ms]">NORGE</span>
          </h1>

          <div className="flex flex-row flex-nowrap gap-3 md:gap-6 animate-fade-in-up opacity-0 [animation-delay:600ms]">
            <Button className="flex-1 md:flex-none whitespace-nowrap" onClick={() => onNavigate(View.CLUBS)}>Finn din klubb</Button>
            <Button className="flex-1 md:flex-none whitespace-nowrap" variant="outline" onClick={() => onNavigate(View.CURRICULUM_GENERAL)}>Se pensum</Button>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: OM OSS --- */}
      <section className="relative py-24 md:py-48 border-y border-white/5 overflow-hidden animate-fade-in-up opacity-0 [animation-delay:750ms]">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
            <div className="w-px h-full bg-white"></div>
            <div className="w-px h-full bg-white hidden md:block"></div>
            <div className="w-px h-full bg-white"></div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10">
            <div className="w-full mt-12 lg:mt-0">
              <div className="aspect-[3/2] lg:aspect-[4/3] border border-white/10 overflow-hidden brightness-100 group transition-all duration-1000 w-full">
                <img 
                  src="/images/2.jpg" 
                  className="w-full h-full object-cover brightness-[0.7] hover:brightness-100 transition-all duration-300"
                  alt="Ju Jitsu Fokus"
                />
                <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
              </div>
            </div>
            
            <div className="space-y-10 py-16 lg:py-0 lg:pl-24">
              <div>
                <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Fellesskap / 和</span>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none max-w-2xl">
                  STYRKE & <br/><span className="text-outline">TRADISJON</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                <p className="text-white font-medium text-2xl tracking-tight leading-tight">
                  Ju Jitsu Norge forener dype tradisjoner med moderne metodikk for utøvere i alle aldre.
                </p>
                <p>
                  Vi samler klubber i et sterkt faglig fellesskap som sikrer kvalitet gjennom et felles undervisningssystem og nasjonale treningssamlinger.
                </p>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" onClick={() => onNavigate(View.ABOUT)}>
                  Om oss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TRENINGSSYSTEMET --- */}
      <section className="bg-[#050505] relative py-24 md:py-40 animate-fade-in-up opacity-0 [animation-delay:900ms]">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
            <div className="w-px h-full bg-white"></div>
            <div className="w-px h-full bg-white hidden md:block"></div>
            <div className="w-px h-full bg-white hidden lg:block"></div>
            <div className="w-px h-full bg-white"></div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
              <div className="lg:col-span-2">
                <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Fundamentet / 基</span>
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                  TRENINGS<br/><span className="text-outline">SYSTEMET</span>
                </h2>
              </div>
              <div className="lg:col-span-1 pb-1">
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-sm:max-w-xs">
                  Vårt system sikrer progresjon ved å forene tradisjon med moderne metodikk. Treningssystemet er tredelt og omfatter:
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border border-white/5">
            {[
              { num: "01", title: "Basis & Balanse", desc: "Grunnleggende teknikker, bevegelse og kroppsforståelse.", img: "/images/3.jpg" },
              { num: "02", title: "Selvforsvar", desc: "Effektive teknikker mot realistiske angrep og situasjoner.", img: "/images/4.jpg" },
              { num: "03", title: "Anvendelse", desc: "Bruk av teknikker i realistiske og varierte scenarioer.", img: "/images/5.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-[#0c0c0c] p-8 md:p-10 lg:p-12 transition-all duration-500">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover opacity-25 transition-transform duration-1000 group-hover:scale-105" 
                    alt={item.title} 
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end space-y-4">
                  <span className="text-jjn-orange font-black text-3xl sm:text-4xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    {item.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter group-hover:text-jjn-orange transition-colors duration-500 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[10px] sm:text-[11px] lg:text-[12px] font-light leading-relaxed max-w-xs uppercase tracking-widest">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ARRANGEMENTER --- */}
      <section className="relative py-24 md:py-48 border-t border-white/5 overflow-hidden animate-fade-in-up opacity-0 [animation-delay:1050ms]">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
            <div className="w-px h-full bg-white"></div>
            <div className="w-px h-full bg-white hidden md:block"></div>
            <div className="w-px h-full bg-white"></div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="w-full mt-12 lg:mt-0">
               <div className="aspect-video border border-white/10 overflow-hidden brightness-80 w-full">
                 <img 
                   src="/images/6.jpg" 
                   className="w-full h-full object-cover brightness-[0.7]" 
                   alt="Sommerleir og samling"
                 />
               </div>
            </div>
            <div className="space-y-10 py-16 lg:py-0 lg:pl-24">
              <div>
                <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Samlinger / 結</span>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                  NASJONALE <br/><span className="text-outline">MØTEPLASSER</span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Hvert år samles vi til nasjonale treningssamlinger og den tradisjonsrike sommerleiren. Vi vennskap og utvikler teknisk ferdighet på tvers av klubbene.
              </p>
              <div className="pt-2">
                <Button onClick={() => onNavigate(View.EVENTS)}>Se arrangementer</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: VEIEN VIDERE (MOT SORT BELTE) --- */}
      <section className="bg-[#050505] relative py-24 md:py-40 border-t border-white/5 animate-fade-in-up opacity-0 [animation-delay:1200ms]">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
            <div className="w-px h-full bg-white"></div>
            <div className="w-px h-full bg-white hidden md:block"></div>
            <div className="w-px h-full bg-white"></div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl mb-12">
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">Progresjon / 道</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              MOT <br/><span className="text-outline">SORT BELTE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-20 relative z-10 border-t border-l border-white/10">
            
            {/* JUNIOR CARD */}
            <button 
              onClick={() => onNavigate(View.CURRICULUM_KIDS)}
              className="group flex flex-col w-full text-left transition-all duration-300 outline-none border-r border-b border-white/10"
            >
              <div className="relative aspect-square overflow-hidden w-full">
                <img 
                  src="/images/7.jpg" 
                  className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.35] group-hover:scale-105 transition-all duration-[1500ms]" 
                  alt="Barnepensum"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-jjn-orange mb-3 block">Junior</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase leading-none tracking-tighter group-hover:text-jjn-orange transition-colors duration-300">BARNE-<br/>PENSUM</h3>
                </div>
              </div>
              
              <div className="bg-transparent p-8 flex items-center justify-start gap-3 transition-all duration-300 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-jjn-orange transition-colors duration-300">Utforsk junior programmet</span>
                <ChevronRight size={18} className="text-white group-hover:text-jjn-orange group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </button>

            {/* SENIOR CARD */}
            <button 
              onClick={() => onNavigate(View.CURRICULUM_ADULT)}
              className="group flex flex-col w-full text-left transition-all duration-300 outline-none border-r border-b border-white/10"
            >
              <div className="relative aspect-square overflow-hidden w-full">
                <img 
                  src="/images/8.jpg" 
                  className="w-full h-full object-cover brightness-[0.3] group-hover:brightness-[0.35] group-hover:scale-105 transition-all duration-[2000ms]" 
                  alt="Voksenpensum"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-jjn-orange mb-3 block">Senior</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase leading-none tracking-tighter group-hover:text-jjn-orange transition-colors duration-300">VOKSEN-<br/>PENSUM</h3>
                </div>
              </div>

              <div className="bg-transparent p-8 flex items-center justify-start gap-3 transition-all duration-300 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-jjn-orange transition-colors duration-300">Utforsk senior programmet</span>
                <ChevronRight size={18} className="text-white group-hover:text-jjn-orange group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </button>

          </div>
        </div>
      </section>

      <MarqueeText />
    </div>
  );
};