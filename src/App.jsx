import React, { useState } from 'react';
import NavigationBar from './components/layout/NavigationBar';
import GlobalFooter from './components/layout/GlobalFooter';
import ProjectStructureModal from './components/modals/ProjectStructureModal';

import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';
import CommercialPage from './pages/CommercialPage';
import ResidentialPage from './pages/ResidentialPage';
import ApartmentDetailPage from './pages/ApartmentDetailPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

import { useScrollObserver } from './hooks/useScrollObserver';
import { POPULAR_RESIDENCES } from './data/propertiesData';
import { generateAndDownloadZip } from './utils/zipExporter';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(POPULAR_RESIDENCES[0]);
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);
  const [downloadState, setDownloadState] = useState({ loading: false, success: false, message: '' });

  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
    setCurrentPage('apartment-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamically re-bind IntersectionObserver to newly mounted DOM elements on route changes
  useScrollObserver(currentPage);

  return (
    <div className="min-h-screen bg-[#090a0f] text-white font-sans-clean selection:bg-[#c5a880] selection:text-zinc-950 flex flex-col overflow-x-hidden">
      {/* Persistent Navigation Bar */}
      <NavigationBar 
        currentPage={currentPage} 
        setCurrentPage={handleNavigate} 
        onOpenZipModal={() => setIsZipModalOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            setCurrentPage={handleNavigate} 
            onSelectProperty={handleSelectProperty} 
          />
        )}
        {currentPage === 'vision' && <VisionPage setCurrentPage={handleNavigate} />}
        {currentPage === 'commercial' && <CommercialPage setCurrentPage={handleNavigate} />}
        {currentPage === 'residential' && <ResidentialPage onSelectProperty={handleSelectProperty} />}
        {currentPage === 'apartment-detail' && (
          <ApartmentDetailPage 
            property={selectedProperty}
            onBack={() => {
              handleNavigate('residential');
            }}
            onSelectProperty={handleSelectProperty}
            onScheduleVisit={() => {
              handleNavigate('contact');
            }}
          />
        )}
        {currentPage === 'pricing' && <PricingPage setCurrentPage={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <GlobalFooter 
        setCurrentPage={handleNavigate} 
        onOpenZipModal={() => setIsZipModalOpen(true)}
      />

      {/* Project Structure & ZIP Exporter Modal */}
      <ProjectStructureModal
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
        onDownloadZip={() => generateAndDownloadZip(setDownloadState)}
        downloadState={downloadState}
      />
    </div>
  );
}