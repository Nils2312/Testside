import React, { useState, useLayoutEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { View } from './types';
import { HomeView } from './views/HomeView';
import { CurriculumGeneralView } from './views/CurriculumGeneralView';
import { CurriculumAdultView } from './views/CurriculumAdultView';
import { CurriculumKidsView } from './views/CurriculumKidsView';
import { Curriculum2025View } from './views/Curriculum2025View';
import { Curriculum5KyuView } from './views/Curriculum5KyuView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { AboutJuJitsuView } from './views/AboutJuJitsuView';
import { WhatIsJuJitsuView } from './views/WhatIsJuJitsuView';
import { MeaningOfJuJitsuView } from './views/MeaningOfJuJitsuView';
import { HistoryNorwayView } from './views/HistoryNorwayView';
import { ClubsView } from './views/ClubsView';
import { EventsView } from './views/EventsView';
import { PageTransition } from './components/PageTransition';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  // Instant scroll to top on view change before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case View.ABOUT:
        return <AboutView />;
      case View.ABOUT_JUJITSU:
        return <AboutJuJitsuView />;
      case View.WHAT_IS_JUJITSU:
        return <WhatIsJuJitsuView />;
      case View.MEANING_OF_JUJITSU:
        return <MeaningOfJuJitsuView />;
      case View.HISTORY_NORWAY:
        return <HistoryNorwayView />;
      case View.CLUBS:
        return <ClubsView />;
      case View.EVENTS:
        return <EventsView />;
      case View.CURRICULUM_GENERAL:
        return <CurriculumGeneralView />;
      case View.CURRICULUM_ADULT:
        return <CurriculumAdultView onNavigate={setCurrentView} />;
      case View.CURRICULUM_KIDS:
        return <CurriculumKidsView />;
      case View.CURRICULUM_2025:
        return <Curriculum2025View />;
      case View.CURRICULUM_5KYU:
        return <Curriculum5KyuView />;
      case View.CONTACT:
        return <ContactView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-gray-200 font-sans selection:bg-[#e34b17] selection:text-white flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow pt-0 flex flex-col">
        <PageTransition key={currentView}>
            {renderView()}
        </PageTransition>
      </main>

      <Footer onNavigate={setCurrentView} currentView={currentView} />
    </div>
  );
};

export default App;