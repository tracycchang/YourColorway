

import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';


render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);


// import React from "react";
// import { createRoot } from "react-dom/client";
// import styles from "./styles.css";
// import App from "./App.jsx";

// const root = createRoot(document.querySelector('#root'));
// root.render(<App/>);