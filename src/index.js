import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



const Main = ()=> (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<Main/>,  document.getElementById('root'));

