import React, { useContext } from 'react';
import email from '../images/email.png';
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
          props.addToOpen('Contact');
        }}
      >
        <img style={{ width: '7vh' }} src={email} alt='folder png' />
        <h2 style={{ color: theme.headerText, paddingLeft: '.5vw' }}>
          Contact
        </h2>
      </div>
    </>
  );
}
