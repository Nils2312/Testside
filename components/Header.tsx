import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { View, NavItem } from '../types';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<NavItem | null>(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<NavItem | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [hoveredMainItem, setHoveredMainItem] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<NavItem | null>(null);
  const [backgroundPersist, setBackgroundPersist] = useState(false);
  const navContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setActiveSubMenu(null);
        setActiveSubSubMenu(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (desktopDropdownOpen) {
      setBackgroundPersist(true);
    } else {
      const timer = setTimeout(() => {
        setBackgroundPersist(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [desktopDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
        setHoveredSubItem(null);
        setHoveredMainItem(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    setActiveSubMenu(null);
    setActiveSubSubMenu(null);
    setHoveredSubItem(null);
    setHoveredMainItem(null);
  };

  const showHeaderBg = isScrolled || mobileMenuOpen || backgroundPersist || desktopDropdownOpen;

  return (
    <header 
      ref={navContainerRef}
      className={`fixed top-0 left-0 right-0 flex items-center transition-all duration-300 ease-in-out border-b shadow-none ${
        showHeaderBg 
          ? 'bg-[#0c0c0c] border-white/5 h-16 md:h-20 z-[130]' 
          : 'bg-transparent border-transparent h-24 z-[100]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 flex justify-between items-center h-full relative z-[120]">
        <div 
          className="flex items-center cursor-pointer group h-full shrink-0" 
          onClick={() => navigate(View.HOME)}
        >
          <div className={`relative transition-all duration-300 group-hover:scale-105 flex items-center ${showHeaderBg ? 'h-8 md:h-9' : 'h-14 md:h-16'}`}>
            <img 
              src={LOGO_URL} 
              alt="Ju Jitsu Norge Logo" 
              className="h-full w-auto object-contain block" 
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 h-full">
          {NAV_ITEMS.map((item) => {
            const isActiveBranch = currentView === item.view || item.children?.some(child => {
                if (child.view === currentView) return true;
                return child.children?.some(sub => sub.view === currentView);
            });
            const hasChildren = !!item.children;
            const isHovered = hoveredMainItem === item.label;

            return (
              <div 
                key={item.label} 
                className="relative h-full flex items-center" 
                onMouseEnter={() => {
                  if (hasChildren) {
                    setDesktopDropdownOpen(true);
                    setHoveredMainItem(item.label);
                    setHoveredSubItem(null);
                  } else {
                    setDesktopDropdownOpen(false);
                    setHoveredMainItem(null);
                    setHoveredSubItem(null);
                  }
                }}
                onMouseLeave={() => {
                  if (hasChildren) {
                    setDesktopDropdownOpen(false);
                    setHoveredSubItem(null);
                    setHoveredMainItem(null);
                  }
                }}
              >
                <button
                  onClick={() => navigate(item.view)}
                  className={`
                    text-[11px] xl:text-xs font-black uppercase tracking-[0.25em] transition-all duration-300 py-2 flex items-center gap-2 outline-none
                    ${(isActiveBranch || isHovered) ? 'text-[#e34b17]' : 'text-gray-400 hover:text-[#e34b17]'}
                  `}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-500 ${isHovered ? 'rotate-180 text-[#e34b17]' : 'text-gray-600'}`} 
                    />
                  )}
                </button>

                {/* --- NIVÅ 1 (Desktop Undermeny) --- */}
                {hasChildren && (
                  <div 
                    className={`absolute top-full left-0 w-[280px] pt-0 transition-all duration-300 shadow-none ${
                      isHovered && desktopDropdownOpen 
                        ? 'opacity-100 translate-y-0 visible ease-out' 
                        : 'opacity-0 -translate-y-4 invisible ease-in pointer-events-none' 
                    }`}
                  >
                    <div className="bg-[#0c0c0c] py-6 mt-0 border-x border-b border-white/5 shadow-none">
                      {item.children?.map((child) => {
                        const isChildActive = currentView === child.view || child.children?.some(sub => sub.view === currentView);
                        const isChildHovered = hoveredSubItem?.label === child.label;
                        
                        return (
                          <div 
                            key={child.label}
                            className="relative"
                            onMouseEnter={() => child.children && setHoveredSubItem(child)}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <button
                              onClick={() => navigate(child.view)}
                              className={`w-full text-left px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex justify-between items-center outline-none ${
                                isChildActive || isChildHovered
                                  ? 'text-[#e34b17]' 
                                  : 'text-gray-500 hover:text-[#e34b17]'
                              }`}
                            >
                              {child.label}
                              {child.children && (
                                <ChevronRight 
                                  size={14} 
                                  className={`transition-all duration-300 ${isChildHovered ? 'opacity-100 translate-x-1 text-[#e34b17]' : 'opacity-20'}`} 
                                />
                              )}
                            </button>

                            {/* --- NIVÅ 2 (Desktop Sekundær Undermeny) --- */}
                            {child.children && (
                              <div 
                                className={`absolute top-0 left-[calc(100%-1px)] w-[260px] pl-0 transition-all duration-300 shadow-none ${
                                  isChildHovered
                                    ? 'opacity-100 translate-x-0 visible ease-out'
                                    : 'opacity-0 -translate-x-4 invisible ease-in pointer-events-none'
                                }`}
                              >
                                <div className="relative bg-[#0c0c0c] py-6 ml-0 border-t border-b border-r border-white/5 shadow-none overflow-hidden">
                                  {/* Justert høyde her: fra h-[60%] til h-[calc(60%+2px)] */}
                                  <div className="absolute left-0 bottom-0 w-px h-[calc(60%+2px)] bg-white/5" />
                                  
                                  {child.children.map((subChild) => (
                                    <button
                                      key={subChild.label}
                                      onClick={() => navigate(subChild.view)}
                                      className={`w-full text-left px-10 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 outline-none ${
                                        currentView === subChild.view 
                                          ? 'text-[#e34b17]' 
                                          : 'text-gray-500 hover:text-[#e34b17]'
                                      }`}
                                    >
                                      {subChild.label}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden relative w-12 h-12 flex items-center justify-center group focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-7 h-5 flex flex-col justify-between items-center overflow-visible">
            <span 
              className={`block h-[2px] w-full bg-white transition-all duration-400 ease-out origin-center absolute ${
                mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45 bg-[#e34b17]' : 'top-[20%]'
              }`}
            />
            <span 
              className={`block h-[2px] w-full bg-white transition-all duration-400 ease-out origin-center absolute ${
                mobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45 bg-[#e34b17]' : 'bottom-[20%]'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#0c0c0c] z-[110] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full relative z-10 overflow-hidden">
          {/* Scrollable Container */}
          <div className="flex-grow overflow-y-auto overflow-x-hidden pt-20 md:pt-32 pb-12 custom-scrollbar">
            <div className="relative min-h-full">
              
              {/* MOBIL NIVÅ 1 */}
              <div className={`transition-all duration-500 flex flex-col w-full ${activeSubMenu ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'}`}>
                <div className="border-t border-white/10">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = currentView === item.view || item.children?.some(c => c.view === currentView);
                    const hasChildren = !!item.children;
                    
                    return (
                      <div key={item.label} className="border-b border-white/10 relative">
                        <button
                          onClick={() => hasChildren ? setActiveSubMenu(item) : navigate(item.view)}
                          style={{ transitionDelay: mobileMenuOpen && !activeSubMenu ? `${index * 30 + 100}ms` : '0ms' }}
                          className={`w-full px-8 py-5 md:py-8 landscape:py-4 text-left transition-all duration-500 flex justify-between items-center group active:bg-white/[0.04] outline-none ${
                            mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                          }`}
                        >
                          <span className={`text-lg md:text-2xl font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                            isActive ? 'text-[#e34b17]' : 'text-white/40 group-hover:text-[#e34b17]'
                          }`}>
                            {item.label}
                          </span>
                          {hasChildren && (
                            <div className="flex items-center">
                              <ChevronRight size={22} className={`transition-colors duration-300 ${isActive ? 'text-[#e34b17]' : 'text-white/10 group-hover:text-[#e34b17]'}`} />
                            </div>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MOBIL NIVÅ 2 */}
              <div className={`absolute top-0 left-0 w-full transition-all duration-500 flex flex-col ${
                activeSubMenu && !activeSubSubMenu ? 'translate-x-0 opacity-100' : (activeSubSubMenu ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-full opacity-0 pointer-events-none')
              }`}>
                <div className="px-8 mb-4">
                  <button 
                    onClick={() => setActiveSubMenu(null)}
                    className="flex items-center gap-3 text-[#e34b17] font-black uppercase tracking-[0.3em] text-[10px] py-4 border border-white/10 px-6 inline-flex active:bg-white/5 outline-none"
                  >
                    <ChevronLeft size={14} /> Tilbake
                  </button>
                </div>
                
                <div className="border-t border-white/10">
                  {activeSubMenu && (
                     <div className="border-b border-white/10 bg-white/[0.02]">
                      <button
                        onClick={() => navigate(activeSubMenu.view)}
                        className="w-full px-8 py-5 md:py-8 landscape:py-4 text-left flex justify-between items-center group active:bg-white/[0.06] outline-none"
                      >
                        <span className="text-lg md:text-2xl font-black uppercase tracking-[0.2em] text-[#e34b17]">
                           Se alt i {activeSubMenu.label}
                        </span>
                      </button>
                    </div>
                  )}

                  {activeSubMenu?.children?.map((child, index) => {
                    const isActive = currentView === child.view || child.children?.some(c => c.view === currentView);
                    const hasChildren = !!child.children;
                    
                    return (
                      <div key={child.label} className="border-b border-white/10">
                        <button
                          onClick={() => hasChildren ? setActiveSubSubMenu(child) : navigate(child.view)}
                          className="w-full px-8 py-5 md:py-8 landscape:py-4 text-left flex justify-between items-center group active:bg-white/[0.04] outline-none"
                        >
                          <span className={`text-lg md:text-2xl font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                            isActive ? 'text-[#e34b17]' : 'text-white/40 group-hover:text-[#e34b17]'
                          }`}>
                            {child.label}
                          </span>
                          {hasChildren && <ChevronRight size={22} className={`transition-colors duration-300 ${isActive ? 'text-[#e34b17]' : 'text-white/10 group-hover:text-[#e34b17]'}`} />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MOBIL NIVÅ 3 */}
              <div className={`absolute top-0 left-0 w-full transition-all duration-500 flex flex-col ${activeSubSubMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                <div className="px-8 mb-4">
                  <button 
                    onClick={() => setActiveSubSubMenu(null)}
                    className="flex items-center gap-3 text-[#e34b17] font-black uppercase tracking-[0.3em] text-[10px] py-4 border border-white/10 px-6 inline-flex active:bg-white/5 outline-none"
                  >
                    <ChevronLeft size={14} /> Tilbake
                  </button>
                </div>

                <div className="border-t border-white/10">
                  {activeSubSubMenu && (
                     <div className="border-b border-white/10 bg-white/[0.02]">
                      <button
                        onClick={() => navigate(activeSubSubMenu.view)}
                        className="w-full px-8 py-5 md:py-8 landscape:py-4 text-left flex justify-between items-center group active:bg-white/[0.06] outline-none"
                      >
                        <span className="text-lg md:text-2xl font-black uppercase tracking-[0.2em] text-[#e34b17]">
                           Oversikt {activeSubSubMenu.label}
                        </span>
                      </button>
                    </div>
                  )}

                  {activeSubSubMenu?.children?.map((child, index) => {
                    const isActive = currentView === child.view;
                    return (
                      <div key={child.label} className="border-b border-white/10">
                        <button
                          onClick={() => navigate(child.view)}
                          className="w-full px-8 py-5 md:py-8 landscape:py-4 text-left flex justify-between items-center group active:bg-white/[0.04] outline-none"
                        >
                          <span className={`text-lg md:text-2xl font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                            isActive ? 'text-[#e34b17]' : 'text-white/40 group-hover:text-[#e34b17]'
                          }`}>
                            {child.label}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};