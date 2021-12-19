import React from 'react';
import cross from '../assets/AgentPage/cross.svg';
import tick from '../assets/AgentPage/tick.svg';
import knockin from '../assets/AgentPage/knockin.png';
import zooplaIcon from '../assets/AgentPage/zooplaIcon.png';
import rightmove from '../assets/AgentPage/rightmove.png';

const ComparisonTable = () => {
  return (
    <div className='container-lg'>
      <table
        className='table table-bordered '
        style={{ borderRadius: '1rem', marginBottom: '5rem' }}
      >
        <thead style={{ background: '#F6F6FA' }}>
          <tr>
            <td></td>
            <td
              style={{
                maxWidth: '120px',
                textAlign: 'center',
              }}
            >
              <img src={knockin} alt='knockin' />
            </td>
            <td
              style={{
                maxWidth: '120px',
                textAlign: 'center',
              }}
            >
              <img src={zooplaIcon} alt='zooplaIcon' />
            </td>
            <td
              style={{
                maxWidth: '120px',
                textAlign: 'center',
              }}
            >
              <img src={rightmove} alt='rightmove' />
            </td>
          </tr>
        </thead>
        <tbody style={{ borderTop: '#fff' }}>
          <tr>
            <td>
              <text>Valuation</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>Agent ads on every full property listing</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>Enhanced branding in your customer accounts</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>No fees until 31 March 2022</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>Save time with valuation and viewings arranged 24/7</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>No reselling of your data</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>ChainMaker introductions</text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
          <tr>
            <td>
              <text>
                Earn extra revenue from unique property playground and
                priorities features
              </text>
            </td>
            <td className='text-center'>
              <img src={tick} alt='tick' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
            <td className='text-center'>
              <img src={cross} alt='cross' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
