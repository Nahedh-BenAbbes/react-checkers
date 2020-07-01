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
    { id: 1, currentRow: 0, currentColumn: 1, color: 'black', isKing: false, active: true },
    { id: 2, currentRow: 0, currentColumn: 3, color: 'black', isKing: false, active: true },
    { id: 3, currentRow: 0, currentColumn: 5, color: 'black', isKing: false, active: true },
    { id: 4, currentRow: 0, currentColumn: 7, color: 'black', isKing: false, active: true },
    { id: 5, currentRow: 1, currentColumn: 0, color: 'black', isKing: false, active: true },
    { id: 6, currentRow: 1, currentColumn: 2, color: 'black', isKing: false, active: true },
    { id: 7, currentRow: 1, currentColumn: 4, color: 'black', isKing: false, active: true },
    { id: 8, currentRow: 1, currentColumn: 6, color: 'black', isKing: false, active: true },
    { id: 9, currentRow: 2, currentColumn: 1, color: 'black', isKing: false, active: true },
    { id: 10, currentRow: 2, currentColumn: 3, color: 'black', isKing: false, active: true },
    { id: 11, currentRow: 2, currentColumn: 5, color: 'black', isKing: false, active: true },
    { id: 12, currentRow: 2, currentColumn: 7, color: 'black', isKing: false, active: true },
    { id: 13, currentRow: 5, currentColumn: 0, color: 'red', isKing: false, active: true },
    { id: 14, currentRow: 5, currentColumn: 2, color: 'red', isKing: false, active: true },
    { id: 15, currentRow: 5, currentColumn: 4, color: 'red', isKing: false, active: true },
    { id: 16, currentRow: 5, currentColumn: 6, color: 'red', isKing: false, active: true },
    { id: 17, currentRow: 6, currentColumn: 1, color: 'red', isKing: false, active: true },
    { id: 18, currentRow: 6, currentColumn: 3, color: 'red', isKing: false, active: true },
    { id: 19, currentRow: 6, currentColumn: 5, color: 'red', isKing: false, active: true },
    { id: 20, currentRow: 6, currentColumn: 7, color: 'red', isKing: false, active: true },
    { id: 21, currentRow: 7, currentColumn: 0, color: 'red', isKing: false, active: true },
    { id: 22, currentRow: 7, currentColumn: 2, color: 'red', isKing: false, active: true },
    { id: 23, currentRow: 7, currentColumn: 4, color: 'red', isKing: false, active: true },
    { id: 24, currentRow: 7, currentColumn: 6, color: 'red', isKing: false, active: true }
  ]
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'REMOVE_PIECE':
      const updatedPiece = state.pieces.find(piece => {
        return piece.id === action.payload.id;
      })
      const remainingPiecesArray = state.pieces.map((piece, i) => {
        if ((i + 1) === updatedPiece) {
          piece = { ...piece, active: false }
        }
        return piece;
      })
      return {
        ...state,
        pieces: remainingPiecesArray
      }

    case 'MOVE_PIECE':
      return { ...state }

    case 'GET_AVAILABLE_MOVE':
      return { ...state }

    case 'KING':
      const kingPiece = state.pieces.find(piece => {
        return piece.id === action.payload.id;
      })
      const withKingPiecesArray = state.pieces.map((piece, i) => {
        if ((i + 1) === kingPiece) {
          piece = { ...piece, isKing: true }
        }
        return piece;
      })
      return {
        ...state,
        pieces: withKingPiecesArray
      }

    default:
      return state;
  }
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
