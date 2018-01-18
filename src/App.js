import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import ReactDOM from 'react-dom';
// import mp3_file from './Airbag.mp3';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./poorgrrrl2.jpg" className="App-logo" alt="crying eyes" />
          <h1 className="App-title">POORGRRRL</h1>
        </header>
        <p className="App-intro">
          WHY ARE YOU CRYING?
        </p>

      </div>

    );
  }
}
class Player extends React.Component {
	render()  {
		return (
			<div className="Player">
				<div className="Background"></div>
				<div className="Header"><div className="Title">Now playing</div></div>
				<div className="Artwork"></div>
				<TrackInformation />
				<audio>
					<source src="./Airbag.mp3" />
				</audio>
			</div>
		)
	}
}

class TrackInformation extends React.Component {
	render()  {
		return (
			<div className="TrackInformation">
				<div className="Name">We Were Young</div>
				<div className="Artist">Odesza</div>
				<div className="Album">Summer's Gone (2012)</div>
			</div>
		)
	}
};

// class Scrubber extends React.Component {
// 	render()  {
// 		return (
// 			<div className="Scrubber">
// 				<div className="Scrubber-Progress"></div>
// 			</div>
// 		)
// 	}
// };
//
// class Controls extends React.Component {
// 	render() {
// 		return (
// 			<div className="Controls">
// 				<div className="Button">
// 					<i className="fa fa-fw fa-play"></i>
// 				</div>
// 			</div>
// 		)
// 	}
// };
//
// class Timestamps extends React.Component {
// 	render() {
// 		return (
// 			<div className="Timestamps">
// 				<div className="Time Time--current">0</div>
// 				<div className="Time Time--total">192</div>
// 			</div>
// 		)
// 	}
// };


// Render the UI
ReactDOM.render(
	<Player />,
	document.querySelector('body')
);

export default App;
