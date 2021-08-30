<template>
    <div class="col-fixed" v-for="(data, index) in items" :key="index">
        <Card class="item">
            <template #header>
                <img alt="Poster" :src="data.posterUrl" />
            </template>
            <template #title> {{ data.name }} </template>
            <template #content>
                <div>
                    <ProgressBar
                        class="item__rating"
                        v-if="data.myRating"
                        :value="data.myRating"
                        :showValue="true"
                        title="My Rating"
                    />
                    <ProgressBar
                        class="item__rating"
                        v-if="data.myRating"
                        :value="data.globalRating"
                        :showValue="true"
                        title="Global Rating"
                    />
                    <Button
                        class="item__seen-it"
                        v-if="!data.year"
                        label="Seen It"
                    />
                </div>
            </template>
            <template #footer>
                {{ data.year || '' }}
            </template>
        </Card>
    </div>
</template>
<script lang='ts'>
    import { defineComponent, PropType } from 'vue'
    import ProgressBar from 'primevue/progressbar'
    import Button from 'primevue/button'
    import Card from 'primevue/card'
    import ItemData from '@/models/item'

    export default defineComponent({
        name: 'ItemsList',
        components: {
            ProgressBar,
            Button,
            Card
        },
        props: {
            items: {
                type: Object as PropType<ItemData>,
                required: true
            }
        },
        setup() {
            return {}
        },
    })
</script>
<style lang='scss' scoped>
    .item {
        width: 12em;
        margin: 0.5em;

        &__seen-it {
            width: 100%;
        }

        &__rating {
            border-radius: 0;
            background-color: var(--surface-card);
        }
    }
</style>
