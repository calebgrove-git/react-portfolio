import React, { useContext } from 'react';
import pdf from '../images/Resume.pdf';
import resume from '../images/resume.png';
import { ThemeContext } from 'styled-components';

export default function Resume(props) {
  const theme = useContext(ThemeContext);
  return (
    <a
      href={pdf}
      target='_blank'
      style={{
        width: '5vw',
        padding: '10px',
        cursor: 'pointer',
        marhin: '0',
      }}
    >
      <div>
        <img style={{ width: '7vh' }} src={resume} alt='resume png' />
        <h2 style={{ color: theme.headerText, paddingLeft: '.5vw' }}>Resume</h2>
      </div>
    </a>
  );
}
