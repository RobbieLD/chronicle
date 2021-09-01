<template>
    <div>Musicals</div>
    <Sidebar v-model:visible="addIsOpen" position="full" @hide="setPanelClosedInStore">
        <add-musical></add-musical>
    </Sidebar>
</template>
<script lang='ts'>
    import { defineComponent, ref, watch } from 'vue'
    import { useStore } from 'vuex'
    import Sidebar from 'primevue/sidebar'
    import AddMusical from '@/components/AddMusical.vue'
    import { storeKey } from '@/store'
    
    export default defineComponent({
        name: 'Musicals',
        components: {
            Sidebar,
            AddMusical
        },
        setup() {
            const addIsOpen = ref(false)
            const store = useStore(storeKey)

            watch(() => store.state.ui.addPanelOpen, (current) => {
                addIsOpen.value = current
            })

            const setPanelClosedInStore = () => {
                store.commit('ui/setAddPanelOpen', false)
            }
            
            return {
                addIsOpen,
                setPanelClosedInStore
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
