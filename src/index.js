import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card';
// import Cardlist from './Cardlist';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/>);
reportWebVitals();

// <React.StrictMode></React.StrictMode>