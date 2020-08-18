import React from 'react';
import { Window, WindowHeader, Button, Toolbar, WindowContent } from 'react95';
import './ProjectsFolder.css';
import ReactModal from 'react-modal-resizable-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faHtml5,
  faReact,
  faSass,
  faJsSquare,
  faYarn,
  faGit,
} from '@fortawesome/free-brands-svg-icons';
export default function ProjectsFolder(props) {
  return (
    <ReactModal
      initWidth={600}
      initHeight={600}
      className={'skillsFolder'}
      isOpen={props.isOpen}
      disableVerticalResize={true}
      disableHorizontalResize={true}
      top={250}
    >
      <Window className='window' style={{ width: '600px', height: '600px' }}>
        <WindowHeader className='window-header'>
          <span>Skills</span>
          <Button
            onClick={() => {
              props.clickFunction(false);
              props.removeFromOpen('Skills');
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
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faHtml5} size='6x' color='#e34f26' />
            <p>HTML</p>
          </div>
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCss3} size='6x' color='#0884EE' />
            <p>CSS</p>
          </div>
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faReact} size='6x' color='#235090' />
            <p>React</p>
          </div>
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faSass} size='6x' color='#EDCAEF' />
            <p>SASS</p>
          </div>
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faJsSquare} size='6x' color='#e5e537' />
            <p>JavaScript</p>
          </div>
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faYarn} size='6x' color='#00D2FF' />
            <p>Yarn</p>
          </div>
          <div style={{ flex: '0 0 33.333333%', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faGit} size='6x' color='#FC7C00' />
            <p>Git</p>
          </div>
        </WindowContent>
      </Window>
    </ReactModal>
  );
}
