<template>
    <router-view></router-view>
    <Sidebar v-model:visible="addIsOpen" position="full" @hide="setPanelClosedInStore">
        <add-musical @saved="closeAddPanel"></add-musical>
    </Sidebar>
</template>
<script lang='ts'>
    import { defineComponent, provide, onMounted, ref, watch } from 'vue'
    import { useStore } from 'vuex'
    import Sidebar from 'primevue/sidebar'
    import AddMusical from '@/components/AddMusical.vue'
    import { moduleKey, storeKey } from '@/store'
    
    export default defineComponent({
        name: 'Musicals',
        components: {
            Sidebar,
            AddMusical
        },
        setup() {
            const addIsOpen = ref(false)
            provide(moduleKey, 'musicals')
            const store = useStore(storeKey)

            onMounted(() => {
                store.dispatch('musicals/loadMusicals')
            })


            watch(() => store.state.ui.addPanelOpen, (current) => {
                addIsOpen.value = current
            })

            const setPanelClosedInStore = () => {
                store.commit('ui/setAddPanelOpen', false)
            }

            const closeAddPanel = () => {
                setPanelClosedInStore()
            }
            
            return {
                addIsOpen,
                setPanelClosedInStore,
                closeAddPanel
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
