import React, { useState } from 'react';
import logo from './cropped-big.png';

function Webcam () {
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 730;
	const WIDTH = 1910;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
				audio: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		
		<div className="app">
			 <div id="navbar has-text-centered">
  <nav class="navbar is-white has-shadow">
  
    <div class="navbar-menu is-active" id="nav-links">

      <div class="navbar-end">
	  	<a class="navbar-item has-text-info" target="_self" href="/">Liste des tests</a>
        <a class="navbar-item has-text-warning-dark" target="_self" href="/comment">Espace Commentaires</a>
        <a class="navbar-item has-text-success" target ="_self" href="/Panopticon">Panopticon</a>
        <a class="navbar-item has-text-danger" rel="noreferrer" target ="_self" href="https://3wa.fr/">Site Officiel 3WA</a>
      </div>
    </div>
  </nav>
  <script src="burger.js"/>
</div>
			<div className="app__container">
				<video
					height={HEIGHT}
					width={WIDTH}
					autoPlay
					className="app__videoFeed"
					controls
				></video>
			</div>
			<br/>
			<div className="app__input">
				{playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
			</div>
			<br/>
			<footer class="footer">
  <div class="content has-text-centered">
    <p>
	<img id='header' alt='' src={logo}></img>
    </p>
  </div>
</footer>
		</div>
		
	);

	
}

export default Webcam;
