import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/knockin-logo.png';
import eye from '../../assets/svgs/eye.svg';
import CrossEye from '../../assets/svgs/cross-eye.svg';
import SignUp from '../../assets/images/sign-up-min.png';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';

const SignUpPage = () => {
  const [eyeBtn, setEyeBtn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate('/chat');
    }
  }, [userInfo, navigate]);

  const CreateAccount = (e) => {
    e.preventDefault();
    var isPrimaryAgent;
    role === 'Agent' ? (isPrimaryAgent = true) : (isPrimaryAgent = false);
    dispatch(
      register(
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        role,
        isPrimaryAgent
      )
    );

    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setPhoneNumber('');
    setRole('');
    setCompanyName('');
    setPassword('');
  };

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
            <form onSubmit={CreateAccount} className='my-3'>
              <div className='row'>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>First Name</p>
                  <input
                    type='text'
                    className='custom-form-input'
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Last Name</p>
                  <input
                    type='text'
                    className='custom-form-input'
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Phone Number</p>
                  <input
                    type='tel'
                    className='custom-form-input'
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className='col-md-6 my-2 position-relative'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Password</p>
                  <input
                    type={eyeBtn ? 'text' : 'password'}
                    required
                    className='custom-form-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <input
                  type='email'
                  className='custom-form-input'
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>

              <div className='row'>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>
                    Select Your Role
                  </p>
                  <select
                    type='select'
                    className='custom-form-input custom-select'
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                  >
                    <option value=''>Select Role</option>
                    <option value='Agent'>Agent</option>
                    <option value='Seller'>Seller</option>
                    <option value='Buyer'>Buyer</option>
                  </select>
                </div>
                <div className='col-md-6 my-2'>
                  <p className='fs-6 m-0 my-1 text-secondary'>Company Name</p>
                  <input
                    type='text'
                    className='custom-form-input'
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>

              <div className='col-md-6 my-4 w-100'>
                <input type='checkbox' className='form-check-input' required />
                <span className='fs-6 m-0 mx-3 my-1 text-secondary'>
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
                </span>
              </div>
              {loading && (
                <div className=' my-4'>
                  <div className='spinner-grow' role='status'>
                    <span className='sr-only'></span>
                  </div>
                </div>
              )}
              {error && (
                <div className='alert alert-danger' role='alert'>
                  {error}
                </div>
              )}

              <button
                type='submit'
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
