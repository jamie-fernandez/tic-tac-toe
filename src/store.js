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
            'draw': (_currentPlayer) => 'Game ended in a draw!',
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
            const clickedCell = $event.target;
            const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
            if (context.state.gameState[clickedCellIndex] !== '' || !context.state.gameActive) {
                return;
            }
            this.handleCellPlayed(context, clickedCell, clickedCellIndex);
            this.handleResultValidation(context);
        },
        handleCellPlayed(context, clickedCell, clickedCellIndex) {
            context.state.gameState[clickedCellIndex] = context.state.currentPlayer;
            clickedCell.innerHTML = context.state.currentPlayer;
        },
        handleResultValidation(context) {
            //Win Check
            let roundWon = false;
            for (let i = 0; i <= 7; i++) {
                const winCondition = context.state.winningConditions[i];
                let a = context.state.gameState[winCondition[0]];
                let b = context.state.gameState[winCondition[1]];
                let c = context.state.gameState[winCondition[2]];
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
                context.state.gameActive = false;
                return;
            }

            //Draw Check
            let roundDraw = !context.state.gameState.includes('');
            if (roundDraw) {
                this.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('draw');
                context.state.gameActive = false;
                return;
            }

            this.handlePlayerChange(context);
        },
        handlePlayerChange(context) {
            context.state.currentPlayer = context.state.currentPlayer === 'X' ? 'O' : 'X';
            this.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('turn');
        },
        handleRestartGame(context) {
            context.state.gameActive = true;
            context.state.currentPlayer = 'X';
            context.state.statusDisplay.innerHTML = context.state.messages[this.currentPlayer]('turn');
            context.state.gameState = ['', '', '', '', '', '', '', '', ''];
            document.querySelectorAll('.box').forEach(cell => cell.innerHTML = '');
        },
    },
});
