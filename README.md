# React Checkers
A client-side Checkers board game featuring React and Redux.
---

##Contents
---
    * Description
    * What I Used
    * Challenges
    * Stretch Goals
    * Code Snippets

##Description
---
This solo project is a client-side Checkers game that is rendered entirely using React and Redux.

It is currently only playable locally, but this is an on going project I will continue to work on.

##What I Used
---
    * JavaScript
    * NodeJS
    * React
    * Redux

##Challenges
---
This project presented many challenges I did not forsee when starting, but ultimately forced me to really dig into React using Redux for state management.

    * Challenge 1: Planning Phase

Admittedly, the planning phase was not as extensive as it should have been. This was partly the result of not fully grasping the concept of using Redux, but the bigger lesson learned came from underestimating just how much code might go into a simple game of Checkers. As a result, the final product could use some cleaning, but it was well worth the knowledge gained.

    * Challenge 2: Redux

Conceptually, I did not understand Redux enough at the beginning. After many hours of work, I was awarded a few lightbulb moments that really put the pieces together. Hands on experience with it was the best way for me to learn.

    * Challenge 3: Piece Jumps

When a piece is able to jump the opposite player's piece, it was surprisingly difficult to come up with a solution that worked. The way I solved it was by getting the currently selected piece's location and assumed the basic diagonally adjacent moves were available. I passed those moves into a function that checks to see if there are any pieces there. If there are, and it is the opposite color, it then checks the next diagonally adjacent square in that direction for any pieces. If there aren't any, it highlights that div green.

##Stretch Goals
---
This is a project I am particularly invested in, so these may have been stretch goals, but they are future goals for this application.

    * Full statistics workup (move times, total wins/losses, rankings, etc)
    * Full user login
    * Server side API for storing user info
    * SocketIO for online play
    * Eventually adapt into Chess

##Code Snippets
---

The state management comes from the board array and pieces array. When executing any moves, it updates necessary values in the state and rerenders the board.
```javascript
  board: [
      [
        { id: 0, data: { x: 0, y: 0, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 1, data: { x: 0, y: 1, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 2, data: { x: 0, y: 2, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 3, data: { x: 0, y: 3, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 4, data: { x: 0, y: 4, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 5, data: { x: 0, y: 5, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 6, data: { x: 0, y: 6, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 7, data: { x: 0, y: 7, available: false, hasPiece: true, pieceColor: 'black' } }
      ],
      [
        { id: 0, data: { x: 1, y: 0, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 1, data: { x: 1, y: 1, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 2, data: { x: 1, y: 2, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 3, data: { x: 1, y: 3, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 4, data: { x: 1, y: 4, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 5, data: { x: 1, y: 5, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 6, data: { x: 1, y: 6, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 7, data: { x: 1, y: 7, available: false, hasPiece: false, pieceColor: null } }
      ],
      [
        { id: 0, data: { x: 2, y: 0, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 1, data: { x: 2, y: 1, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 2, data: { x: 2, y: 2, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 3, data: { x: 2, y: 3, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 4, data: { x: 2, y: 4, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 5, data: { x: 2, y: 5, available: false, hasPiece: true, pieceColor: 'black' } }, 
        { id: 6, data: { x: 2, y: 6, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 7, data: { x: 2, y: 7, available: false, hasPiece: true, pieceColor: 'black' } }
      ],
      [
        { id: 0, data: { x: 3, y: 0, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 1, data: { x: 3, y: 1, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 2, data: { x: 3, y: 2, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 3, data: { x: 3, y: 3, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 4, data: { x: 3, y: 4, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 5, data: { x: 3, y: 5, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 6, data: { x: 3, y: 6, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 7, data: { x: 3, y: 7, available: false, hasPiece: false, pieceColor: null } }
      ],
      [
        { id: 0, data: { x: 4, y: 0, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 1, data: { x: 4, y: 1, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 2, data: { x: 4, y: 2, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 3, data: { x: 4, y: 3, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 4, data: { x: 4, y: 4, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 5, data: { x: 4, y: 5, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 6, data: { x: 4, y: 6, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 7, data: { x: 4, y: 7, available: false, hasPiece: false, pieceColor: null } }
      ],
      [
        { id: 0, data: { x: 5, y: 0, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 1, data: { x: 5, y: 1, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 2, data: { x: 5, y: 2, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 3, data: { x: 5, y: 3, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 4, data: { x: 5, y: 4, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 5, data: { x: 5, y: 5, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 6, data: { x: 5, y: 6, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 7, data: { x: 5, y: 7, available: false, hasPiece: false, pieceColor: null } }
      ],
      [
        { id: 0, data: { x: 6, y: 0, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 1, data: { x: 6, y: 1, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 2, data: { x: 6, y: 2, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 3, data: { x: 6, y: 3, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 4, data: { x: 6, y: 4, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 5, data: { x: 6, y: 5, available: false, hasPiece: true, pieceColor: 'red' } }, 
        { id: 6, data: { x: 6, y: 6, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 7, data: { x: 6, y: 7, available: false, hasPiece: true, pieceColor: 'red' } }
      ],
      [
        { id: 0, data: { x: 7, y: 0, available: false, hasPiece: false, pieceColor: 'red' } }, 
        { id: 1, data: { x: 7, y: 1, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 2, data: { x: 7, y: 2, available: false, hasPiece: false, pieceColor: 'red' } }, 
        { id: 3, data: { x: 7, y: 3, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 4, data: { x: 7, y: 4, available: false, hasPiece: false, pieceColor: 'red' } }, 
        { id: 5, data: { x: 7, y: 5, available: false, hasPiece: false, pieceColor: null } }, 
        { id: 6, data: { x: 7, y: 6, available: false, hasPiece: false, pieceColor: 'red' } }, 
        { id: 7, data: { x: 7, y: 7, available: false, hasPiece: false, pieceColor: null } }
      ]
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
```

