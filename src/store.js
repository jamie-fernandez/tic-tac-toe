import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isGameOver: false,
        isPlayersTurn: true,
        computerSymbol: 'O',
        playerSymbol: 'X',
        currentPlayer: 'X',
        gameState: ['', '', '', '', '', '', '', '', ''],
        winningMessage: `Player ${this.currentPlayer} has won!`,
        currentPlayerTurn: `It's ${this.currentPlayer}'s turn`,
        drawMessage: 'Game ended in a draw!',
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
    getters: {},
    actions: {},
    mutations: {}
})
