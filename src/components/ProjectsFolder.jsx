import React from 'react';
import {
  Window,
  WindowHeader,
  Button,
  Toolbar,
  WindowContent,
  Anchor,
} from 'react95';
import './ProjectsFolder.css';
import ReactModal from 'react-modal-resizable-draggable';
import synth from '../images/synth.png';
import peer from '../images/peers.png';
export default function ProjectsFolder(props) {
  return (
    <ReactModal
      initWidth={600}
      initHeight={600}
      className={'projectsFolder'}
      isOpen={props.isOpen}
      disableVerticalResize={true}
      disableHorizontalResize={true}
      top={150}
    >
      <Window className='window' style={{ width: '600px', height: '600px' }}>
        <WindowHeader className='window-header'>
          <span>Projects</span>
          <Button
            onClick={() => {
              props.clickFunction(false);
              props.removeFromOpen('Projects');
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
            overflow: 'scroll',
          }}
        >
          <h2 style={{ fontSize: '20px' }}>Sythesis</h2>
          <p>
            - A web app that lets you speak verbally with a bot in realtime -
          </p>
          <img
            src={synth}
            alt='synthesis screenshot'
            style={{ width: '100%' }}
          />
          <p>
            {' '}
            Live App:
            <Anchor href='https://sythesis-fc547.web.app/' target='_blank'>
              Sythesis
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Repo:
            <Anchor
              href='https://github.com/calebgrove-git/synthesis'
              target='_blank'
            >
              Peer
            </Anchor>
          </p>
          <hr />
          <h2 style={{ fontSize: '20px' }}>Peer</h2>
          <p>
            - A web app for HTML and grammar validation with suggested fixes -
          </p>
          <img src={peer} alt='peer screenshot' style={{ width: '100%' }} />
          <p>
            {' '}
            Live App:
            <Anchor
              href='https://calebgrove-git.github.io/PEER/'
              target='_blank'
            >
              Peer
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Repo:
            <Anchor
              href='https://github.com/calebgrove-git/PEER'
              target='_blank'
            >
              Peer Repository
            </Anchor>
          </p>
          <hr />
        </WindowContent>
      </Window>
    </ReactModal>
  );
}
