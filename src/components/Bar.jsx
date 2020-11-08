import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider,
  Cutout,
  Tooltip,
} from 'react95';
import wave from '../images/wave.png';

export default function Bar(props) {
  useEffect(() => {
    function checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
      var t = setTimeout(function () {
        startTime();
      }, 500);
    }
    startTime();

    return () => {};
  }, []);
  const [open, setOpen] = useState(false);
  const minmizedItems = props.allOpen.map((item, i) => {
    return (
      <Button
        style={{
          position: 'relative',
          width: '10vw',
          fontWeight: 'bold',
          marginLeft: '5px',
        }}
        onClick={() => props[item](true)}
        key={item}
      >
        {item}
      </Button>
    );
  });
  return (
    <AppBar
      style={{
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        top: '95%',
        width: '100%',
      }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img src={wave} style={{ height: '2vh' }} alt='logo png' />
            Start
          </Button>
          {minmizedItems}
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '-400%',
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>Profile</ListItem>
              <ListItem>My account</ListItem>
              <Divider />
              <ListItem disabled>Logout</ListItem>
            </List>
          )}
        </div>
        <Cutout style={{ width: '10vw', height: '100%' }}>
          <p
            id='time'
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              marginTop: '0.2rem',
            }}
          ></p>
        </Cutout>
      </Toolbar>
    </AppBar>
  );
}
