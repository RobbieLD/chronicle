<template>
    <Card class="stat">
        <template #header>
            <img :src="image"/>
        </template>
        <template #title>
            <div v-sentance-case>
                {{ stat.module }}
            </div>
        </template>
        <template #subtitle> Total Items: {{ stat.totalItems }} </template>
        <template #content>
            <div><span class="stat__heading">Average Rating:</span> {{ stat.averageRating  }}</div>
            <div><span class="stat__heading">Maximum Rated Item:</span> {{ stat.maxName  }}</div>
            <div><span class="stat__heading">Maximum Rating:</span> {{ stat.maxRating  }}</div>
            <div><span class="stat__heading">Minimum Rated Item:</span> {{ stat.minName  }}</div>
            <div><span class="stat__heading">Minimum Rating:</span> {{ stat.minRating }}</div>
        </template>
    </Card>
</template>
<script lang='ts'>
    import { defineComponent, PropType } from 'vue'
    import { ItemStats } from '@/store/states/base.state'
    import Card from 'primevue/card'

    export default defineComponent({
        name: 'StatPanel',
        components: {
            Card,
        },
        props: {
            stat: {
                required: true,
                type: Object as PropType<ItemStats>,
            },
            image: {
                required: true,
                type: String
            }
        },
        setup() {
            return {}
        },
    })
</script>
<style lang='scss' scoped>
    .stat {
        margin-top: 0.5em;
        margin-left: 0.5em;
        &__heading {
            font-weight: bold;
        }
    }
</style>
