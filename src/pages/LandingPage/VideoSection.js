import React from 'react';
import VideoImg from '../../assets/images/videoimage.png';

const VideoSection = () => {
  return (
    <div className='container-xxl '>
      <div className='px-4 my-5' style={{ cursor: 'pointer' }}>
        <img src={VideoImg} alt='video-house' width='100%' />
      </div>
      <div className='d-flex justify-content-around my-5 py-4'>
        <div className='text-center'>
          <h2>800+</h2>
          <p className='text-muted'>Happy Sellers</p>
        </div>
        <div className='text-center'>
          <h2>1500+</h2>
          <p className='text-muted'>House Bought in Knockit</p>
        </div>
        <div className='text-center'>
          <h2>2000+</h2>
          <p className='text-muted'>Homes for Sale</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
