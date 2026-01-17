import React, { useEffect, useState } from 'react';
import { Section } from '../components/Section';
import { getDailyMotivation } from '../services/geminiService';
import { Quote, RefreshCcw } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615117970081-6355c201df32?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518619491930-37f2756fb864?q=80&w=1932&auto=format&fit=crop"
];

export const InspirationView: React.FC = () => {
  const [quote, setQuote] = useState<string>("Laster dagens visdom...");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    const newQuote = await getDailyMotivation();
    setQuote(newQuote);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="pt-20">
      {/* AI Quote Hero */}
      <Section className="bg-[#080808] border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center px-4 py-12">
           <Quote className="w-12 h-12 text-[#e34b17] mx-auto mb-6 opacity-50" />
           <div className="min-h-[120px] flex items-center justify-center">
             {loading ? (
                 <div className="text-[#e34b17] animate-pulse">Kaller på åndene...</div>
             ) : (
                 <h2 className="text-2xl md:text-4xl font-serif italic text-gray-200 leading-relaxed">
                    "{quote}"
                 </h2>
             )}
           </div>
           <button 
             onClick={fetchQuote}
             className="mt-8 text-xs uppercase tracking-widest text-gray-500 hover:text-[#e34b17] transition-colors flex items-center justify-center gap-2 mx-auto"
           >
             <RefreshCcw size={14} className={loading ? "animate-spin" : ""} />
             Nytt sitat
           </button>
        </div>
      </Section>

      {/* Rough Masonry Gallery */}
      <Section>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {IMAGES.map((src, idx) => (
            <div key={idx} className="break-inside-avoid group relative overflow-hidden border border-[#1a1a1a]">
               <img 
                 src={src} 
                 alt={`Inspiration ${idx}`} 
                 className="w-full h-auto filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-[#e34b17] opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500" />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <span className="text-white font-bold uppercase text-xs tracking-widest border-l-2 border-[#e34b17] pl-2">Ju Jitsu Norge</span>
               </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
