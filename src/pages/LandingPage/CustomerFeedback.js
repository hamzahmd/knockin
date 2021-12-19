import React from 'react';
import { useNavigate } from 'react-router-dom';
import HouseEarth from '../../assets/images/house-earth.png';
import ArrowLeft from '../../assets/images/arrow-left.png';
import ArrowRight from '../../assets/images/arrow-right.png';
import Star from '../../assets/images/star.png';
import DP1 from '../../assets/images/DP1.png';
import DP2 from '../../assets/images/DP2.png';

const CustomerFeedback = () => {
  const navigate = useNavigate();
  return (
    <div className='container-xxl'>
      <div className='agent-box'>
        <img
          src={HouseEarth}
          alt='house-earth'
          className='position-absolute bottom-0 end-0 house-img'
          width='40%'
        />
        <h2 className='text-white fs-1'>Are You An Agent?</h2>
        <p className='text-muted text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='d-flex mt-5'>
          <button
            onClick={() => {
              navigate('/agent');
            }}
            className='bg-info py-3 px-4'
            style={{ borderRadius: '0.5rem' }}
          >
            <h5 className='text-white m-0'>Agent Portal</h5>
          </button>
        </div>
      </div>

      <div className='mb-5'>
        <h3 className='fs-1 text-center my-3'>Customer Loves Us</h3>
        <p className='text-muted text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{' '}
          Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
        </p>
      </div>

      <div className='row gy-3 mb-5'>
        <div className='col-sm-6'>
          <div className='card p-5' style={{ borderRadius: '10px' }}>
            <div className='d-flex justify-content-between align-content-center mb-4'>
              <div className='d-flex align-content-center'>
                <img src={DP1} alt='dp1' className='dp-img' />
                <div className='mx-3 d-flex-col justify-content-center'>
                  <h4 className='m-0'>Jessica Doe</h4>
                  <p className='text-muted m-0'>CEO, Knockin</p>
                </div>
              </div>
              <div>
                <div className='star-rate'>
                  <div>
                    <img src={Star} alt='star' />
                  </div>
                  <h5 className='text-warning m-0'>4.3</h5>
                </div>
              </div>
            </div>
            <p className='text-muted m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              viverra nibh cras pulvinar mattis nunc sed blandit. Neque laoreet
              suspendisse interdum consectetur libero. Ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className='col-sm-6'>
          <div className='card p-5' style={{ borderRadius: '10px' }}>
            <div className='d-flex justify-content-between align-content-center mb-4'>
              <div className='d-flex align-content-center'>
                <img src={DP2} alt='dp1' className='dp-img' />
                <div className='mx-3 d-flex-col justify-content-center'>
                  <h4 className='m-0'>Michael Bieber</h4>
                  <p className='text-muted m-0'>COO, Knockin</p>
                </div>
              </div>
              <div>
                <div className='star-rate'>
                  <div>
                    <img src={Star} alt='star' />
                  </div>
                  <h5 className='text-warning m-0'>4.3</h5>
                </div>
              </div>
            </div>
            <p className='text-muted m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              viverra nibh cras pulvinar mattis nunc sed blandit. Neque laoreet
              suspendisse interdum consectetur libero. Ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <div className='text-center mx-2 mb-5'>
        <button
          className='p-3 bg-white border'
          style={{ borderRadius: '10px', width: '70px' }}
        >
          <img src={ArrowLeft} alt='arrow-left' />
        </button>
        <button
          className='p-3 bg-white border mx-3'
          style={{ borderRadius: '10px', width: '70px' }}
        >
          <img src={ArrowRight} alt='arrow-right' />
        </button>
      </div>
    </div>
  );
};

export default CustomerFeedback;
