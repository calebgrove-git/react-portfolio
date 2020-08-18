import React from 'react';
import { Window, WindowHeader, Button, Toolbar, WindowContent } from 'react95';
import './AboutMeFolder.css';
import ReactModal from 'react-modal-resizable-draggable';
export default function ProjectsFolder(props) {
  return (
    <ReactModal
      initWidth={600}
      initHeight={600}
      className={'aboutMe'}
      isOpen={props.isOpen}
      disableVerticalResize={true}
      disableHorizontalResize={true}
      top={200}
    >
      <Window className='window' style={{ width: '600px', height: '600px' }}>
        <WindowHeader className='window-header'>
          <span>AboutMe</span>
          <Button
            onClick={() => {
              props.clickFunction(false);
              props.removeFromOpen('AboutMe');
            }}
            className='close'
          >
            X
          </Button>
          <Button
            className='close'
            onClick={() => {
              props.clickFunction(false);
            }}
          >
            -
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant='menu' size='sm'>
            File
          </Button>
          <Button variant='menu' size='sm'>
            Edit
          </Button>
          <Button variant='menu' size='sm' disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent
          style={{
            backgroundColor: 'white',
            height: '480px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '20px' }}>Hi, I'm Caleb!</h2>
          <br />
          <p>
            Having moved all around the country for 6 years, I decided to return
            to my roots and re-evaluate my career goals. I frequently experiment
            with web development in my spare time, so I recently decided to
            pursue it as a career. With a background in B2B sales, I am
            passionate about applying my skills to help businesses grow their
            brand.
          </p>
        </WindowContent>
      </Window>
    </ReactModal>
  );
}
