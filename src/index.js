import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './Airbag.mp3';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import Player from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(
	<Player />,
	document.querySelector('body')
);
