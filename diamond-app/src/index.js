import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DiamondDashboard from "./Dashboard";
import TestPage from "./TestPage";
require("jspolyfill-array.prototype.findIndex");

ReactDOM.render(<DiamondDashboard/>, document.getElementById('root'));
// ReactDOM.render(<TestPage />, document.getElementById('root'));
serviceWorker.unregister();
