<template>
    <!-- The stat panels -->
    <stat-panel v-for="(stat, index) in stats" :key="index" :stat="stat"></stat-panel>
    <!-- The graphs -->
</template>
<script lang='ts'>
    import { defineComponent, onMounted, ref, } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import StatPanel from '@/components/StatPanel.vue'
    import { ItemStats } from '@/store/states/base.state'

    export default defineComponent({
        name: 'Stats',
        components: {
            StatPanel
        },
        setup() {
            const store = useStore(storeKey)
            const stats = ref<ItemStats[]>([])

            onMounted(() => {
                ['movies', 'musicals'].forEach(m => {
                    store.dispatch(`${m}/loadItems`)
                    stats.value?.push(store.getters[`${m}/getStats`])
                })
            })


            return {
                stats
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
