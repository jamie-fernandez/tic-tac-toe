import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters: {},
    state: {
        isGameOver: false,
        isPlayersTurn: true,
        gameActive: true, // User will need a way to start game later
        computerSymbol: 'O',
        playerSymbol: 'X',
        currentPlayer: 'X',
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
    actions: {},
    mutations: {
        SET_GAME_ACTIVE(state, value) {
            state.gameActive = value;
        },
        SET_CURRENT_PLAYER(state, value) {
            state.currentPlayer = value;
        },
        SET_GAME_STATE(state, {index, value }) {
            state.gameState[index] = value
        },
    },
});
