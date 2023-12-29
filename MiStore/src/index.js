import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 2. this is js of main 
ReactDOM.render(
  <React.StrictMode>
    {/* this is jsx - js+html */}
    <App />
    {/* App is component */}
    
  </React.StrictMode>,
  // dom manipulation
  document.getElementById('root')
);
