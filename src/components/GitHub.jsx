import React, { useContext } from 'react';
import github from '../images/github.png';
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
          window.open('https://github.com/calebgrove-git', '_blank');
        }}
      >
        <img style={{ width: '7vh' }} src={github} alt='folder png' />
        <h2 style={{ color: theme.headerText, paddingLeft: '.5vw' }}>GitHub</h2>
      </div>
    </>
  );
}
