import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DiamondDashboard from "./Dashboard"

ReactDOM.render(<DiamondDashboard />, document.getElementById('root'));
serviceWorker.unregister();
