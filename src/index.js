import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";

import SearchBar from "./components/search_bar";

const createStoreWithMiddleware = applyMiddleware()(createStore);

//const API_KEY = 'AIzaSyBaTOnWpE3cjsynjrlisBE9dGeYm7xDN9s';

// testing App component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
