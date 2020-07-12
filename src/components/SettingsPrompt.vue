<template>
    <b-modal
        id="SettingsPrompt"
        title="Game Settings"
        ok-title="Start Game"
        ok-only
        @ok="startGame"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
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
                v-model="selectSymbol"
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
        selectSymbol: 'X',
        optionsSymbol: [
          { text: 'X', value: 'X' },
          { text: 'O', value: 'O' },
        ]
      }
    },
    methods: {
        handleSubmit() {},
        startGame() {
            this.SET_GAME_ACTIVE(true);
        },
        ...mapMutations([
            'SET_GAME_ACTIVE',
        ]),
    }
}
</script>