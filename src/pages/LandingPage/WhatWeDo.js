import React from 'react';
import VectorCity from '../../assets/images/vector-smart-object.png';
import VectorLines from '../../assets/svgs/CompositeLayer-about.svg';
import SearchIcon from '../../assets/images/search.png';
import LocationIcon from '../../assets/images/Location.png';
import NotesIcon from '../../assets/images/Notes.png';
import ShareIcon from '../../assets/images/Share.png';
import CalenderIcon from '../../assets/images/Calender.png';
import MessageIcon from '../../assets/images/Message.png';

const WhatWeDo = () => {
  return (
    <div className='container-xxl'>
      <div className='position-relative mx-2'>
        <div
          className='position-absolute'
          style={{ zIndex: '-5', bottom: '-3rem', left: '-25%' }}
        >
          <img src={VectorCity} alt='vector-city' width='120%' />
        </div>
        <div
          className='position-absolute'
          style={{ top: '-20%', left: '-30%', zIndex: '-4' }}
        >
          <img src={VectorLines} alt='vector-lines' width='100%' />
        </div>
        <h2 className='text-center fs-1 mb-3'>What Do We Do?</h2>
        <p className='text-muted text-center mb-5'>
          Knockin takes the usual property searching service to the next level,
          offering not only a directory of properties for sale, <br />
          but an all-in-one tool to organize every property search experience,
          and process.
        </p>

        <div className='row g-4 my-5'>
          <div className='col-sm-6 col-md-4 '>
            <div
              className='card p-3 bg-white card-border'
              style={{ height: '100%' }}
            >
              <div className='row'>
                <div className='col-3'>
                  <img src={SearchIcon} alt='search' width='100%' />
                </div>
                <div className='col-9'>
                  <h3>Find listed properties</h3>
                  <p className='text-muted'>
                    Listing are updated continuously so you won't miss out on
                    homes that just hit the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div className='card p-3 bg-white card-border'>
              <div className='row'>
                <div className='col-3'>
                  <img src={CalenderIcon} alt='search' width='100%' />
                </div>
                <div className='col-9'>
                  <h3> Manage Appointments</h3>
                  <p className='text-muted'>
                    Our verified Partner Agents are local experts who earn an
                    average of 4.8/5 stars from buyers and sellers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div
              className='card p-3 bg-white card-border'
              style={{ height: '100%' }}
            >
              <div className='row'>
                <div className='col-3'>
                  <img src={MessageIcon} alt='search' width='100%' />
                </div>
                <div className='col-9'>
                  <h3> Track messages from agents</h3>
                  <p className='text-muted'>
                    We'll connect you with the partner to organise your contract
                    and move-in day!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div className='card p-3 bg-white card-border'>
              <div className='row'>
                <div className='col-3'>
                  <img src={ShareIcon} alt='search' width='100%' />
                </div>
                <div className='col-9'>
                  <h3> Share with friends and family</h3>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div
              className='card p-3 bg-white card-border'
              style={{ height: '100%' }}
            >
              <div className='row'>
                <div className='col-3'>
                  <img src={NotesIcon} alt='search' width='100%' />
                </div>
                <div className='col-9'>
                  <h3> Add Notes</h3>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div className='card p-3 bg-white card-border'>
              <div className='row'>
                <div className='col-3'>
                  <img src={LocationIcon} alt='search' width='100%' />
                </div>
                <div className='col-9'>
                  <h3> Navigate to your appointment</h3>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
