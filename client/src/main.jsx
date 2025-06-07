import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// // import { store } from './redux/store.js';
// // import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     {/* <PersistGate loading={null} persistor={persistor} > */}
//     <App />
//     {/* </PersistGate> */}

//   </Provider>
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//     {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//   <App />
// </PersistGate> */}

// {/* <PersistGate loading={<div>Loading persisted state...</div>} persistor={persistor}>
//       <App />
//     </PersistGate> */}

//   </Provider>
// );



import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);