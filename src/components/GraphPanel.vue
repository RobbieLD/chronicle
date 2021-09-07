<template>
    <Card class="chart">
        <template #content>
            <Chart type="bar" :data="basicData" :options="horizontalOptions" />
        </template>
    </Card>
</template>
<script lang='ts'>
    import { defineComponent, ref } from 'vue'
    import Chart from 'primevue/chart'
    import Card from 'primevue/card'

    export default defineComponent({
        name: 'GraphPanel',
        components: {
            Chart,
            Card
        },
        setup() {
            const basicData = ref({
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40],
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 19, 86, 27, 90],
                    }
                ]
            })
        
            const horizontalOptions = ref({
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057',
                        },
                        grid: {
                            color: '#ebedef',
                        },
                    },
                    y: {
                        ticks: {
                            color: '#495057',
                        },
                        grid: {
                            color: '#ebedef',
                        },
                    },
                },
            })

            return {
                horizontalOptions,
                basicData
            }
        },
    })
</script>
<style lang='scss' scoped>
    .chart {
        margin-top: 0.5em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        height: 80vh;
        width: 100%;
    }
</style>
