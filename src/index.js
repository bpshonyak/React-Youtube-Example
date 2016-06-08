// import React
import React from 'react';
import ReactDOM from 'react-dom';

// Youtube API Key
const API_KEY = "AIzaSyACpKIVaL4UeXbKhagm3PKaViUwkSh-yhM";

// Create a new component. This compenent shold
// prodce some HTML.
const App = () => {
  return <div>Hi!</div>;
}

// Render an App component instance.
ReactDOM.render(<App />, document.querySelector('#container'));
