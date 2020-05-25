<template>
    <div class="game-board">
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
        <div class="box">X</div>
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