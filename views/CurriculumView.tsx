import React, { useState } from 'react';
import { Section } from '../components/Section';
import { CURRICULUM_KIDS, CURRICULUM_ADULTS, JJN_ORANGE } from '../constants';
import { Download, User, Users } from 'lucide-react';

export const CurriculumView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'barn' | 'voksen'>('barn');

  const handlePdfClick = (title: string) => {
      // In a real app, this would link to the PDF file
      alert(`Laster ned PDF for: ${title} (Kommer snart)`);
  };

  return (
    <div className="pt-20">
      <Section darker className="min-h-screen">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 tracking-tight">
            Pensum
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Velg kategori for å se gjeldende pensumkrav. Alle dokumenter er tilgjengelige som PDF.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-16">
              <div className="bg-[#1a1a1a] p-1 rounded-sm flex border border-[#333]">
                  <button
                    onClick={() => setActiveTab('barn')}
                    className={`px-8 py-3 flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 text-sm md:text-base ${
                        activeTab === 'barn' 
                        ? 'bg-[#e34b17] text-white shadow-lg' 
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                      <User size={18} />
                      Barn
                  </button>
                  <button
                    onClick={() => setActiveTab('voksen')}
                    className={`px-8 py-3 flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 text-sm md:text-base ${
                        activeTab === 'voksen' 
                        ? 'bg-[#e34b17] text-white shadow-lg' 
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                      <Users size={18} />
                      Voksne
                  </button>
              </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
            {activeTab === 'barn' ? (
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl text-white font-bold uppercase mb-6 border-b border-[#333] pb-4">
                        Barnepensum
                    </h3>
                    {CURRICULUM_KIDS.map((item, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handlePdfClick(item.label)}
                            className="w-full bg-[#121212] hover:bg-[#1a1a1a] border border-[#1a1a1a] hover:border-[#e34b17] p-6 flex items-center justify-between group transition-all duration-200"
                        >
                            <span className="text-base md:text-lg font-medium text-gray-200 group-hover:text-white uppercase tracking-wide text-left">
                                {item.label}
                            </span>
                            <div className="bg-[#0c0c0c] p-3 rounded-full text-gray-500 group-hover:text-[#e34b17] transition-colors">
                                <Download size={20} />
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                     <h3 className="text-xl md:text-2xl text-white font-bold uppercase mb-6 border-b border-[#333] pb-4">
                        Voksenpensum
                    </h3>
                    {CURRICULUM_ADULTS.map((item, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handlePdfClick(item.label)}
                            className="w-full bg-[#121212] hover:bg-[#1a1a1a] border border-[#1a1a1a] hover:border-[#e34b17] p-6 flex items-center justify-between group transition-all duration-200"
                        >
                            <div className="text-left">
                                <span className="block text-base md:text-lg font-medium text-gray-200 group-hover:text-white uppercase tracking-wide">
                                    {item.label}
                                </span>
                                {item.subLabel && (
                                    <span className="text-xs md:text-sm text-[#e34b17] font-bold mt-1 block">
                                        {item.subLabel}
                                    </span>
                                )}
                            </div>
                            <div className="bg-[#0c0c0c] p-3 rounded-full text-gray-500 group-hover:text-[#e34b17] transition-colors">
                                <Download size={20} />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
      </Section>
    </div>
  );
};