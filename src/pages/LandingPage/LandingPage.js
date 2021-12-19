import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CustomerFeedback from './CustomerFeedback';
import GetDetails from './GetDetails';
import HeroSection from './HeroSection';
import HowWeDo from './HowWeDo';
import VideoSection from './VideoSection';
import WhatWeDo from './WhatWeDo';

const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
      <Header btnName='Agent Portal' onClick='agent' />
      <main>
        <HeroSection />
        <VideoSection />
        <WhatWeDo />
        <HowWeDo />
        <CustomerFeedback />
        <GetDetails />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
