import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

import './workers/Geolocation';

const appContainer = document.querySelector('.app-container');

ReactDOM.render(<App />, appContainer);
