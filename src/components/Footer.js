import React, { useEffect } from 'react';
import Logo from '../assets/images/knockin-logo.png';
import Facebook from '../assets/images/Facebook.png';
import Instagram from '../assets/images/Instagram.png';
import Twitter from '../assets/images/Twitter.png';
import GooglePlay from '../assets/images/google-play-btn.png';
import ApplePlay from '../assets/images/apple-play-btn.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <footer style={{ background: '#F0F9FC' }}>
      <div className='container-xxl pt-5 pb-4'>
        <div className='row'>
          <div className='col-sm-7 col-md-4'>
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
            <p className='text-muted my-4' style={{ width: '80%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div
              className='d-flex justify-content-between'
              style={{ width: '40%' }}
            >
              <button className='bg-transparent'>
                <img src={Facebook} alt='facebook-knockin' />
              </button>
              <button className='bg-transparent'>
                <img src={Twitter} alt='twitter-knockin' />
              </button>
              <button className='bg-transparent'>
                <img src={Instagram} alt='twitter-instagram' />
              </button>
            </div>
          </div>

          <div className='col-sm-5 col-md-2'>
            <h5 className='my-4'>Menu</h5>
            <p>About</p>
            <p>Contact Us</p>
            <p>News And Press</p>
            <p>Privacy Policy</p>
          </div>

          <div className='col-sm-6 col-md-3'>
            <h5 className='my-4'>Contact Us</h5>
            <p>Phone : +44 654 658 2145</p>
            <p>Email : Knockin@mail.com</p>
          </div>

          <div className='col-sm-6 col-md-3'>
            <h5 className='my-4'>Download App</h5>
            <button className='btn p-0 btn-app'>
              <img
                src={ApplePlay}
                alt='apple-play-knockin'
                draggable='false'
                width='100%'
              />
            </button>
            <button className='btn my-2 p-0 btn-app'>
              <img
                src={GooglePlay}
                alt='google-play-knockin'
                draggable='false'
                width='100%'
              />
            </button>
          </div>
        </div>
      </div>
      <hr className='solid mb-4' />
      <h6 className='text-muted text-center pb-4'>
        KNOCKIN @ {new Date().getFullYear()}
      </h6>
    </footer>
  );
};

export default Footer;
