import React, { useContext } from 'react';
import linkedin from '../images/linkedin.png';
import { ThemeContext } from 'styled-components';

export default function Projects(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          width: '5vw',
          padding: '10px',
          cursor: 'pointer',
          marhin: '0',
        }}
        onClick={() => {
          window.open(
            'https://www.linkedin.com/in/caleb-grove-4a7040168/',
            '_blank'
          );
        }}
      >
        <img style={{ width: '7vh' }} src={linkedin} alt='folder png' />
        <h2 style={{ color: theme.headerText, paddingLeft: '.5vw' }}>
          LinkedIn
        </h2>
      </div>
    </>
  );
}
