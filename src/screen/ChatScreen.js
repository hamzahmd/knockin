import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../assets/images/knockin-logo.png';
import property from '../assets/ChatPage.js/property-muted.svg';
import profile from '../assets/ChatPage.js/profile-muted.svg';
import msg from '../assets/ChatPage.js/message.svg';
import bell from '../assets/screenheader/bell.png';
import ProfileAvatar from '../assets/ChatPage.js/profile-avatar.png';
import search from '../assets/ChatPage.js/search.svg';
import curve from '../assets/ChatPage.js/curve.png';
import design from '../assets/ChatPage.js/design.png';
import houseicon from '../assets/ChatPage.js/houseicon.png';
import cross from '../assets/ChatPage.js/Vector.png';
import call from '../assets/ChatPage.js/call.png';
import edit from '../assets/ChatPage.js/edit.png';
import video from '../assets/ChatPage.js/video.png';
import circledp from '../assets/ChatPage.js/circledp.png';
import stylefont0 from '../assets/ChatPage.js/Frame0.png';
import stylefont1 from '../assets/ChatPage.js/Frame1.png';
import stylefont2 from '../assets/ChatPage.js/Frame2.png';
import stylefont3 from '../assets/ChatPage.js/Frame3.png';
import stylefont4 from '../assets/ChatPage.js/Frame4.png';
import stylefont5 from '../assets/ChatPage.js/Frame5.png';
import upnav from '../assets/ChatPage.js/upnav.png';
import downnav from '../assets/ChatPage.js/downnav.png';
import stylefont6 from '../assets/ChatPage.js/Frame6.png';
import send from '../assets/ChatPage.js/send.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  getConversationsAction,
  getConversationsByIdAction,
  getUserAction,
  sendMessageAction,
} from '../actions/userActions';

const ChatScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [typeMessage, setTypeMessage] = useState('');
  const [navOpener1, setNavOpener1] = useState(false);
  const [navOpener2, setNavOpener2] = useState(false);
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const getUser = useSelector((state) => state.getUser);
  const { user } = getUser;
  const getConversations = useSelector((state) => state.getConversations);
  const { conversations } = getConversations;
  const getConversationsById = useSelector(
    (state) => state.getConversationsById
  );
  const { conversationsById } = getConversationsById;

  const sendMessage = useSelector((state) => state.sendMessage);
  const { messageSent } = sendMessage;

  useEffect(() => {
    if (!userInfo) {
      navigate('/signup');
    }
    if (userInfo) {
      dispatch(getUserAction());
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (user) {
      dispatch(getConversationsAction());
    }
  }, [user]);

  const sideNav1 = () => {
    setNavOpener1(!navOpener1);
  };
  const sideNav2 = () => {
    setNavOpener2(!navOpener2);
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
                style={{ borderBottom: '3.5px solid #fff' }}
              >
                <img src={property} alt='property' draggable='false' />
                <h5 className='text-mute m-0 mx-1 '>Properties</h5>
              </div>
            </Link>
            <Link
              to='/chat'
              className='text-decoration-none text-info mx-3 h-100'
            >
              <div
                className='d-flex justify-content-between align-items-center h-100'
                style={{ borderBottom: '3.5px solid #28B8EA' }}
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
              <img src={search} alt='search' draggable='false' />
            </a>
            <input type='text ' className='search-bar' placeholder='Search..' />
            <Link to='/chat' className='mx-2'>
              <img src={bell} alt='bell' draggable='false' />
            </Link>
            <img src={ProfileAvatar} alt='profileavatar' draggable='false' />
          </div>
        </header>
      </div>
      <hr className='solid mt-0 mb-4' />
      <div className='container-xxl'>
        <div
          style={{
            marginTop: '3rem',
            marginBottom: '1.4rem',
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
            <img src={cross} alt='cross' draggable='false' />
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

      {/* Chat Section */}
      <div className='container-xxl'>
        <div className='row mb-3'>
          <div className='col-md-4'>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '1rem',
                boxShadow: '2px 2px 10px #e6e6e6',
              }}
            >
              <h4 className='fs-3 my-3'>Properties</h4>
              <div className='position-relative my-2 right-nav'>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '3%',
                    cursor: 'pointer',
                  }}
                >
                  <img src={search} alt='search' draggable='false' />
                </a>
                <input
                  type='text '
                  className='search-bar bg-light w-100'
                  placeholder='Search..'
                />
              </div>
              {/* Chat links */}
              <div className='bg-light chat-box my-3'>
                <a onClick={sideNav1} className='pointing text-decoration-none'>
                  <div className='d-flex align-items-center justify-content-between  '>
                    <div className='d-flex align-items-center'>
                      <div>
                        <img
                          src={
                            conversations &&
                            conversations[0].property.photoThumbnailUrl
                          }
                          alt='house'
                          width='60px'
                          style={{ borderRadius: '0.5rem' }}
                        />
                      </div>
                      <div className='px-2'>
                        <h5 className='m-0 fs-6 text-dark'>
                          2 BHK Luxury Flat
                        </h5>
                        <p className='text-secondary m-0'>
                          132, Mazakin Street, LA.
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={!navOpener1 ? downnav : upnav}
                        alt='nav'
                        draggable
                      />
                    </div>
                  </div>
                </a>
                {navOpener1 &&
                  conversations &&
                  conversations.length > 0 &&
                  conversations[0].property.conversations.map(
                    (conversation, index) => (
                      <div className='mt-3' key={index}>
                        <a
                          className='text-decoration-none pointing '
                          key={index}
                          onClick={() => {
                            console.log(index);
                            dispatch(getConversationsByIdAction(index));
                          }}
                        >
                          <div className='conversation-box'>
                            <h5
                              className='m-0 fs-6 text-dark'
                              key={conversation.id}
                            >
                              {conversation.firstName} {conversation.lastName}
                            </h5>
                          </div>
                        </a>
                      </div>
                    )
                  )}
              </div>

              {/* chat link2 */}
              <div className='bg-light chat-box my-3'>
                <a onClick={sideNav2} className='pointing text-decoration-none'>
                  <div className='d-flex align-items-center justify-content-between  '>
                    <div className='d-flex align-items-center'>
                      <div>
                        <img
                          src={
                            conversations &&
                            conversations[1].property.photoThumbnailUrl
                          }
                          alt='house'
                          width='60px'
                          style={{ borderRadius: '0.5rem' }}
                        />
                      </div>
                      <div className='px-2'>
                        <h5 className='m-0 fs-6 text-dark'>
                          2 BHK Luxury Flat
                        </h5>
                        <p className='text-secondary m-0'>
                          132, Mazakin Street, LA.
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={!navOpener2 ? downnav : upnav}
                        alt='nav'
                        draggable
                      />
                    </div>
                  </div>
                </a>
                {navOpener2 &&
                  conversations &&
                  conversations.length > 0 &&
                  conversations[1].property.conversations.map(
                    (conversation, index) => (
                      <div className='mt-3' key={index}>
                        <a
                          className='text-decoration-none pointing '
                          key={index}
                          onClick={() => {
                            console.log(index);
                            dispatch(getConversationsByIdAction(index));
                          }}
                        >
                          <div className='conversation-box'>
                            <h5 className='m-0 fs-6 text-dark' key={index}>
                              {conversation.firstName} {conversation.lastName}
                            </h5>
                          </div>
                        </a>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
          {/* chat */}
          <div className='col-md-8'>
            <div
              style={{
                background: '#ECF5F8',
                borderRadius: '1rem',
                padding: '1rem',
              }}
            >
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <img src={circledp} alt='circle-dp' draggable='false' />
                  </div>
                  <div className='px-2'>
                    <h4 className='m-0'>
                      {conversationsById && conversationsById.firstName}{' '}
                      {conversationsById && conversationsById.lastName}
                    </h4>
                    <p className='text-secondary m-0'>
                      132, Mazakin Street, New York.
                    </p>
                  </div>
                </div>
                <div>
                  <a className='mx-1 pointing'>
                    <img src={call} alt='call' draggable='false' />
                  </a>
                  <a className='mx-1 pointing'>
                    <img src={video} alt='msg' draggable='false' />
                  </a>
                  <a className='mx-1 pointing'>
                    <img src={edit} alt='edit' draggable='false' />
                  </a>
                </div>
              </div>
              <hr />

              {/* REsponse Message */}
              {messageSent && (
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '1rem',
                    padding: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div className='d-flex justify-content-between align-items-center mb-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src={ProfileAvatar}
                        alt='profile'
                        draggable='false'
                      />
                      <h5 className='m-0 mx-3'>
                        {user && user.firstName} {user && user.lastName}
                      </h5>
                    </div>
                    <h5
                      className='text-warning px-3 py-2 m-0'
                      style={{ borderRadius: '0.5rem', background: '#fff8e8' }}
                    >
                      Seller
                    </h5>
                  </div>
                  {messageSent && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: messageSent.message,
                      }}
                    />
                  )}
                </div>
              )}

              {/* message area */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '1rem',
                  padding: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <div className='d-flex align-items-center'>
                    <img src={ProfileAvatar} alt='profile' draggable='false' />
                    <h5 className='m-0 mx-3'>
                      {user && user.firstName} {user && user.lastName}
                    </h5>
                  </div>
                  <h5
                    className='text-warning px-3 py-2 m-0'
                    style={{ borderRadius: '0.5rem', background: '#fff8e8' }}
                  >
                    Seller
                  </h5>
                </div>
                {conversationsById && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        conversationsById.conversationMessages[0][2].message,
                    }}
                  />
                )}

                {/* <p>Good Morning, Jaydon Geidt</p>
                <p>Lorem ipsum dolor sit amet, consectetur @Knockin</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
                <p className='m-0'>Thanks</p>
                <h5>Jaydon</h5> */}
              </div>

              {/* Got message */}

              <div
                style={{
                  background: '#3080ED',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div className='d-flex align-items-center'>
                  <img src={circledp} alt='circledp' draggable='false' />
                  <h5 className='text-white mx-2'>
                    {' '}
                    {conversationsById && conversationsById.firstName}{' '}
                    {conversationsById && conversationsById.lastName}
                  </h5>
                </div>
                <hr className='bg-light' />
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, */}
                <p className='text-white'>
                  {conversationsById && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          conversationsById.conversationMessages[0][1].message,
                      }}
                    />
                  )}
                </p>
              </div>

              {/* Text Place */}
              <form>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <textarea
                    rows='3'
                    type='text'
                    placeholder='Write your message here...'
                    style={{ outline: 'none', width: '100%' }}
                    value={typeMessage}
                    onChange={(e) => setTypeMessage(e.target.value)}
                  />
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <div>
                      <a className='pointing px-2'>
                        <img src={stylefont0} alt='style0' draggable='false' />
                      </a>
                      <a className='pointing px-2'>
                        <img src={stylefont1} alt='style1' draggable='false' />
                      </a>
                      <a className='pointing px-2'>
                        <img src={stylefont2} alt='style2' draggable='false' />
                      </a>
                      <a className='pointing px-2'>
                        <img src={stylefont3} alt='style3' draggable='false' />
                      </a>
                      <a className='pointing px-2'>
                        <img src={stylefont4} alt='style4' draggable='false' />
                      </a>
                      <a className='pointing px-2'>
                        <img src={stylefont5} alt='style5' draggable='false' />
                      </a>
                      <a className='pointing px-2'>
                        <img src={stylefont6} alt='style6' draggable='false' />
                      </a>
                    </div>
                    <a
                      className='pointing'
                      onClick={() => {
                        const conversationId =
                          conversationsById && conversationsById.id;
                        const userId =
                          conversationsById &&
                          conversationsById.conversationMessages[0][2].userId;
                        dispatch(
                          sendMessageAction(conversationId, userId, typeMessage)
                        );
                        if (messageSent) {
                          setTypeMessage('');
                        }
                      }}
                    >
                      <img src={send} alt='send' draggable='false' />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatScreen;
