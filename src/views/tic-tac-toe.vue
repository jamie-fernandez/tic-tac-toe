<template>
    <div>
      <p class="title">Tic Tac Toe</p>
      <SettingsPrompt/>
      <Board/>
      <!-- <button @click="$bvModal.show('SettingsPrompt')"> Settings </button> -->
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
    mounted() {
        if (!this.$store.state.gameActive) {
            this.$bvModal.show('SettingsPrompt');
        }
    }
}
</script>