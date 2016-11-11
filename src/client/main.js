import React from 'react';
import ReactDOM from 'react-dom';
import AlertPage from '../components/AlertPage';
import MapPage from '../components/MapPage';

const appContainer = document.querySelector('.app-container');

ReactDOM.render(<MapPage />, appContainer);
