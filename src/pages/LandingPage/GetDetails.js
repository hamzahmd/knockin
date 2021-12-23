import React, { useState } from 'react';
import HalfScreens from '../../assets/images/half-mobile-screens.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const GetDetails = () => {
  const [value, setValue] = useState();
  return (
    <div className='container-xxl '>
      <div
        className=' p-5 position-relative'
        style={{
          background: '#28B8EA',
          marginTop: '10rem',
          borderRadius: '18px',
          marginBottom: '6rem',
        }}
      >
        <img
          src={HalfScreens}
          alt='half-mobile-knockin'
          style={{
            position: 'absolute',
            zIndex: '1',
            bottom: '-32%',
            right: '0',
          }}
          className='img-half-mobile'
          width='45%'
        />
        <h2 className='fs-1 text-white'>Get It Now For Free</h2>
        <p className=' text-light' style={{ opacity: '0.8 ' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form className='phone-form'>
          <PhoneInput
            country={'us'}
            value={value}
            onChange={setValue}
            inputStyle={{
              width: '100%',
              height: '4.2rem',
              borderRadius: '1rem',
              fontSize: '1.2rem',
            }}
            containerStyle={{ borderRadius: '1rem' }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className='get-btn-num'
          >
            Get the Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetDetails;
