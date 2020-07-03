<template>
    <div class="game-board">
        <div id="1">
            <button class="box">X</button>
        </div>
        <div id="2">
            <button class="box">X</button>
        </div>
        <div id="3">
            <button class="box">X</button>
        </div>
        <div id="4">
            <button class="box">X</button>
        </div>
        <div id="5">
            <button class="box">X</button>
        </div>
        <div id="6">
            <button class="box">X</button>
        </div>
        <div id="7">
            <button class="box">X</button>
        </div>
        <div id="8">
            <button class="box">X</button>
        </div>
        <div id="9">
            <button class="box">X</button>
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
            playerSymbol: 'O'
        }
    },
    methods: {}
}
</script>
<style scoped>
.game-board {
    display: grid;
    grid-template-columns: repeat(3, 10%);
    justify-content: center;

}
.box {
    font-size: 4rem;
    line-height: 7rem;
    cursor: pointer;
    border: solid;
    width: 146px;
}
</style>