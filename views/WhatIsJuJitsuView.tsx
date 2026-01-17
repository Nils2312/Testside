import React from 'react';
import { MarqueeText } from '../components/MarqueeText';

// Tilpasset hjelpekomponent for bakgrunnsguidene som støtter 7/5 split
const CustomGridGuides = ({ opacity = "opacity-[0.03]" }: { opacity?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${opacity} z-0`}>
      <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12">
        {/* Venstre ytterkant - Skjult på mobil (lg:border-l) */}
        <div className="lg:col-span-1 lg:border-l border-white h-full relative"></div>
        {/* Midtlinje flyttet til høyre (etter kolonne 7) */}
        <div className="hidden lg:block lg:col-span-6 h-full border-r border-white"></div>
        <div className="lg:col-span-4 h-full"></div>
        {/* Høyre ytterkant - Skjult på mobil (lg:border-r) */}
        <div className="lg:col-span-1 lg:border-r border-white h-full relative"></div>
      </div>
    </div>
  );
};

export const WhatIsJuJitsuView: React.FC = () => {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-gray-200 relative overflow-hidden font-sans">
      
      {/* --- HERO --- */}
      <header className="relative pt-48 pb-20 border-b border-white/5 z-10 bg-[#0c0c0c]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Definisjon / 定義</span>
          <h1 className="text-[7vw] 2xl:text-[100px] font-black uppercase text-white leading-[0.9] tracking-tighter animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
            DEFINISJONEN <br/><span className="text-outline">AV JU JITSU</span>
          </h1>
        </div>
      </header>

      {/* --- HOVEDINNHOLD --- */}
      <section className="relative py-24 md:py-40 border-b border-white/5 bg-[#0c0c0c] animate-fade-in-up opacity-0 [animation-delay:450ms]">
        <CustomGridGuides opacity="opacity-5" />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            
            {/* Tekst Kolonne - Nå 7 av 12 kolonner for mer bredde */}
            <div className="lg:col-span-7 lg:pr-24 space-y-12 order-2 lg:order-1 mt-16 lg:mt-0">
              <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                
                <div className="mb-12">
                  <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Introduksjon / 導入</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                    JJN <span className="text-outline">JU JITSU</span>
                  </h2>
                </div>

                <p className="text-white font-medium text-1xl md:text-1xl tracking-tight leading-tight">
                  Ju jitsu er en selvforsvarsorientert kampkunst med historiske røtter i samuraienes kamptradisjoner i Japan.
                </p>
                <p>
                  I sin moderne form kombinerer kampkunsten et bredt spekter av teknikker med allsidig fysisk trening og systematisk ferdighetsutvikling. Målet er å sette utøveren i stand til å håndtere potensielle trussel- og voldssituasjoner na en effektiv, kontrollert og situasjonstilpasset måte.
                </p>
                <p>
                  Gjennom regelmessig og strukturert trening utvikles blant annet styrke, bevegelighet, koordinasjon, balanse og mental tilstedeværelse. Utøverens progresjon dokumenteres over tid gjennom graderingssystemet, som symboliseres med ulike beltefarger. Disse går fra gult, oransje, grønt, blått, brunt og tilslutt sort belte.
                </p>

                <div className="pt-8 space-y-8">
                  <p className="text-white font-medium text-xl">Treningssystemet er tredelt og omfatter:</p>
                  <ul className="space-y-6">
                    {[
                      "Trening av basisferdigheter, med fokus på grunnleggende teknikker, bevegelser og kroppsforståelse.",
                      "Trening av selvforsvarsorienterte teknikker, rettet mot ulike typer angrep og situasjoner.",
                      "Praktisk anvendelse, hvor teknikkene integreres i varierte og tilnærmet realistiske scenarioer for å utvikle situasjonsforståelse og handlingskompetanse."
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        {/* Firkantene er nå grå (bg-white/20) for å matche linjene */}
                        <div className="w-1.5 h-1.5 md:w- md:h-1 bg-white/20 shrink-0 mt-[8px] md:mt-[10px]"></div>
                        <span className="text-gray-400 font-light">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bilde Kolonne - Nå 5 av 12 kolonner */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="aspect-[3/4] border border-white/10 relative overflow-hidden group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1200&auto=format&fit=crop" 
                  alt="Ju Jitsu Fokus" 
                  className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125 group-hover:scale-105 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-jjn-orange/5 mix-blend-overlay" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <MarqueeText />
    </div>
  );
};