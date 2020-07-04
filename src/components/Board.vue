<template>
    <div class="game-board">
        <button id="1" class="box" @click="handleClick()">X</button>
        <button id="2" class="box" @click="handleClick()">X</button>
        <button id="3" class="box" @click="handleClick()">X</button>
        <button id="4" class="box" @click="handleClick()">X</button>
        <button id="5" class="box" @click="handleClick()">X</button>
        <button id="6" class="box" @click="handleClick()">X</button>
        <button id="7" class="box" @click="handleClick()">X</button>
        <button id="8" class="box" @click="handleClick()">X</button>
        <button id="9" class="box" @click="handleClick()">X</button>
    </div>
</template>
<script>
export default {
    name: 'Board',
    data() {
        return {}
    },
    methods: {
        handleClick() {
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
    width: 142px;
    height: 100px;
    box-shadow: 0 0 0 1px #333333;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 100px;
    font-size: 60px;
}
</style>