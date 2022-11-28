import React from 'react';
import Logo from '../assets/images/knockin-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ btnName, onClick }) => {
  const navigate = useNavigate();
  return (
    <nav className='navbar navbar-expand-md navbar-light my-2'>
      <div className='container-xxl'>
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
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbar-knockin'
          aria-controls='navbar-knockin'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          style={{ flexGrow: '0' }}
          className='collapse navbar-collapse'
          id='navbar-knockin'
        >
          <ul className=' navbar-nav d-flex align-items-center'>
            <li className='nav-item mx-2'>
              <Link className=' nav-link' style={{ cursor: 'pointer' }} to='/'>
                <h5 className='mb-0'>Company</h5>
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link className=' nav-link' style={{ cursor: 'pointer' }} to='/'>
                <h5 className='mb-0'>Ebooks</h5>
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link
                className=' nav-link'
                style={{ cursor: 'pointer' }}
                to='/chat'
              >
                <h5 className='mb-0'>Contact Us</h5>
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <button
                onClick={() => {
                  navigate(`/${onClick}`);
                }}
                style={{ borderRadius: '1rem' }}
                type='button'
                className='p-3 navBtn btn btn-outline-info '
              >
                <h5 className='m-0 ' style={{ width: '130px' }}>
                  {btnName}
                </h5>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
