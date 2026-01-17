
import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { getTechniqueDetails } from '../services/geminiService';
import { Search, Info, Loader2, Zap } from 'lucide-react';

export const TechniqueExplorerView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const details = await getTechniqueDetails(query);
    setResult(details);
    setLoading(false);
  };

  const suggestions = ["O-Goshi", "Seoi-Nage", "Irimi-Nage", "Kote-Gaeshi", "Hadaka-Jime"];

  return (
    <div className="bg-[#0c0c0c] pt-24 min-h-screen">
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <span className="text-jjn-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Kunnskapsbasen / 知識</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase text-white leading-[0.85] tracking-tighter mb-12">
            TEKNIKK-<br/><span className="text-outline">UTFORSKER</span>
          </h1>

          <div className="bg-[#121212] p-8 md:p-12 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={120} />
            </div>
            
            <form onSubmit={handleSearch} className="relative z-10">
              <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed max-w-xl">
                Søk på en teknikk for å få en AI-generert forklaring av dens prinsipper og anvendelse.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="F.eks. Kote Gaeshi..."
                  className="flex-grow bg-[#0c0c0c] border border-white/10 p-5 text-white focus:border-jjn-orange outline-none transition-all uppercase font-bold tracking-widest"
                />
                <Button type="submit" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
                  <span>Utforsk</span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest py-2">Forslag:</span>
                {suggestions.map(s => (
                  <button 
                    key={s} 
                    onClick={() => setQuery(s)}
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-jjn-orange transition-colors border border-white/5 px-3 py-1 hover:border-jjn-orange/30"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </form>
          </div>

          <div className="mt-12">
            {result && !loading && (
              <div className="bg-jjn-orange/5 border-l-4 border-jjn-orange p-8 md:p-12 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-start gap-6">
                  <Info className="text-jjn-orange shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-black uppercase tracking-widest mb-4">{query}</h3>
                    <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed italic">
                      {result}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {loading && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-jjn-orange border-t-transparent rounded-full animate-spin"></div>
                <span className="text-jjn-orange font-black uppercase tracking-[0.3em] text-[10px]">Konsulterer arkivene...</span>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};
