<template>
    <div>
        <div class="status">
            {{ statusDisplay }}
        </div>
        <div class="game-board">
            <button data-cell-index="0" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="1" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="2" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="3" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="4" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="5" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="6" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="7" class="box" @click="handleClick($event)"></button>
            <button data-cell-index="8" class="box" @click="handleClick($event)"></button>
        </div>
        <div class="options">
            <button @click="handleRestartGame()">Restart Game</button>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'Board',
    data() {
        return {
            statusDisplay: '',
            clickedCell: '',
            clickedCellIndex: '',
        }
    },
    computed: {
        ...mapActions([
            'winnerMessage',
            'turnMessage',
            'drawMessage',
        ])
    },
    methods: {
        handleClick($event) {
            this.clickedCell = $event.target;
            this.clickedCellIndex = parseInt(this.clickedCell.getAttribute('data-cell-index'));
            if (this.$store.state.gameState[this.clickedCellIndex] !== '' || !this.$store.state.gameActive) {
                return;
            }

            this.SET_GAME_STATE({index: this.clickedCellIndex, value: this.$store.state.currentPlayer});
            this.handleResultValidation();
            this.clickedCell.innerHTML = this.$store.state.currentPlayer;
        },
        async handleResultValidation() {
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
                this.statusDisplay = await this.winnerMessage;
                this.SET_GAME_ACTIVE(false);
                return;
            }

            //Draw Check
            let roundDraw = !this.$store.state.gameState.includes('');
            if (roundDraw) {
                this.statusDisplay = await this.drawMessage;
                this.SET_GAME_ACTIVE(false);
                return;
            }

            this.handlePlayerChange();
        },
        async handlePlayerChange() {
            this.SET_CURRENT_PLAYER(this.$store.state.currentPlayer === 'X' ? 'O' : 'X');
            this.statusDisplay = await this.turnMessage;
        },
        async handleRestartGame() {
            this.SET_GAME_ACTIVE(true);
            this.SET_CURRENT_PLAYER('X');
            this.RESET_GAME_STATE();
            this.statusDisplay = await this.turnMessage;
            document.querySelectorAll('.box').forEach(cell => cell.innerHTML = '');
        },
        ...mapMutations([
            'SET_GAME_STATE',
            'SET_GAME_ACTIVE',
            'SET_CURRENT_PLAYER',
            'RESET_GAME_STATE'
        ]),
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