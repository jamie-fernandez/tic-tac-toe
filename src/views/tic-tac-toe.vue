<template>
    <div>
      <p class="title">Tic Tac Toe</p>
      <SettingsPrompt/>
      <Board/>
    </div>
</template>

<script>
import Board from '@/components/Board.vue'
import SettingsPrompt from '@/components/SettingsPrompt.vue'
export default {
    name: 'tic-tac-toe',
    components: {
        Board,
        SettingsPrompt,
    },
}
</script>