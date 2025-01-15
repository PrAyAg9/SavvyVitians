import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import QuickLinks from '../components/QuickLinks';
import Updates from '../components/Updates';
import StudyMaterials from '../components/StudyMaterials';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <QuickLinks />
      <Updates />
      <StudyMaterials />
    </>
  );
}

export default Home;