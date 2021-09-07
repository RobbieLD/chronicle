<template>
    <stat-panel :stat="movieStats" image="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></stat-panel>
    <stat-panel :stat="musicalStats" image="https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></stat-panel>
</template>
<script lang='ts'>
    import { computed, defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import StatPanel from '@/components/StatPanel.vue'

    export default defineComponent({
        name: 'Stats',
        components: {
            StatPanel,
        },
        setup() {
            const store = useStore(storeKey)
            const movieStats = computed(() => store.getters['movies/getStats'])
            const musicalStats = computed(() => store.getters['musicals/getStats'])

            onMounted(() => {
                store.dispatch('movies/loadItems')
                store.dispatch('musicals/loadItems')
            })


            return {
                movieStats,
                musicalStats
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
