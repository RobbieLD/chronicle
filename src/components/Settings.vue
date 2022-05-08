<template>
    <div class="settings">
        <h2>Settings</h2>
        <div class="p-fluid settings__panel">
            <div class="p-field settings__row">
                <label for="showFlagged">Show Flagged</label>
                <InputSwitch class="settings__field" v-model="showFlagged" />
            </div>
            <div class="p-field settings__row">
                <label for="showFlagged">Background Query</label>
                <InputText class="settings__field" v-model="backgroundQuery" />
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
    import { defineComponent, onBeforeUnmount, ref } from 'vue'
    import InputSwitch from 'primevue/inputswitch'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import InputText from 'primevue/inputtext'
        
    export default defineComponent({
        name: 'Settings',
        components: {
            InputSwitch,
            InputText
        },
        setup() {
            const store = useStore(storeKey)
            
            const backgroundQuery = ref<string>(store.state.auth.settings.backgroundQuery)
            const showFlagged = ref<boolean>(store.state.auth.settings.showFlagged)

            onBeforeUnmount(() => {
                // Save the state to the store
                store.commit('ui/setSettingsPanelOpen', false)
                store.dispatch('auth/updateProfile', {
                    backgroundQuery: backgroundQuery.value,
                    showFlagged: showFlagged.value
                })
            })


            return {
                showFlagged,
                backgroundQuery
            }
        },
    })
</script>
<style lang='scss' scoped>
    .settings {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 20em;

        &__field {
            margin-left: 0.5em;
        }

        &__row {
            margin-top: 0.5em;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__panel {
            width: 100%;
        }
    }
</style>
