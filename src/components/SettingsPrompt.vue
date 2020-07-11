<template>
    <b-modal
        id="SettingsPrompt"
        title="Game Settings"
        ok-title="Start Game"
        ok-only
        @ok="startGame"
    >
        <p class="my-4">Hello from modal!</p>
    </b-modal>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'SettingsPrompt',
    methods: {
        startGame() {
            this.SET_GAME_ACTIVE(true);
        },
        ...mapMutations([
            'SET_GAME_ACTIVE',
        ]),
    }
}
</script>