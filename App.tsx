
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreatMap from './components/ThreatMap';
import OperationsHub from './components/OperationsHub';
import StoriesSection from './components/StoriesSection';
import CommunitySection from './components/CommunitySection';
import BlogSection from './components/BlogSection';
import InfoSection from './components/InfoSection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import { UserRole, Article, Story } from './types';
import { INITIAL_ARTICLES, INITIAL_STORIES } from './constants';

export type AppView = 'home' | 'experts' | 'stories' | 'about' | 'contact' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  
  // المحتوى ثابت للعرض فقط (يتم جلبه من الثوابت الجاهزة للربط مستقبلاً)
  const articles = INITIAL_ARTICLES;
  const stories = INITIAL_STORIES;

  useEffect(() => {
    document.documentElement.classList.add('dark');
    // التمرير لأعلى الصفحة عند تغيير القسم
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'experts':
        return <CommunitySection userRole="guest" />;
      case 'about':
      case 'contact':
      case 'privacy':
        return <InfoSection type={currentView} />;
      default:
        return (
          <>
            <Hero onNavigate={(view) => setCurrentView(view)} />
            <OperationsHub />
            <ThreatMap />
            <BlogSection userRole="guest" articles={articles} />
            <StoriesSection stories={stories} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      <InteractiveBackground />
      
      <div className="relative z-10">
        <Navbar 
          onNavigate={(view) => setCurrentView(view)}
          currentView={currentView}
        />
        
        <main className="min-h-[70vh]">
          {renderView()}
        </main>
        
        <AIChat />
        <Footer onNavigate={(view) => setCurrentView(view)} />
      </div>
    </div>
  );
};

export default App;
