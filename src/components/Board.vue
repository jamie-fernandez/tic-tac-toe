<template>
    <div class="game-board">
        <div id="1" class="box">X</div>
        <div id="2" class="box">X</div>
        <div id="3" class="box">X</div>
        <div id="4" class="box">X</div>
        <div id="5" class="box">X</div>
        <div id="6" class="box">X</div>
        <div id="7" class="box">X</div>
        <div id="8" class="box">X</div>
        <div id="9" class="box">X</div>
    </div>
</template>
<script>
export default {
    name: 'keyboard',
    data() {
        return {
            isGameOver: false,
            isPlayersTurn: true,
            symbolComputer: '',
            symbolPlayer: ''
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
}
</style>