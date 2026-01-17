import React from 'react';
import { View } from '../types';
import { LOGO_URL } from '../constants';
import { Instagram, Facebook, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: View) => void;
  currentView?: View;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  return (
    <footer className="bg-[#0c0c0c] relative overflow-hidden border-t border-white/5">
      
      {/* --- VERTIKALE GUIDER --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-24 flex justify-between">
          <div className="w-px h-full bg-white"></div>
          <div className="w-px h-full bg-white hidden lg:block"></div>
          <div className="w-px h-full bg-white"></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* --- TOPP-GRID: LOGO & KONTAKT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-white/5">
          
          {/* Venstre: Merkevare */}
          <div className="py-20 md:py-28 px-6 md:px-12 lg:px-24 lg:border-r border-white/5 flex flex-col justify-center">
            <div className="md:pl-10">
              <div 
                className="cursor-pointer group inline-block mb-10" 
                onClick={() => onNavigate(View.HOME)}
              >
                <img src={LOGO_URL} alt="Ju Jitsu Norge" className="h-14 md:h-18 w-auto block group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Vi forvalter tradisjonell kampkunst gjennom moderne metodikk. En nasjonal allianse for utvikling av ju jitsu i Norge.
              </p>
            </div>
          </div>

          {/* Høyre: Kontakt-CTA */}
          <div className="relative group flex">
            <a 
              href="mailto:kontakt@jujitsunorge.no"
              className="flex-grow flex flex-col justify-center py-20 md:py-28 px-6 md:px-12 lg:px-24 transition-all duration-500 bg-transparent relative"
            >
              <div className="flex flex-col md:pl-10">
                <span className="text-jjn-orange font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Forepørsler / 連絡</span>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-jjn-orange transition-colors">
                  START EN <br/><span className="text-outline">SAMTALE</span>
                </h2>
                
                <div className="mt-8 flex items-center gap-3 text-gray-500 group-hover:text-white transition-colors">
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest">kontakt@jujitsunorge.no</span>
                  <ChevronRight size={16} strokeWidth={3} className="text-gray-600 group-hover:text-jjn-orange group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* --- NAVIGASJON GRID --- */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-white/5">
            
            {/* Utforsk */}
            <div className="py-16 md:pl-10 md:pr-10 lg:border-r border-white/5">
              <h3 className="text-white/20 font-black uppercase tracking-[0.4em] text-[9px] mb-10">Utforsk</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Hjem', view: View.HOME },
                  { label: 'Om oss', view: View.ABOUT },
                  { label: 'Finn din klubb', view: View.CLUBS },
                  { label: 'Arrangementer', view: View.EVENTS },
                  { label: 'Kontakt oss', view: View.CONTACT }
                ].map((item) => (
                  <li key={item.label}>
                    <button 
                      onClick={() => onNavigate(item.view)}
                      className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all text-left outline-none ${
                        currentView === item.view ? 'text-jjn-orange' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pensum */}
            <div className="py-16 md:pl-10 md:pr-10 lg:border-r border-white/5">
              <h3 className="text-white/20 font-black uppercase tracking-[0.4em] text-[9px] mb-10">Pensum</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Generelt om systemet', view: View.CURRICULUM_GENERAL },
                  { label: 'Voksenpensum', view: View.CURRICULUM_ADULT },
                  { label: 'Barnepensum', view: View.CURRICULUM_KIDS },
                  { label: 'Graderingssystem 2025', view: View.CURRICULUM_2025 }
                ].map((item) => (
                  <li key={item.label}>
                    <button 
                      onClick={() => onNavigate(item.view)}
                      className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all text-left outline-none ${
                        currentView === item.view ? 'text-jjn-orange' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Om Ju Jitsu */}
            <div className="py-16 md:pl-10 md:pr-10 lg:border-r border-white/5">
              <h3 className="text-white/20 font-black uppercase tracking-[0.4em] text-[9px] mb-10">Om Ju Jitsu</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Hva er Ju Jitsu?', view: View.WHAT_IS_JUJITSU },
                  { label: 'Betydningen av navnet', view: View.MEANING_OF_JUJITSU },
                  { label: 'Ju Jitsu i Norge', view: View.HISTORY_NORWAY }
                ].map((item) => (
                  <li key={item.label}>
                    <button 
                      onClick={() => onNavigate(item.view)}
                      className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all text-left outline-none ${
                        currentView === item.view ? 'text-jjn-orange' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sosiale Medier */}
            <div className="py-16 md:pl-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white/20 font-black uppercase tracking-[0.4em] text-[9px] mb-8">Følg oss</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/jujitsunorge/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/5 flex items-center justify-center text-gray-500 hover:border-jjn-orange hover:text-jjn-orange transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center text-gray-500 hover:border-jjn-orange hover:text-jjn-orange transition-all">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
              <div className="pt-12">
                <span className="text-white/10 font-black uppercase text-[8px] tracking-[0.4em] block mb-1">Organisasjonsnr</span>
                <p className="text-gray-500 font-bold text-[10px] tracking-widest">996 859 762</p>
              </div>
            </div>
          </div>

          {/* --- BUNN-BAR: LEGAL & CREDITS --- */}
          <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start md:pl-10">
              <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.5em]">
                &copy; 2026 JU JITSU NORGE. ALL RIGHTS RESERVED.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
              <div className="flex gap-6">
                <button className="text-[9px] text-white/10 hover:text-jjn-orange font-black uppercase tracking-[0.3em] transition-colors">POLICIES</button>
                <button className="text-[9px] text-white/10 hover:text-jjn-orange font-black uppercase tracking-[0.3em] transition-colors">VILKÅR</button>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <span className="text-[8px] text-white/10 font-black uppercase tracking-[0.3em] mb-1">DESIGN & UTVIKLING</span>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest transition-colors hover:text-jjn-orange cursor-default">NILS KRISTIAN BJØRO</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};