import React, { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/knockin-logo.png';
import property from '../assets/ChatPage.js/property.svg';
import profile from '../assets/ChatPage.js/profile-muted.svg';
import msg from '../assets/ChatPage.js/msg-muted.svg';
import bell from '../assets/screenheader/bell.png';
import ProfileAvatar from '../assets/ChatPage.js/profile-avatar.png';
import search from '../assets/ChatPage.js/search.svg';
import curve from '../assets/ChatPage.js/curve.png';
import design from '../assets/ChatPage.js/design.png';
import houseicon from '../assets/ChatPage.js/houseicon.png';
import cross from '../assets/ChatPage.js/Vector.png';
import home1 from '../assets/propertyscreen/home1.png';
import home2 from '../assets/propertyscreen/home2.png';
import home3 from '../assets/propertyscreen/home3.png';
import upcominghome from '../assets/propertyscreen/upcominghome.png';
import picgroup from '../assets/propertyscreen/picgroup.png';
import calendar from '../assets/svgs/calendar.svg';
import clock from '../assets/svgs/clock.svg';
import arrowdown from '../assets/svgs/arrowdown.svg';
import trash from '../assets/svgs/trash.svg';
import edit from '../assets/svgs/edit.svg';
import curvedp from '../assets/ChatPage.js/profile-avatar.png';
import Footer from '../components/Footer';

const PropertiesScreen = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };
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
                style={{ borderBottom: '3.5px solid #28B8EA' }}
              >
                <img src={property} alt='property' draggable='false' />
                <h5 className='text-info m-0 mx-1 '>Properties</h5>
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
                style={{ borderBottom: '3.5px solid #fff' }}
              >
                <img src={profile} alt='msg' draggable='false' />
                <h5 className='text-mute m-0 mx-1'>Profile</h5>
              </div>
            </Link>
          </div>
          <div className='position-relative mt-2 right-nav'>
            <div
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
            </div>
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
          <div
            style={{
              position: 'absolute',
              zIndex: '6',
              top: '10%',
              right: '1%',
              cursor: 'pointer',
            }}
          >
            <img src={cross} alt='cross' />
          </div>
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

      {/* Property Section */}
      <div className='container-xxl my-4'>
        {/* Good Morning */}
        <div className='d-flex justify-content-between mb-3'>
          <div className='d-flex'>
            <div>
              <img src={curvedp} alt='curvedp' draggable='false' />
            </div>
            <div className='mx-3'>
              <h3 className='fs-4'> Good Morning, Marilyn</h3>
              <p className='text-info'>Thunder Road, Burlingame</p>
            </div>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ borderRadius: '0.5rem', padding: '1rem' }}
              type='button'
              className=' navBtn btn btn-outline-info '
            >
              <div className='h5 m-0 fs-6'>Add New Property</div>
            </button>
          </div>
        </div>

        {/* Button Group */}
        <div className='mb-3'>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className='btn btn-info '
            style={{
              borderRadius: '0.5rem',
              padding: '1rem',
              marginRight: '1rem',
            }}
          >
            <div className='h5 text-white m-0 fs-6'>New Property</div>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{
              borderRadius: '0.5rem',
              padding: '1rem',
              marginRight: '1rem',
            }}
            type='button'
            className=' navBtn btn btn-outline-info '
          >
            <div className='h5 m-0 fs-6'>Recently Added</div>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{ borderRadius: '0.5rem', padding: '1rem' }}
            type='button'
            className=' navBtn btn btn-outline-info '
          >
            <div className='h5 m-0 fs-6'>Last updated</div>
          </button>
        </div>

        <div className='row'>
          {/* Property List  */}
          <div className='col-md-9'>
            <div
              style={{
                background: '#F5F9FA',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <div className='row p-3'>
                <div className='col-lg-4'>
                  <p className='text-muted m-0'>Property</p>
                </div>
                <div className='col-lg-2'>
                  <p className='text-muted m-0'>Leads</p>
                </div>
                <div className='col-lg-1'>
                  <p className='text-muted m-0'>Stats</p>
                </div>
                <div className='col-lg-2'>
                  <p className='text-muted m-0'>Price</p>
                </div>
                <div className='col-lg-3'>
                  <p className='text-muted m-0'>Status</p>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: '1.5rem 1rem',
                borderRadius: '1rem',
                border: '1px solid #e6e6e6',
                marginBottom: '1rem',
              }}
            >
              <div className='row '>
                <div className=' col-lg-4'>
                  <div className='row g-3'>
                    <div className='col-4 align-items-center py-0 '>
                      <img
                        src={home1}
                        alt='home1'
                        draggable='false'
                        width='100%'
                      />
                    </div>
                    <div className='col-8 d-flex-col justify-content-center'>
                      <p className='text-info  m-0 my-2'>24 Aug, 2021</p>
                      <h5 className='fs-5 m-0'>3 BHK Luxury Flat</h5>
                      <p className='text-muted m-0'>132 Mazakin St, NY</p>
                    </div>
                  </div>
                </div>
                <div className=' col-lg-2 d-flex-col justify-content-center pt-2'>
                  <img src={picgroup} alt='picicon' draggable='false' />
                  <h5 className='fs-6 my-2'>+12 Others</h5>
                </div>
                <div className=' col-lg-1 d-flex-col justify-content-center'>
                  <h5 className='fs-5 mt-2'>15K</h5>
                  <p className='text-muted m-0'>Views</p>
                </div>
                <div className='col-md-2 col-lg-2 d-flex-col justify-content-center'>
                  <h5 className='fs-5 mt-2'>$2,00,000/-</h5>
                  <p className='text-muted m-0'>Total Price</p>
                </div>
                <div className='col-md-3 col-lg-3'>
                  <div
                    className='d-flex justify-content-between align-items-center '
                    style={{
                      height: '100%',
                    }}
                  >
                    <div
                      className='pointing px-3 py-2 d-flex justify-content-between align-items-center text-decoration-none'
                      style={{
                        border: '1px solid #e6e6e6',
                        borderRadius: '0.5rem',
                        width: '120px',
                      }}
                    >
                      <h5 className='fs-6  m-0 ' style={{ color: '#519C51' }}>
                        Active
                      </h5>
                      <div>
                        <img src={arrowdown} alt='arrow' draggable='false' />
                      </div>
                    </div>
                    <div>
                      <div className='pointing mx-2'>
                        <img src={edit} alt='edit' draggable='false' />
                      </div>
                      <div className='pointing mx-1'>
                        <img src={trash} alt='trash' draggable='false' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: '1.5rem 1rem',
                borderRadius: '1rem',
                border: '1px solid #e6e6e6',
                marginBottom: '1rem',
              }}
            >
              <div className='row '>
                <div className=' col-lg-4'>
                  <div className='row g-3'>
                    <div className='col-4 align-items-center py-0 '>
                      <img
                        src={home2}
                        alt='home2'
                        draggable='false'
                        width='100%'
                      />
                    </div>
                    <div className='col-8 d-flex-col justify-content-center'>
                      <p className='text-info  m-0 my-2'>12 Aug, 2021</p>
                      <h5 className='fs-5 m-0'>5 BHK Luxury Flat</h5>
                      <p className='text-muted m-0'>132 Mazakin St, NY</p>
                    </div>
                  </div>
                </div>
                <div className=' col-lg-2 d-flex-col justify-content-center pt-2'>
                  <img src={picgroup} alt='picicon' draggable='false' />
                  <h5 className='fs-6 my-2'>+12 Others</h5>
                </div>
                <div className=' col-lg-1 d-flex-col justify-content-center'>
                  <h5 className='fs-5 mt-2'>23K</h5>
                  <p className='text-muted m-0'>Views</p>
                </div>
                <div className='col-md-2 col-lg-2 d-flex-col justify-content-center'>
                  <h5 className='fs-5 mt-2'>$2,00,000/-</h5>
                  <p className='text-muted m-0'>Total Price</p>
                </div>
                <div className='col-md-3 col-lg-3'>
                  <div
                    className='d-flex justify-content-between align-items-center '
                    style={{
                      height: '100%',
                    }}
                  >
                    <div
                      className='pointing px-3 py-2 d-flex justify-content-between align-items-center text-decoration-none'
                      style={{
                        border: '1px solid #e6e6e6',
                        borderRadius: '0.5rem',
                        width: '120px',
                      }}
                    >
                      <h5 className='fs-6  m-0 ' style={{ color: '#519C51' }}>
                        Active
                      </h5>
                      <div>
                        <img src={arrowdown} alt='arrow' draggable='false' />
                      </div>
                    </div>
                    <div>
                      <div className='pointing mx-2'>
                        <img src={edit} alt='edit' draggable='false' />
                      </div>
                      <div className='pointing mx-1'>
                        <img src={trash} alt='trash' draggable='false' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: '1.5rem 1rem',
                borderRadius: '1rem',
                border: '1px solid #e6e6e6',
                marginBottom: '1rem',
              }}
            >
              <div className='row '>
                <div className=' col-lg-4'>
                  <div className='row g-3'>
                    <div className='col-4 align-items-center py-0 '>
                      <img
                        src={home3}
                        alt='home3'
                        draggable='false'
                        width='100%'
                      />
                    </div>
                    <div className='col-8 d-flex-col justify-content-center'>
                      <p className='text-info  m-0 my-2'>8 Aug, 2021</p>
                      <h5 className='fs-5 m-0'>House On beach</h5>
                      <p className='text-muted m-0'>132 Mazakin St, NY</p>
                    </div>
                  </div>
                </div>
                <div className=' col-lg-2 d-flex-col justify-content-center pt-2'>
                  <img src={picgroup} alt='picicon' draggable='false' />
                  <h5 className='fs-6 my-2'>+12 Others</h5>
                </div>
                <div className=' col-lg-1 d-flex-col justify-content-center'>
                  <h5 className='fs-5 mt-2'>132K</h5>
                  <p className='text-muted m-0'>Views</p>
                </div>
                <div className='col-md-2 col-lg-2 d-flex-col justify-content-center'>
                  <h5 className='fs-5 mt-2'>$2,00,000/-</h5>
                  <p className='text-muted m-0'>Total Price</p>
                </div>
                <div className='col-md-3 col-lg-3'>
                  <div
                    className='d-flex justify-content-between align-items-center '
                    style={{
                      height: '100%',
                    }}
                  >
                    <div
                      className='pointing px-3 py-2 d-flex justify-content-between align-items-center text-decoration-none'
                      style={{
                        border: '1px solid #e6e6e6',
                        borderRadius: '0.5rem',
                        width: '120px',
                      }}
                    >
                      <h5 className='fs-6  m-0 ' style={{ color: '#519C51' }}>
                        Active
                      </h5>
                      <div>
                        <img src={arrowdown} alt='arrow' draggable='false' />
                      </div>
                    </div>
                    <div>
                      <div className='pointing mx-2'>
                        <img src={edit} alt='edit' draggable='false' />
                      </div>
                      <div className='pointing mx-1'>
                        <img src={trash} alt='trash' draggable='false' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className='d-flex justify-content-center py-3'>
              <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <div className='page-link pointing' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                    </div>
                  </li>
                  <li className='page-item'>
                    <div className='page-link pointing'>
                      <span aria-hidden='true'>1</span>
                    </div>
                  </li>
                  <li className='page-item'>
                    <div className='page-link pointing'>
                      <span aria-hidden='true'>2</span>
                    </div>
                  </li>
                  <li className='page-item'>
                    <div className='page-link pointing'>
                      <span aria-hidden='true'>3</span>
                    </div>
                  </li>
                  <li className='page-item'>
                    <div className='page-link pointing'>
                      <span aria-hidden='true'>4</span>
                    </div>
                  </li>
                  <li className='page-item'>
                    <div className='page-link pointing bg-info text-white'>
                      <span aria-hidden='true'>5</span>
                    </div>
                  </li>
                  <li className='page-item'>
                    <div className='page-link pointing' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='col-md-3'>
            {/* Calendar */}
            <div
              style={{
                width: '305px',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '2px 2px 10px #e6e6e6',
                marginBottom: '1.5rem',
              }}
            >
              <h5 className='fs-5'>Calender</h5>
              <DatePicker onChange={onChange} selected={date} />
            </div>
            {/* Upcoming View */}
            <div
              style={{
                width: '305px',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '2px 2px 10px #e6e6e6',
              }}
            >
              <h5 className='fs-5 '>Upcoming Viewing</h5>
              <img
                src={upcominghome}
                alt='upcomign-home'
                draggable='false'
                width='100%'
              />
              <h5 className='fs-6  mt-3'>Orchard House</h5>
              <p className='text-muted'>3746 Calvin Street, LA</p>
              <div className='d-flex w-75 justify-content-between align-items-center'>
                <div className='d-flex'>
                  <img src={calendar} alt='calendar' draggable='false' />
                  <p className='m-0 mx-1'>12/9/21</p>
                </div>
                <div className='d-flex'>
                  <img src={clock} alt='clock' draggable='false' />
                  <p className='m-0 mx-1'>11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesScreen;
