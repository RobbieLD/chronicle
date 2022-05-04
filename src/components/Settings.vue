<template>
    <div class="settings">
        <h2>Settings</h2>
        <div class="p-fluid settings__panel">
            <div class="p-field settings__row">
                <label for="showFlagged">Show Flagged</label>
                <InputSwitch class="settings__field" v-model="showFlagged" />
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
    import { computed, defineComponent } from 'vue'
    import InputSwitch from 'primevue/inputswitch'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import Settings from '@/models/settings'
        
    export default defineComponent({
        name: 'Settings',
        components: {
            InputSwitch
        },
        setup() {
            const store = useStore(storeKey)
            
            const save = (args: Partial<Settings>) => {
                store.commit('auth/setProfile', args)
            }

            const showFlagged = computed({
                get(): boolean {
                    return store.state.auth.settings.showFlagged
                },
                set(v: boolean): void {
                    save({ showFlagged: v })
                }
            })


            return {
                showFlagged
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
