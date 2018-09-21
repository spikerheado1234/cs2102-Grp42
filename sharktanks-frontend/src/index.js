import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Components/TestComponent.jsx';
import Father from './Components/FatherComponent.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Father />, document.getElementById('root'));
registerServiceWorker();
