<template>
    <Card class="chart">
        <template #content class="fill">
            <Chart class="fill" type="bar" :data="data" :options="options" />
        </template>
    </Card>
</template>
<script lang='ts'>
    import { computed, defineComponent, onMounted, ref, watch } from 'vue'
    import Chart from 'primevue/chart'
    import Card from 'primevue/card'
    import { useStore } from 'vuex'
    import{ storeKey } from '@/store/index'
    import { GraphData } from '@/store/states/base.state'

    export default defineComponent({
        name: 'GraphPanel',
        components: {
            Chart,
            Card
        },
        setup() {
            const store = useStore(storeKey)
            const movieData = computed(() => store.getters['movies/getGraphData'])
            const musicalData = computed(() => store.getters['musicals/getGraphData'])

            const makeData = (movies: GraphData, musicals: GraphData) => {
                return {
                    labels: [...new Set([...movies.labels, ...musicals.labels].sort())],
                    datasets: [
                        {
                            label: 'Movies',
                            backgroundColor: '#1c8b9c',
                            data: movies.data,
                        },
                        {
                            label: 'Musicals',
                            backgroundColor: '#1c9c5c',
                            data: musicals.data,
                        }
                    ]
                }
            }

            const data = ref(makeData(movieData.value, musicalData.value))
            
            watch([movieData, musicalData], ([movies, music]) => {
                data.value = makeData(movies, music)
            })

            onMounted(() => {
                store.dispatch('movies/loadItems')
                store.dispatch('musicals/loadItems')
            })

            const options = ref({
                maintainAspectRatio: false,
                indexAxis: 'y',
            })

            return {
                options,
                data
            }
        },
    })
</script>
<style lang='scss'>
    .chart {
        margin-top: 0.5em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        height: 88vh;
        width: 100%;
    }

    .p-card-content,
    .p-card-body,
    .fill{
        height: 100% !important;
    }
</style>
