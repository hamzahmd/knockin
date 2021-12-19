import React from 'react';
import CalenderMobile from '../../assets/images/calendar-mobile.png';

const HowWeDo = () => {
  return (
    <div className='container-xxl'>
      <div style={{ marginTop: '10rem' }}>
        <h2 className='text-center fs-1 mb-3'>
          How Does Knockin Help <br />
          Property Hunters?
        </h2>
        <p className='text-muted text-center mb-5'>
          Buyers sign up for an account and answer some questions about what
          they're looking for. Giving info on the desired <br />
          type of house, budget, ideal living location, and size, we then grant
          every buyer on our site access to thousands of properties <br />
          that fit their specific needs.
        </p>
      </div>

      <div className='row'>
        <div className='col-md-3 col-sm-6'>
          <div className='mb-5'>
            <div className='text-right d-flex justify-content-end'>
              <p className='fs-3 num-box text-white bg-info '>1</p>
            </div>
            <h4 style={{ textAlign: 'right' }}>Save properties of interest</h4>
            <p style={{ textAlign: 'right' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor.
            </p>
          </div>

          <div className='mb-5'>
            <div className='text-right d-flex justify-content-end'>
              <p className='fs-3 num-box text-white bg-info '>2</p>
            </div>
            <h4 style={{ textAlign: 'right' }}>Get in touch with Agent</h4>
            <p style={{ textAlign: 'right' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor.
            </p>
          </div>

          <div className='mb-5'>
            <div className='text-right d-flex justify-content-end'>
              <p className='fs-3 num-box text-white bg-info '>3</p>
            </div>
            <h4 style={{ textAlign: 'right' }}>Send Automatic mail to Owner</h4>
            <p style={{ textAlign: 'right' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div className='col-md-6 col-sm-6 '>
          <img
            src={CalenderMobile}
            alt='calender-mobile-knockin'
            width='100%'
            draggable='false'
          />
        </div>

        <div className='col-md-3 col-sm-6'>
          <div className='mb-5'>
            <div>
              <p className='fs-3 num-box text-white bg-info '>4</p>
            </div>
            <h4>Set Appointment with Agent</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor.
            </p>
          </div>

          <div className='mb-5'>
            <div>
              <p className='fs-3 num-box text-white bg-info '>5</p>
            </div>
            <h4>Get Reminders</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor.
            </p>
          </div>

          <div className='mb-5'>
            <div>
              <p className='fs-3 num-box text-white bg-info '>6</p>
            </div>
            <h4>Premium Membership</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
