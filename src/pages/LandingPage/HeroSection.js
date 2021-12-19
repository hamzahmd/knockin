import React from 'react';
import HeroMobile from '../../assets/images/hero-mobile-min.png';
import GooglePlay from '../../assets/images/google-play-btn.png';
import ApplePlay from '../../assets/images/apple-play-btn.png';
import BackLineNav from '../../assets/svgs/CompositeLayer.svg';

const HeroSection = () => {
  return (
    <div className='container-xxl '>
      <div className='row'>
        <div className='col-sm-7 col-md-5 d-flex-col justify-center position-relative '>
          <div
            style={{ top: '-20%', left: '-30%', zIndex: '-5' }}
            className='position-absolute '
          >
            <img src={BackLineNav} alt='back-lines-hero' width='100%' />
          </div>

          <h1 className='display-3 mb-4 mt-5'>
            Land Your{' '}
            <span className='bg-info text-white px-2 py-1'>Dream</span> Home,
            Stress Free
          </h1>
          <p className='text-muted lh-lg mb-4' style={{ width: '80%' }}>
            As every buyer's assistant, Knockin streamlines the entire property
            hunting process to help land the dream home. All in one convenient
            app.
          </p>
          <div
            className='d-flex justify-space-between my-5'
            style={{ width: '80%' }}
          >
            <button className='btn p-0 btn-app'>
              <img
                src={ApplePlay}
                alt='apple-play-knockin'
                draggable='false'
                width='100%'
              />
            </button>
            <button className='btn p-0 mx-3 btn-app'>
              <img
                src={GooglePlay}
                alt='google-play-knockin'
                draggable='false'
                width='100%'
              />
            </button>
          </div>
        </div>
        <div className='col-sm-5 col-md-7'>
          <img
            src={HeroMobile}
            alt='hero-mobile'
            draggable='false'
            width='100%'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
