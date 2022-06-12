import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './cropped-big.png';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const Panopticon = () => {
  const classes = useStyles();

  return (

    <div className={classes.wrapper}>
          <div id="navbar has-text-centered">
  <nav class="navbar is-white has-shadow">
  
    <div class="navbar-menu is-active" id="nav-links">

      <div class="navbar-end">
      <a class="navbar-item has-text-info" target="_self" href="/">Liste des tests</a>
        <a class="navbar-item has-text-warning-dark" target="_self" href="/webcam">Testez votre webcam</a>
        <a class="navbar-item has-text-success" target ="_self" href="/comment">Espace Commentaires</a>
        <a class="navbar-item has-text-danger" rel="noreferrer" target ="_self" href="https://3wa.fr/">Site Officiel 3WA</a>
      </div>
    </div>
  </nav>
</div>
      <AppBar className={classes.appBar} position="static" color="inherit"> 
          
        <Typography variant="h2" align="center">Panopticon</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      <footer class="footer">
  <div class="content has-text-centered">
    <p>
    <img id='header' alt='' src={logo}></img>
    </p>
  </div>
</footer>
  </div> 

  );
};

export default Panopticon;