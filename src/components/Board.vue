<template>
    <div class="game-board">
        <button data-cell="1" class="box" @click="handleClick($event)"></button>
        <button data-cell="2" class="box" @click="handleClick($event)"></button>
        <button data-cell="3" class="box" @click="handleClick($event)"></button>
        <button data-cell="4" class="box" @click="handleClick($event)"></button>
        <button data-cell="5" class="box" @click="handleClick($event)"></button>
        <button data-cell="6" class="box" @click="handleClick($event)"></button>
        <button data-cell="7" class="box" @click="handleClick($event)"></button>
        <button data-cell="8" class="box" @click="handleClick($event)"></button>
        <button data-cell="9" class="box" @click="handleClick($event)"></button>
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