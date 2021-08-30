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
    import { computed, defineComponent, inject } from 'vue'
    import ProgressBar from 'primevue/progressbar'
    import Button from 'primevue/button'
    import Card from 'primevue/card'
    import { useStore } from 'vuex'
    import { moduleKey, storeKey } from '@/store'
    
    export default defineComponent({
        name: 'ItemsList',
        components: {
            ProgressBar,
            Button,
            Card
        },
        props: {
            getter: {
                type: String,
                required: true
            }
        },
        setup(props) {
            const module = inject(moduleKey)
            const store = useStore(storeKey)
            // This might be being too clever but there's several ways of doing this.
            const items = computed(() => store.getters[`${module}/${props.getter}`])

            return {
                items
            }
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

