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
<style scoped>
.game-board 
{
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}
</style>