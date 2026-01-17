import React from 'react';
import { Button } from '../components/Button';
import { Mail } from 'lucide-react';
import { MarqueeText } from '../components/MarqueeText';

export const ContactView: React.FC = () => {
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
            <span className="text-jjn-orange font-black tracking-[0.6em] uppercase text-[10px] mb-6 block animate-slide-in-left opacity-0">Kontakt / 連絡</span>
            <h1 className="text-[8vw] 2xl:text-[120px] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap animate-slide-in-bottom opacity-0 [animation-delay:200ms]">
              KONTAKT <span className="text-outline">OSS</span>
            </h1>
          </div>
        </header>

        {/* --- HOVEDSEKSJON: INFO & SKJEMA --- */}
        <section className="relative bg-[#0c0c0c] border-b border-white/5 overflow-hidden animate-fade-in-up opacity-0 [animation-delay:450ms]">
          
          {/* Bakgrunns-guider (ytre) */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
              <div className="w-px h-full bg-white"></div>
              <div className="w-px h-full bg-white"></div>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              
              {/* VENSTRE SIDE: Tekst og Kontaktinfo */}
              <div className="lg:pr-24 py-24 md:py-40 space-y-12">
                <div className="space-y-8">
                  <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Forespørsler / 問い合わせ</span>
                  <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                    SEND OSS EN <br/><span className="text-outline italic">MELDING</span>
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                    Har du spørsmål om trening, klubbdrift eller medlemskap? Vi ønsker å høre fra deg enten du er en nysgjerrig nybegynner eller en erfaren instruktør.
                  </p>
                </div>

                {/* Kontaktinformasjon - Kun e-post, ingen 'uppercase' */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-jjn-orange">
                    <Mail size={20} strokeWidth={2.5} />
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">E-post</h3>
                  </div>
                  <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed tracking-wider">
                    kontakt@jujitsunorge.no
                  </p>
                </div>
              </div>

              {/* HØYRE SIDE: Skjema-boksen */}
              <div className="relative border-l border-white/10 lg:pl-0 flex items-stretch">
                <div className="w-full h-full py-24 md:py-40 bg-transparent">
                  {/* Kontaktboksen (Ruten) */}
                  <div className="p-8 md:p-16 border border-white/10 relative overflow-hidden group bg-transparent">
                    {/* Selve skjemaet */}
                    <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">Fullt Navn</label>
                          <input 
                            type="text" 
                            className="w-full bg-transparent border border-white/10 p-5 text-white focus:border-jjn-orange outline-none transition-all font-medium text-sm tracking-wider" 
                            placeholder="Ditt navn" 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">E-post Adresse</label>
                          <input 
                            type="email" 
                            className="w-full bg-transparent border border-white/10 p-5 text-white focus:border-jjn-orange outline-none transition-all font-medium text-sm tracking-wider" 
                            placeholder="navn@epost.no" 
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">Emne</label>
                        <input 
                          type="text" 
                          className="w-full bg-transparent border border-white/10 p-5 text-white focus:border-jjn-orange outline-none transition-all font-medium text-sm tracking-wider" 
                          placeholder="Hva gjelder henvendelsen?" 
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">Din Melding</label>
                        <textarea 
                          rows={6} 
                          className="w-full bg-transparent border border-white/10 p-5 text-white focus:border-jjn-orange outline-none transition-all font-medium text-sm tracking-wider resize-none" 
                          placeholder="Skriv din melding her..."
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <Button type="submit" fullWidth className="py-6">
                          Send Melding
                        </Button>
                      </div>
                    </form>
                  </div>
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