The main render function from Board.js which passes down all the necessary data into props for subsequent components.
When calling getAvailableMoves(), it starts the chain that ultimately highlights the appropriate div's green if available.
```javascript
    render = () => {

        // Iterate over the state board array
        let newBoard = this.props.state.board.map((row, x) => {
            let evenOdd = '';
            if ((x + 1) % 2 === 0) {
                evenOdd = 'row Even'
            } else {
                evenOdd = 'row Odd'
            }

            return (
                <div key={x} className={evenOdd}>
                    {row.map((col, y) => { // Then iterate over each array in the state board array
                        const rowColumn = `${x}${y}`
                        let ifAvailable = 'col';
                        if (this.props.state.board[x][y].data.available) {
                            ifAvailable = 'col available';
                        }
                        // Set up conditional statements for mounting the Piece component
                        for (let i = 0; i < this.props.state.pieces.length; i++) {
                            if (x === this.props.state.pieces[i].currentRow && y === this.props.state.pieces[i].currentColumn && this.props.state.pieces[i].active === true) {
                                return (
                                    <div id={rowColumn} className={ifAvailable}>
                                        <div onClick={e => {
                                                        this.getCurrentPlayer(this.props.state.pieces[i].color) ?
                                                        this.getAvailableMove(x, y, this.props.state.pieces[i].color) :
                                                        alert('Quit cheating, it isn\'t your turn...')}}>
                                            <Piece 
                                                id={this.props.state.pieces[i].id} 
                                                color={this.props.state.pieces[i].color} 
                                                currentRow={this.props.state.pieces[i].currentRow} 
                                                currentColumn={this.props.state.pieces[i].currentColumn}
                                                active={this.props.state.pieces[i].active}
                                                isKing={this.props.state.pieces[i].isKing}
                                            />
                                        </div>
                                    </div>
                                )
                            }                          
                        }
                        return (
                            <div 
                                key={y} 
                                id={rowColumn} 
                                className={ifAvailable} 
                                onClick={e => {
                                    this.props.state.board[x][y].data.available ? 
                                    this.movePiece(this.props.state.pendingMove, this.props.state.board[x][y]) :
                                    alert('That space is unavailable for the current piece selected, please select a green space.')}}>
                            </div>
                        )
                    })}
                </div>
            )
        })
        return (
            <div id="board">
                <div className="Board container">
                {newBoard}
                </div>
                <PlayerRed 
                    name={this.props.state.players[0].name} 
                    winner={this.props.state.players[0].winner} 
                    numPieces={this.props.state.players[0].numPieces}
                    currentTurn={this.props.state.players[0].currentTurn} 
                />
                <PlayerBlack 
                    name={this.props.state.players[1].name} 
                    winner={this.props.state.players[1].winner} 
                    numPieces={this.props.state.players[1].numPieces}
                    currentTurn={this.props.state.players[1].currentTurn} 
                />
            </div>
            
        )
    }
```