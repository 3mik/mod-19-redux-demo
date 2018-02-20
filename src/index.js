import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as a from './action.js';
import reducer from './reducer.js';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  );

store.dispatch(a.addComment('pierwszy komentarz'));
store.dispatch(a.addComment('drugi komentarz'));