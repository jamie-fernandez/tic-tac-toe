<template>
    <b-modal
        id="SettingsPrompt"
        title="Game Settings"
        ok-title="Start Game"
        ok-only
        no-close-on-esc
        no-close-on-backdrop
        hide-header-close
        @ok="startGame"
    >
      <form ref="form" @submit.prevent="startGame">
        <b-form-group
          label="Choose Opponent"
          label-for="opponent-input"
        >
            <b-form-radio-group
                id="opponent-radio-group"
                v-model="selectedOpponent"
                name="opponent-radio-options"
                :options="optionsOpponent"
            />
        </b-form-group>
        <b-form-group
          label="X or O"
          label-for="symbol-input"
        >
            <b-form-radio-group
                id="symbol-radio-group"
                v-model="selectedSymbol"
                name="symbol-radio-options"
                :options="optionsSymbol"
            />
        </b-form-group>
      </form>
    </b-modal>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'SettingsPrompt',
    data() {
      return {
        selectedOpponent: 'human',
        optionsOpponent: [
          { text: 'Human', value: 'human' },
          { text: 'Computer', value: 'computer' },
        ],
        selectedSymbol: 'X',
        optionsSymbol: [
          { text: 'X', value: 'X' },
          { text: 'O', value: 'O' },
        ],
      }
    },
    methods: {
        startGame() {
            let opponentSymbol = (this.selectedSymbol === 'X' ? 'O' : 'X');
            this.SET_PLAYER_SYMBOL(this.selectedSymbol);
            this.SET_OPPONENT_SYMBOL(opponentSymbol);
            this.SET_OPPONENT_TYPE(this.selectedOpponent);
            this.SET_CURRENT_PLAYER(this.selectedSymbol);
            this.SET_GAME_ACTIVE(true);
        },
        ...mapMutations([
            'SET_GAME_ACTIVE',
            'SET_PLAYER_SYMBOL',
            'SET_OPPONENT_SYMBOL',
            'SET_OPPONENT_TYPE',
            'SET_CURRENT_PLAYER'
        ]),
    }
}
</script>