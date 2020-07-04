<template>
    <div class="game-board">
        <div id="1">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="2">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="3">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="4">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="5">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="6">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="7">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="8">
            <button class="box" @click="logic()">X</button>
        </div>
        <div id="9">
            <button class="box" @click="logic()">X</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Board',
    data() {
        return {
            isGameOver: false,
            isPlayersTurn: true,
            computerSymbol: 'X',
            playerSymbol: 'O',
        }
    },
    methods: {
        logic() {
            console.log();
        },
    }
}
</script>
<style scoped>
.game-board {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 10%);
}
.box {
    font-family: "Permanent Marker", cursive;
    width: 145px;
    height: 100px;
    box-shadow: 0 0 0 1px #333333;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 100px;
    font-size: 60px;
}
</style>