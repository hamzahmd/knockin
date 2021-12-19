import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ComparisonTable from '../../components/ComparisonTable';

// Static Assets
import AgentHero from '../../assets/AgentPage/agent-hero-min.png';
import CheckCustomer from '../../assets/AgentPage/check-customer-min.png';
import DirectMsg from '../../assets/AgentPage/direct-message-min.png';
import GetInTouch from '../../assets/AgentPage/get-in-touch-min.png';
import bars from '../../assets/AgentPage/bars.svg';
import bell from '../../assets/AgentPage/bell.svg';
import couple from '../../assets/AgentPage/couple.svg';
import target from '../../assets/AgentPage/target.svg';
import people from '../../assets/AgentPage/people.svg';
import group from '../../assets/AgentPage/group.svg';
import GraphLeads from '../../assets/AgentPage/graph-leads.png';
import TrustedPartners from '../../assets/AgentPage/trusted-partners.png';

const AgentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className='overflow-hidden'>
      <Header btnName='login' onClick='signup' />
      <main>
        <div className='container-xxl' id='hero'>
          {/* Hero Section */}
          <div className='row my-5'>
            <div className='col-lg-5 col-md-6 col-sm-7'>
              <h1 className='display-3 mb-4 mt-5'>Build The Customer Pool</h1>
              <p className='text-muted lh-lg'>
                Build the customer pool. Develop a registry of people looking to
                buy a home, including all of their specifications, to build new
                leads and push them out to clients.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signup');
                }}
                className='btn btn-info  my-4'
                style={{ borderRadius: '1rem', width: '200px', height: '70px' }}
              >
                <div className='h5 text-white m-0'>Sign up</div>
              </button>
            </div>
            <div className='col-lg-7 col-md-6 col-sm-5 p-0'>
              <img
                src={AgentHero}
                alt='agent-hero'
                width='100%'
                draggable='false'
              />
            </div>
          </div>
          {/* Trusted Partners */}
          <div className='row ' style={{ margin: '6rem 0' }}>
            <div className='col-md-3 my-3'>
              <h3>
                Our Trusted <br /> Partner
              </h3>
            </div>
            <div className='col-md-9 my-3'>
              <img
                src={TrustedPartners}
                alt='trusted-partners-knockin'
                width='100%'
                draggable='false'
              />
            </div>
          </div>
          {/* Our Features */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 className='text-center fs-1 mb-3'>Our Features</h2>
            <p className='text-muted lh-lg text-center my-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididuntet dolore magna aliqua Ut enim ad minim veniam
            </p>
          </div>
          <div className='row gx-5' style={{ marginBottom: '8rem' }}>
            <div className='col-md-4'>
              <div className='row card-box'>
                <div className='col-3 p-0'>
                  <div className='feature-icon'>
                    <img src={people} alt='people' draggable='false' />
                  </div>
                </div>
                <div className=' col-9'>
                  <h4 className='my-3'>Build Customer Base</h4>
                  <p className='lh-md ' style={{ color: '#565C6F' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='row card-box'>
                <div className='col-3 p-0'>
                  <div className='feature-icon'>
                    <img src={target} alt='target' draggable='false' />
                  </div>
                </div>
                <div className=' col-9'>
                  <h4 className='my-3'>Target To New Potential Buyer</h4>
                  <p className='lh-md ' style={{ color: '#565C6F' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='row card-box'>
                <div className='col-3 p-0'>
                  <div className='feature-icon'>
                    <img src={group} alt='people' draggable='false' />
                  </div>
                </div>
                <div className=' col-9'>
                  <h4 className='my-3'>Organize Viewing</h4>
                  <p className='lh-md ' style={{ color: '#565C6F' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message */}
          <div
            className='row align-items-center'
            style={{ marginBottom: '6rem' }}
          >
            <div className='col-lg-7 col-md-6'>
              <img
                src={DirectMsg}
                alt='direct-message-knockin'
                draggable='false'
                width='100%'
              />
            </div>
            <div className='col-lg-5 col-md-6'>
              <h2 className='fs-2 mb-4'>Direct Message From User</h2>
              <p className='lh-lg ' style={{ color: '#565C6F' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate esse cillum dolore eu fugiat nulla
                pariatur
              </p>
            </div>
          </div>
          {/* Check Customer */}
          <div
            className='row align-items-center'
            style={{ marginBottom: '6rem' }}
          >
            <div className='col-lg-5 col-md-6'>
              <h2 className='fs-2 mb-4'>Check Customer Availability</h2>
              <p className='lh-lg ' style={{ color: '#565C6F' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate esse cillum dolore eu fugiat nulla
                pariatur
              </p>
            </div>
            <div className='col-lg-7 col-md-6'>
              <img
                src={CheckCustomer}
                alt='check-customer-availability-knockin'
                draggable='false'
                width='100%'
              />
            </div>
          </div>
          {/* Get in Touch */}
          <div
            className='row align-items-center'
            style={{ marginBottom: '6rem' }}
          >
            <div className='col-lg-7 col-md-6'>
              <img
                src={GetInTouch}
                alt='direct-message-knockin'
                draggable='false'
                width='100%'
              />
            </div>
            <div className='col-lg-5 col-md-6'>
              <h2 className='fs-2 mb-4'>Get In Touch With Customer</h2>
              <p className='lh-lg ' style={{ color: '#565C6F' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate esse cillum dolore eu fugiat nulla
                pariatur
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose us */}
        <div style={{ background: '#1D1F33', marginBottom: '7rem' }}>
          <div className='container-xxl'>
            <div className='row justify-content-between py-5 '>
              <div className='col-lg-5 col-md-6 my-4'>
                <h2 className='fs-1 text-white'>Why Choose Us?</h2>
                <div
                  className='solid my-3 bg-info'
                  style={{
                    height: '0.3rem',
                    borderRadius: '0.2rem',
                    width: '5rem',
                  }}
                />
                <p className='lh-md text-white opacity-75 my-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  In iaculis nunc sed augue lacus.
                </p>
                <div style={{ marginTop: '4rem' }}>
                  <img
                    src={GraphLeads}
                    alt='graph-leads-knockin'
                    draggable='false'
                    width='100%'
                  />
                </div>
              </div>
              <div className='col-lg-1 col-md-1' />
              <div className='col-lg-6 col-md-5'>
                <div className='row align-items-center '>
                  <div className='col-lg-6'>
                    <div className='choose-box '>
                      <div>
                        <img src={bars} alt='bars-knockin' draggable='false' />
                      </div>
                      <div>
                        <h3 className='text-white py-1'>Lead On Properties</h3>
                        <p className='text-white opacity-75'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='choose-box mt-4'>
                      <div>
                        <img src={bell} alt='bell-knockin' draggable='false' />
                      </div>
                      <div>
                        <h3 className='text-white py-1'>Get Reminders</h3>
                        <p className='text-white opacity-75'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                    <div className='choose-box mt-4'>
                      <div>
                        <img
                          src={couple}
                          alt='couple-knockin'
                          draggable='false'
                        />
                      </div>
                      <div>
                        <h3 className='text-white py-1'>Favorited By Couple</h3>
                        <p className='text-white opacity-75'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* What makes us different */}
        <div className='container-xxl'>
          <h2 className='fs-1 text-center m-0'>What Makes Us Diffrent</h2>
          <div className='d-flex justify-content-center'>
            <div
              className='solid my-3 bg-info '
              style={{
                height: '0.3rem',
                borderRadius: '0.2rem',
                width: '5rem',
              }}
            />
          </div>
          <p className='text-center' style={{ color: '#5C5D6F' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            In iaculis nunc sed augue lacus.
          </p>
        </div>
        <ComparisonTable />
      </main>
      <Footer />
    </div>
  );
};

export default AgentPage;
