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
import { mapActions } from 'vuex';

export default {
    name: 'Board',
    data() {
        return {}
    },
    methods: {
        ...mapActions(['handleClick']),
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