import React from 'react';
import {
  Window,
  WindowHeader,
  Button,
  Toolbar,
  WindowContent,
  TextField,
} from 'react95';
import './AboutMeFolder.css';
import ReactModal from 'react-modal-resizable-draggable';
export default function ContactForm(props) {
  return (
    <ReactModal
      initWidth={600}
      initHeight={600}
      className={'contact'}
      isOpen={props.isOpen}
      disableVerticalResize={true}
      disableHorizontalResize={true}
      top={200}
    >
      <Window className='window' style={{ width: '600px', height: '600px' }}>
        <WindowHeader className='window-header'>
          <span>Contact Me</span>
          <Button
            onClick={() => {
              props.clickFunction(false);
              props.removeFromOpen('Contact');
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
          <form
            action='mailto:calebgrove41@gmail.com'
            method='GET'
            target='_blank'
          >
            <h1 class='title'>Start Email to Caleb Grove</h1>
            <hr />
            <div class='field'>
              <label class='label' for='subject'>
                Email Subject
              </label>
              <TextField
                name='subject'
                id='subject'
                type='text'
                class='input'
              />
            </div>
            <div class='field'>
              <label class='label' for='body'>
                Email Body
              </label>
              <TextField
                name='body'
                id='body'
                style={{ height: '300px' }}
                multiline={true}
              ></TextField>
            </div>
            <div>
              <Button type='submit' class='button is-primary'>
                Create Email
              </Button>
            </div>
          </form>
        </WindowContent>
      </Window>
    </ReactModal>
  );
}
