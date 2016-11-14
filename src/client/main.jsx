import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';

import './workers/currentPosition';

injectTapEventPlugin();

const appContainer = document.querySelector('.app-container');

ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, appContainer);
