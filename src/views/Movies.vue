<template>
    <router-view></router-view>
    <Sidebar v-model:visible="addIsOpen" position="full" @hide="setPanelClosedInStore">
        <add-movie @saved="closeAddPanel"></add-movie>
    </Sidebar>
</template>
<script lang='ts'>
    import { defineComponent, provide, onMounted, watch, ref } from 'vue'
    import { useStore } from 'vuex'
    import { moduleKey, storeKey } from '@/store'
    import Sidebar from 'primevue/sidebar'
    import AddMovie from '@/components/AddMovie.vue'

    export default defineComponent({
        name: 'Movies',
        components: {
            Sidebar,
            AddMovie
        },
        setup() {
            const store = useStore(storeKey)
            provide(moduleKey, 'movies')
            const addIsOpen = ref(false)
            onMounted(() => {
                store.dispatch('movies/loadItems')
            })

            const setPanelClosedInStore = () => {
                store.commit('ui/setAddPanelOpen', false)
            }

            const closeAddPanel = () => {
                setPanelClosedInStore()
            }

            watch(() => store.state.ui.addPanelOpen, (current) => {
                addIsOpen.value = current
            })

            return {
                addIsOpen,
                closeAddPanel,
                setPanelClosedInStore
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
