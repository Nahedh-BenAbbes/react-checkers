import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  board: [
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '']
  ],
  pieces: [
    { id: 1, currentRow: 0, currentColumn: 1, color: 'black' },
    { id: 2, currentRow: 0, currentColumn: 3, color: 'black' },
    { id: 3, currentRow: 0, currentColumn: 5, color: 'black' },
    { id: 4, currentRow: 0, currentColumn: 7, color: 'black' },
    { id: 5, currentRow: 1, currentColumn: 0, color: 'black' },
    { id: 6, currentRow: 1, currentColumn: 2, color: 'black' },
    { id: 7, currentRow: 1, currentColumn: 4, color: 'black' },
    { id: 8, currentRow: 1, currentColumn: 6, color: 'black' },
    { id: 9, currentRow: 2, currentColumn: 1, color: 'black' },
    { id: 10, currentRow: 2, currentColumn: 3, color: 'black' },
    { id: 11, currentRow: 2, currentColumn: 5, color: 'black' },
    { id: 12, currentRow: 2, currentColumn: 7, color: 'black' },
    { id: 13, currentRow: 5, currentColumn: 0, color: 'red' },
    { id: 14, currentRow: 5, currentColumn: 2, color: 'red' },
    { id: 15, currentRow: 5, currentColumn: 4, color: 'red' },
    { id: 16, currentRow: 5, currentColumn: 6, color: 'red' },
    { id: 17, currentRow: 6, currentColumn: 1, color: 'red' },
    { id: 18, currentRow: 6, currentColumn: 3, color: 'red' },
    { id: 19, currentRow: 6, currentColumn: 5, color: 'red' },
    { id: 20, currentRow: 6, currentColumn: 7, color: 'red' },
    { id: 21, currentRow: 7, currentColumn: 0, color: 'red' },
    { id: 22, currentRow: 7, currentColumn: 2, color: 'red' },
    { id: 23, currentRow: 7, currentColumn: 4, color: 'red' },
    { id: 24, currentRow: 7, currentColumn: 6, color: 'red' }
  ]
}


const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Board />
    </Provider>
  </React.StrictMode>,
  document.getElementById('board')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
