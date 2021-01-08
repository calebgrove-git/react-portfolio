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
import squish from '../images/squish1.jpg';
import peer from '../images/peers.png';
import noteful from '../images/noteful1.jpg';
import rsvp from '../images/rsvp.png';
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
          <h2 style={{ fontSize: '20px' }}>This Portfolio</h2>
          <p>
            {' '}
            GitHub Repo:
            <Anchor
              href='https://github.com/calebgrove-git/react-portfolio'
              target='_blank'
            >
              Portfolio Repository
            </Anchor>
          </p>
          <hr />
          <h2 style={{ fontSize: '20px' }}>Squish</h2>
          <p>- A web app for creating, tracking, and marking bugs complete -</p>
          <img src={squish} alt='squish screenshot' style={{ width: '100%' }} />
          <p>
            {' '}
            Live App:
            <Anchor
              href='https://bug-tracker-qdwfzsjlb.vercel.app/'
              target='_blank'
            >
              Squish
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Front-End Repo:
            <Anchor
              href='https://github.com/calebgrove-git/bug-tracker'
              target='_blank'
            >
              Squish Repository
            </Anchor>
          </p>
          <p>
            GitHub Server Repo:
            <Anchor
              href='https://github.com/calebgrove-git/bug-tracker-api'
              target='_blank'
            >
              Squish Server
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
          <h2 style={{ fontSize: '20px' }}>Noteful</h2>
          <p>- A web app for storing notes -</p>
          <img
            src={noteful}
            alt='noteful screenshot'
            style={{ width: '100%' }}
          />
          <p>
            {' '}
            Live App:
            <Anchor href='https://noteful-blush.vercel.app/' target='_blank'>
              Noteful
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Front-End Repo:
            <Anchor
              href='https://github.com/calebgrove-git/noteful'
              target='_blank'
            >
              Noteful Repository
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Server Repo:
            <Anchor
              href='https://github.com/calebgrove-git/noteful-api'
              target='_blank'
            >
              Noteful Server Repository
            </Anchor>
          </p>
          <hr />
          <h2 style={{ fontSize: '20px' }}>RSVP</h2>
          <p>
            - A web app for managing calendar events, invites, and contacts -
          </p>
          <img src={rsvp} alt='noteful screenshot' style={{ width: '100%' }} />
          <p>
            {' '}
            Live App:
            <Anchor href='https://rsvp-cal.herokuapp.com' target='_blank'>
              RSVP
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Front-End Repo:
            <Anchor
              href='https://github.com/calebgrove-git/rsvp-client'
              target='_blank'
            >
              RSVP Repository
            </Anchor>
          </p>
          <p>
            {' '}
            GitHub Server Repo:
            <Anchor
              href='https://github.com/calebgrove-git/rsvpbackend'
              target='_blank'
            >
              RSVP Server Repository
            </Anchor>
          </p>
          <hr />
        </WindowContent>
      </Window>
    </ReactModal>
  );
}
