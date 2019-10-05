import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DiamondDashboard from "./Dashboard";
require("jspolyfill-array.prototype.findIndex");

ReactDOM.render(<DiamondDashboard />, document.getElementById('root'));
serviceWorker.unregister();
