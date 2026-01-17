import React from 'react';
import { Section } from '../components/Section';

export const AboutJuJitsuView: React.FC = () => {
  return (
    <div className="bg-[#0c0c0c] pt-24 pb-0">
      
      {/* --- SECTION 1: HERO / DEFINISJON --- */}
      <Section className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-stretch">
          
          {/* Tekst på venstre side */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Definisjon / 定義</span>
              
              <h1 className="text-5xl md:text-8xl font-black uppercase text-white leading-[0.85] tracking-tighter mb-12">
                JJN <br/><span className="text-outline">JU JITSU</span>
              </h1>

              <div className="max-w-xl space-y-8">
                <p className="text-2xl md:text-3xl text-white font-light leading-tight tracking-tight">
                  Ju jitsu er en selvforsvarsorientert kampkunst med historiske røtter i samuraienes kamptradisjoner i Japan.
                </p>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    I sin moderne form kombinerer kampkunsten et bredt spekter av teknikker med allsidig fysisk trening og systematisk ferdighetsutvikling. Målet er å sette utøveren i stand til å håndtere potensielle trussel- og voldssituasjoner på en effektiv, kontrollert og situasjonstilpasset måte.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bilde på høyre side */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[400px] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1000&auto=format&fit=crop" 
                alt="Ju Jitsu trening i dojo" 
                className="w-full h-full object-cover contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </Section>

      {/* --- SECTION 2: UTVIKLING & GRADERING --- */}
      <Section darker className="py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-4 hidden lg:block">
            <div className="aspect-[3/2] overflow-hidden border border-white/5 opacity-50 grayscale hover:opacity-100 transition-all duration-1000">
               <img 
                 src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                 alt="Fokus" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-3xl space-y-12">
              <p className="text-2xl md:text-4xl text-white font-extralight leading-tight tracking-tight">
                Gjennom regelmessig og strukturert trening utvikles blant annet <span className="text-jjn-orange font-medium italic">styrke, bevegelighet, koordinasjon, balanse</span> og mental tilstedeværelse.
              </p>
              
              <div className="space-y-6">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                  Utøverens progresjon dokumenteres over tid gjennom graderingssystemet, som symboliseres med ulike beltefarger. Disse går fra gult, oransje, grønt, blått, brunt og tilslutt sort belte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- SECTION 3: TRENINGSSYSTEMET --- */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-32">
            <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-xs mb-4 block">Metodikk / 方法</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              TRENINGSSYSTEMET ER <br/><span className="text-outline">TREDELT OG OMFATTER:</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="group relative bg-[#1a1a1a] p-10 md:p-12 md:skew-x-[-6deg] hover:skew-x-0 transition-all duration-500 overflow-hidden min-h-[280px] flex flex-col justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.015] pointer-events-none select-none">基</div>
              <div className="relative z-10 md:skew-x-[6deg] group-hover:skew-x-0 transition-all duration-500">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Basisferdigheter</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  Trening av basisferdigheter, med fokus på grunnleggende teknikker, bevegelser og kroppsforståelse.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#1a1a1a] p-10 md:p-12 md:skew-x-[-6deg] hover:skew-x-0 transition-all duration-500 overflow-hidden min-h-[280px] flex flex-col justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.015] pointer-events-none select-none">守</div>
              <div className="relative z-10 md:skew-x-[6deg] group-hover:skew-x-0 transition-all duration-500">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Selvforsvar</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  Trening av selvforsvarsorienterte teknikker, rettet mot ulike typer angrep og realistiske situasjoner.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#1a1a1a] p-10 md:p-12 md:skew-x-[-6deg] hover:skew-x-0 transition-all duration-500 overflow-hidden min-h-[280px] flex flex-col justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.015] pointer-events-none select-none">実</div>
              <div className="relative z-10 md:skew-x-[6deg] group-hover:skew-x-0 transition-all duration-500">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Praktisk anvendelse</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  Praktisk anvendelse, hvor teknikkene integreres i varierte og tilnærmet realistiske scenarioer for å utvikle situasjonsforståelse og handlingskompetanse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- SECTION 4: BETYDNINGEN AV ORDET --- */}
      <Section darker className="py-24 md:py-32 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
          <div className="lg:col-span-5">
            <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Terminologi / 用語</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              BETYDNINGEN AV <br/>
              <span className="text-outline">JU JITSU</span> <br/>
              ELLER <span className="italic">YAWARA</span>
            </h2>
            <div className="mt-12 flex items-center gap-6">
              <div className="text-6xl md:text-8xl font-black text-white/10 pl-0">
                柔術
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-[0.3em] font-black">
                Kanji: <br/>Ju Jutsu
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Fra et historisk og filosofisk perspektiv har mange bøker forsøkt å forklare betydningen av ordene <span className="text-white font-bold italic">ju jutsu</span> og <span className="text-white font-bold italic">yawara</span>. Her fokuserer vi på en språklig og terminologisk forklaring.
              </p>
              <p>
                Ordet ju jutsu har gjennom tidene blitt skrevet på mange måter: ju jutsu, jiu-jitsu, ju jitsu, jyu-jutsu, yawara, yawara-jutsu, osv. På japansk skrives ordet <span className="text-white font-bold">柔術</span> med kanji, de logografiske tegnene japanerne har hentet fra Kina.
              </p>
            </div>

            {/* Variasjoner i skrivemåte */}
            <div className="pt-4">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Variasjoner i skrivemåte skyldes:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-jjn-orange font-black text-2xl">01</div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                    Det har historisk vært ulike metoder for å overføre japanske tegn til det latinske alfabetet.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-jjn-orange font-black text-2xl">02</div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                    Ordet ble skrevet på forskjellige måter i Japan, avhengig av tid og kontekst (ju jutsu, yawara-jutsu, osv.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- SECTION 5: KARAKTERANALYSE --- */}
      <Section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Språklig fordypning på VENSTRE side (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Karakteranalyse / 漢字の解説</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                SPRÅKLIG <br/><span className="text-outline">FORDYPNING</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Kanji-tegn kan ha flere uttaler, avhengig av om de står alene eller i sammensatte ord.
              </p>
            </div>

            {/* Kanji-delene på HØYRE side (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col gap-12 md:gap-20">
              
              <div className="grid grid-cols-1 gap-12 md:gap-20">
                {/* Tegnet 柔 */}
                <div className="group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="text-8xl md:text-9xl font-black text-white/5 group-hover:text-jjn-orange transition-colors duration-700 leading-none select-none">
                      柔
                    </div>
                    <div className="space-y-4 pt-2">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">Ju / Yawara</h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                        Tegnet <span className="text-white font-bold">柔</span> uttales som <span className="text-jjn-orange italic">ju</span> når det inngår i sammensatte ord, og som <span className="text-jjn-orange italic">yawara</span> når det står alene.
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed italic">
                        Tegnet brukes også i ord som <span className="text-white/60">柔らかい (yawarakai)</span>, som betyr «myk», der de siste tegnene er hiragana, det japanske fonetiske skriftsystemet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tegnet 術 */}
                <div className="group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="text-8xl md:text-9xl font-black text-white/5 group-hover:text-jjn-orange transition-colors duration-700 leading-none select-none">
                      術
                    </div>
                    <div className="space-y-4 pt-2">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">Jutsu</h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                        Tegnet <span className="text-white font-bold">術</span> uttales <span className="text-jjn-orange italic">jutsu</span> og betyr «teknikk», «kunst» eller «metode».
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed italic">
                        Det inngår i mange ord, for eksempel <span className="text-white/60 font-bold tracking-widest">gijutsu</span> (teknikk/teknologi).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Oppsummering / Sammen utgjør... */}
              <div className="mt-8 pt-12 border-t border-white/5">
                <div className="bg-[#121212] p-8 md:p-12 border-l-4 border-jjn-orange shadow-2xl skew-x-[-4deg]">
                  <div className="skew-x-[4deg]">
                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                      Sammen utgjør <span className="text-white font-black mx-2">柔術</span> <span className="text-jjn-orange font-bold italic underline decoration-jjn-orange/30 underline-offset-8">ju jutsu</span>, ofte oversatt som <span className="text-white font-medium italic">«myk teknikk»</span>.
                    </p>
                    <p className="text-gray-500 text-base md:text-lg mt-6 leading-relaxed font-light">
                      Ordet betegner både teknikk og prinsippet om å bruke <span className="text-gray-300 font-medium">fleksibilitet</span> i kamp, snarere enn ren kraft.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Section>

    </div>
  );
};