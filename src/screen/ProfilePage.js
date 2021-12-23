import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/knockin-logo.png';
import property from '../assets/ChatPage.js/property-muted.svg';
import profile from '../assets/ChatPage.js/profile.svg';
import msg from '../assets/ChatPage.js/msg-muted.svg';
import bell from '../assets/screenheader/bell.png';
import ProfileAvatar from '../assets/ChatPage.js/profile-avatar.png';
import search from '../assets/ChatPage.js/search.svg';
import curve from '../assets/ChatPage.js/curve.png';
import design from '../assets/ChatPage.js/design.png';
import houseicon from '../assets/ChatPage.js/houseicon.png';
import cross from '../assets/ChatPage.js/Vector.png';
import agencypic from '../assets/ProfileScreen/agencypic.png';
import creditcard from '../assets/ProfileScreen/creditcard.png';
import profilepic from '../assets/ProfileScreen/profilepic.png';
import Footer from '../components/Footer';

const ProfilePage = () => {
  return (
    <div>
      <div className='container-xxl'>
        <header className='d-flex align-content-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <Link className='navbar-brand ' to='/'>
              <img
                src={Logo}
                draggable='false'
                alt='knockinlogo'
                className='d-inline-block align-text-top'
              />
            </Link>
            <h3 className='mb-0 '>Knockin</h3>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <Link
              to='/property'
              className='text-decoration-none text-muted mx-3 h-100'
            >
              <div
                className='d-flex justify-content-between align-items-center h-100'
                style={{ borderBottom: '3.5px solid #fff' }}
              >
                <img src={property} alt='property' draggable='false' />
                <h5 className='text-mute m-0 mx-1 '>Properties</h5>
              </div>
            </Link>
            <Link
              to='/chat'
              className='text-decoration-none text-muted mx-3 h-100'
            >
              <div
                className='d-flex justify-content-between align-items-center h-100'
                style={{ borderBottom: '3.5px solid #fff' }}
              >
                <img src={msg} alt='msg' draggable='false' />
                <h5 className=' m-0 mx-1 '>Message</h5>
              </div>
            </Link>
            <Link
              to='/profile'
              className='text-decoration-none text-muted mx-3 h-100'
            >
              <div
                className='d-flex justify-content-between align-items-center h-100'
                style={{ borderBottom: '3.5px solid #28B8EA' }}
              >
                <img src={profile} alt='msg' draggable='false' />
                <h5 className='text-info m-0 mx-1'>Profile</h5>
              </div>
            </Link>
          </div>
          <div className='position-relative mt-2 right-nav'>
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{
                position: 'absolute',
                top: '30%',
                left: '3%',
                cursor: 'pointer',
              }}
            >
              <img src={search} alt='search' />
            </a>
            <input type='text ' className='search-bar' placeholder='Search..' />
            <Link to='/chat' className='mx-2'>
              <img src={bell} alt='bell' />
            </Link>
            <img src={ProfileAvatar} alt='profileavatar' />
          </div>
        </header>
      </div>
      <hr className='solid mt-0 mb-4' />
      <div className='container-xxl'>
        <div
          style={{
            marginTop: '3rem',
            marginBottom: '1rem',
            background: '#F0F9FC',
            position: 'relative',
            borderRadius: '1rem',
          }}
        >
          <a
            style={{
              position: 'absolute',
              zIndex: '6',
              top: '10%',
              right: '1%',
              cursor: 'pointer',
            }}
          >
            <img src={cross} alt='cross' />
          </a>
          <div
            style={{
              position: 'absolute',
              zIndex: '5',
              top: '0',
              right: '0',
            }}
          >
            <img src={design} alt='design' width='100%' draggable='false' />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '5',
              opacity: '0.1',
              left: '2%',
            }}
          >
            <img src={curve} alt='curve' width='100%' draggable='false' />
          </div>
          <div
            className='house-icon'
            style={{
              position: 'absolute',
              zIndex: '6',
              top: '-10%',
              left: '5%',
            }}
          >
            <img src={houseicon} alt='house' width='100%' draggable='false' />
          </div>

          <h4 className='text-center pt-5 mb-3'>
            Sell or Rent Your Home at the Best Price
          </h4>
          <p className='text-center pb-5 fs-6 m-0'>
            Find your dream house with your small family here
          </p>
        </div>
      </div>
      {/* Profile Section */}
      <div className='container-xxl my-5'>
        <h2 className='fs-1 my-4'>Profile</h2>
        <form>
          <div className='row gy-2'>
            <div className='col-md-6'>
              <h5 className='fs-4'>Personal Information</h5>
              <div className='py-3'>
                <img src={profilepic} alt='profile' draggable='false' />
              </div>
              <div className='my-4 w-75'>
                <p className='fs-6 m-0 my-1 text-secondary'>First Name</p>
                <input type='text' className='custom-form-input' />
              </div>
              <div className='my-4 w-75'>
                <p className='fs-6 m-0 my-1 text-secondary'>Last Name</p>
                <input type='text' className='custom-form-input' />
              </div>
              <div className='my-4 w-75'>
                <p className='fs-6 m-0 my-1 text-secondary'>E-mail Address </p>
                <input type='email' className='custom-form-input' />
              </div>
            </div>

            <div className='col-md-6'>
              <h5 className='fs-4'>Agency Information</h5>
              <div className='py-3'>
                <img src={agencypic} alt='agency' draggable='false' />
              </div>
              <div className='my-4 w-75'>
                <p className='fs-6 m-0 my-1 text-secondary'>Agency Name</p>
                <input type='text' className='custom-form-input' />
              </div>
              <div className='my-4 w-75'>
                <p className='fs-6 m-0 my-1 text-secondary'>Address</p>
                <input type='text' className='custom-form-input' />
              </div>
              <div className='my-4 w-75'>
                <p className='fs-6 m-0 my-1 text-secondary'>Section </p>
                <input type='email' className='custom-form-input' />
              </div>
            </div>
          </div>
          <div className='my-2'>
            <h5 className='fs-4'>Billing Section</h5>
            <div className='my-4'>
              <img src={creditcard} alt='card' draggable='false' />
            </div>
          </div>

          <div className='row gx-5 my-4'>
            <div className='col-md-4'>
              <p className='fs-6 m-0 my-1 text-secondary'>
                Credit Card Number{' '}
              </p>
              <input type='tel' className='custom-form-input' />
            </div>
            <div className='col-md-4'>
              <p className='fs-6 m-0 my-1 text-secondary'>Billing Address</p>
              <input type='text' className='custom-form-input' />
            </div>
            <div className='col-md-2'>
              {' '}
              <p className='fs-6 m-0 my-1 text-secondary'>Expiry</p>
              <input type='tel' className='custom-form-input' />
            </div>
            <div className='col-md-2'>
              <p className='fs-6 m-0 my-1 text-secondary'>CVV</p>
              <input type='tel' className='custom-form-input' />
            </div>
          </div>
          <div className='d-flex justify-content-center my-5'>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className='btn btn-info '
              style={{
                borderRadius: '0.5rem',
                padding: '0 2rem',
                width: '30%',
                height: '60px',
              }}
            >
              <div className='h5 text-white m-0'>Save</div>
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
