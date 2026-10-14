import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularResidencesSlider from '../components/home/PopularResidencesSlider';
import EditorialSection from '../components/home/EditorialSection';

export const HomePage = ({ setCurrentPage, onSelectProperty }) => {
  return (
    <div>
      <HeroSection setCurrentPage={setCurrentPage} />
      <PopularResidencesSlider 
        setCurrentPage={setCurrentPage} 
        onSelectProperty={onSelectProperty} 
      />
      <EditorialSection setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default HomePage;
