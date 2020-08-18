import React, { useContext } from 'react';
import folder from '../images/folder.png';
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
          props.clickFunction(true);
          props.addToOpen('Skills');
        }}
      >
        <img style={{ width: '7vh' }} src={folder} alt='folder png' />
        <h2 style={{ color: theme.headerText, paddingLeft: '.5vw' }}>Skills</h2>
      </div>
    </>
  );
}
