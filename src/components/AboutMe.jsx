import React, { useContext } from 'react';
import text from '../images/text.png';
import { ThemeContext } from 'styled-components';

export default function Projects(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        id='aboutMeIcon'
        style={{
          width: '5vw',
          padding: '10px',
          cursor: 'pointer',
          marhin: '0',
        }}
        onClick={() => {
          props.clickFunction(true);
          props.addToOpen('AboutMe');
        }}
      >
        <img style={{ width: '7vh' }} src={text} alt='folder png' />
        <h2 style={{ color: theme.headerText, paddingLeft: '.5vw' }}>
          AboutMe
        </h2>
      </div>
    </>
  );
}
