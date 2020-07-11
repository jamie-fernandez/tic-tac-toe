<template>
    <div class="game-board">
        <button data-cell-index="1" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="2" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="3" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="4" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="5" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="6" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="7" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="8" class="box" @click="handleClick($event)"></button>
        <button data-cell-index="9" class="box" @click="handleClick($event)"></button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Board',
    data() {
        return {
            statusDisplay: '',
            messages: {
                'winner': `Player ${this.$store.state.currentPlayer} has won!`,
                'turn': `It's ${this.$store.state.currentPlayer}/'s turn`,
                'draw': 'Game ended in a draw!',
            },
        }
    },
    methods: {
        handleClick($event) {
            const clickedCell = $event.target;
            const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
            if (this.$store.state.gameState[clickedCellIndex] !== '' || !this.$store.state.gameActive) {
                return;
            }
            this.handleCellPlayed(clickedCell, clickedCellIndex);
            this.handleResultValidation();
        },
        handleCellPlayed(clickedCell, clickedCellIndex) {
            this.SET_GAME_STATE(clickedCellIndex, this.$store.state.currentPlayer);
            clickedCell.innerHTML = this.$store.state.currentPlayer;
        },
        handleResultValidation() {
            //Win Check
            let roundWon = false;
            for (let i = 0; i <= 7; i++) {
                const winCondition = this.$store.state.winConditions[i];
                let a = this.$store.state.gameState[winCondition[0]];
                let b = this.$store.state.gameState[winCondition[1]];
                let c = this.$store.state.gameState[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    roundWon = true;
                    break
                }
            }

            if (roundWon) {
                this.statusDisplay = this.messages.winner;
                this.$store.state.gameActive = false;
                return;
            }

            //Draw Check
            let roundDraw = !this.$store.state.gameState.includes('');
            if (roundDraw) {
                this.statusDisplay = this.messages.draw;
                this.$store.state.gameActive = false;
                return;
            }

            this.handlePlayerChange();
        },
        // Change handlePlayerChange and handleRestartGame to use Mutations
        handlePlayerChange() {
            this.$store.state.currentPlayer = this.$store.state.currentPlayer === 'X' ? 'O' : 'X';
            this.statusDisplay = this.messages.turn;
        },
        handleRestartGame(context) {
            context.commit('SET_GAME_ACTIVE', false);
            context.commit('SET_CURRENT_PLAYER', 'X');
            context.commit('SET_GAME_STATE', ['', '', '', '', '', '', '', '', '']);
            this.statusDisplay = this.messages.turn;
            document.querySelectorAll('.box').forEach(cell => cell.innerHTML = '');
        },
        ...mapMutations(['SET_GAME_STATE']),
    }
}
</script>
<style>
.game-board {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 10%);
}
.box {
    font-family: "Permanent Marker", cursive;
    width: 142px;
    height: 100px;
    box-shadow: 0 0 0 1px #333333;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 100px;
    font-size: 60px;
}
</style>