import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/knockin-logo.png';
import eye from '../../assets/svgs/eye.svg';
import CrossEye from '../../assets/svgs/cross-eye.svg';
import SignUp from '../../assets/images/sign-up-min.png';

const SignUpPage = () => {
  const [eyeBtn, setEyeBtn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 col-lg-6 sign-up-hero'>
          <div className='d-flex align-items-center mb-4 w-50 justify-content-center'>
            <Link className='navbar-brand ' to='/'>
              <img
                src={Logo}
                draggable='false'
                alt='knockinlogo'
                className='d-inline-block align-text-top'
              />
            </Link>
            <h3 className='m-0 text-white'>Knockin</h3>
          </div>
          <div className='w-100 text-center'>
            <img src={SignUp} alt='sign-up-knockin' width='75%' />
          </div>
          <h3 className='text-center my-3 fs-2 text-white'>
            Land Your Dream Home, <br /> Stress Free.
          </h3>

          <p className='text-center text-white opacity-50 lh-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod{' '}
            <br />
            tempor ncididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>

        <div className='col-md-6 col-lg-6 form-sign-up'>
          <div style={{ width: '80%' }}>
            <h3 className='fs-1'>Create Account</h3>
            <p className='fs-4 lh-sm' style={{ color: '#929299' }}>
              Signup to Get Started
            </p>
            <div
              className='solid bg-info '
              style={{
                height: '0.3rem',
                borderRadius: '0.2rem',
                width: '9rem',
              }}
            />
            <form className='my-3'>
              <div className='row'>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>First Name</p>
                  <input type='text' className='custom-form-input' />
                </div>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Last Name</p>
                  <input type='text' className='custom-form-input' />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Phone Number</p>
                  <input type='tel' className='custom-form-input' />
                </div>
                <div className='col-md-6 my-2 position-relative'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Password</p>
                  <input
                    type={eyeBtn ? 'text' : 'password'}
                    className='custom-form-input'
                  />
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setEyeBtn(!eyeBtn);
                    }}
                    className='position-absolute eye-btn'
                  >
                    <div>
                      <img src={!eyeBtn ? eye : CrossEye} alt='password-eye' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-md-6 my-2 w-100'>
                <p className='fs-6 m-0 my-1 text-secondary'>Work Mail</p>
                <input type='email' className='custom-form-input' />
              </div>

              <div className='row'>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>
                    Select Your Role
                  </p>
                  <select
                    type='select'
                    className='custom-form-input custom-select'
                  >
                    <option value='Seller' selected>
                      Seller
                    </option>
                    <option value='Agent'>Agent</option>
                    <option value='Buyer'>Buyer</option>
                  </select>
                </div>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Company Name</p>
                  <input type='text' className='custom-form-input' />
                </div>
              </div>

              <div className='col-md-6 my-4 w-100'>
                <input type='checkbox' class='form-check-input' />
                <text className='fs-6 m-0 mx-3 my-1 text-secondary'>
                  I agree with all{' '}
                  <Link
                    to='/signup'
                    className='text-info text-decoration-none  pe-auto'
                    aria-disabled='true'
                  >
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    to='/signup'
                    className='text-info text-decoration-none  pe-auto'
                    aria-disabled='true'
                  >
                    Privacy Policies
                  </Link>{' '}
                  of Knockin.
                </text>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signup');
                }}
                className='btn btn-info '
                style={{
                  borderRadius: '0.5rem',
                  padding: '0 2rem',
                  height: '60px',
                }}
              >
                <div className='h5 text-white m-0'>Create Account</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
