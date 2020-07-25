import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isGameOver: false,
        isPlayersTurn: true,
        gameActive: false,
        opponentSymbol: '',
        opponentType: '',
        playerSymbol: '',
        currentPlayer: '',
        gameState: ['', '', '', '', '', '', '', '', '', ''],
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
        winnerMessage() {
            return `Player ${this.state.currentPlayer} has won!`;
        },
        turnMessage() {
            return `It's ${this.state.currentPlayer}'s turn`;
        },
        drawMessage() {
            return `Game ended in a draw!`;
        },
    },
    mutations: {
        SET_OPPONENT_TYPE(state, value) {
            state.opponentType = value;
        },
        SET_OPPONENT_SYMBOL(state, value) {
            state.opponentSymbol = value;
        },
        SET_PLAYER_SYMBOL(state, value) {
            state.playerSymbol = value;
        },
        SET_GAME_ACTIVE(state, value) {
            state.gameActive = value;
        },
        SET_CURRENT_PLAYER(state, value) {
            state.currentPlayer = value;
        },
        SET_GAME_STATE(state, {index, value }) {
            state.gameState[index] = value;
        },
        RESET_GAME_STATE(state) {
            state.gameState = ['', '', '', '', '', '', '', '', '', ''];
        },
    },
});
