import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters: {},
    mutations: {},
    state: {
        isGameOver: false,
        isPlayersTurn: true,
        gameActive: false,
        computerSymbol: 'O',
        playerSymbol: 'X',
        currentPlayer: 'X',
        gameState: ['', '', '', '', '', '', '', '', ''],
        messages: {
            'winner': (currentPlayer) => `Player ${currentPlayer} has won!`,
            'turn': (currentPlayer) => `It's ${currentPlayer}/'s turn`,
            'draw': (currentPlayer) => 'Game ended in a draw!',
        },
        winConditions: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
    },
    actions: {
        handleClick(context, $event) {
            console.log($event);
            const clickedCell = $event.target;
            const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
            if (this.gameState[clickedCellIndex] !== '' || !this.gameActive) {
                return;
            }
            this.handleCellPlayed(context, clickedCell, clickedCellIndex);
            this.handleResultValidation(context);
        },
        handleCellPlayed(context, clickedCell, clickedCellIndex) {
            this.gameState[clickedCellIndex] = this.currentPlayer;
            clickedCell.innerHTML = this.currentPlayer;
        },
        handleResultValidation(context) {
            //Win Check
            let roundWon = false;
            for (let i = 0; i <= 7; i++) {
                const winCondition = this.winningConditions[i];
                let a = this.gameState[winCondition[0]];
                let b = this.gameState[winCondition[1]];
                let c = this.gameState[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    roundWon = true;
                    break
                }
            }

            if (roundWon) {
                this.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('winner');
                this.gameActive = false;
                return;
            }

            //Draw Check
            let roundDraw = !this.gameState.includes('');
            if (roundDraw) {
                this.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('draw');
                this.gameActive = false;
                return;
            }

            this.handlePlayerChange(context);
        },
        handlePlayerChange(context) {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('turn');
        },
        handleRestartGame(context) {
            this.gameActive = true;
            this.currentPlayer = 'X';
            this.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('turn');
            this.gameState = ['', '', '', '', '', '', '', '', ''];
            document.querySelectorAll('.box').forEach(cell => cell.innerHTML = '');
        },
    },
});
