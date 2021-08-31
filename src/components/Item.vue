<template>
    <Card class="item">
        <template #header>
            <div class="item__header">
                <Slider
                    class="item__rating-slider"
                    v-model="rating"
                    orientation="vertical"
                    v-if="isEditing"
                />
                <img
                    alt="Poster"
                    :src="data.posterUrl"
                    :class="isEditing ? 'item__poster--edit' : ''"
                />
            </div>
        </template>
        <template #title> {{ data.name }} </template>
        <template #content>
            <div class="item__content">
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
                    class="item__edit"
                    v-if="!data.year"
                    :label="isEditing ? `Save Rating: ${rating}` : 'Edit'"
                    @click="edit"
                ></Button>
                <Dropdown
                    v-model="selectedYear"
                    :options="years"
                    class="item__year"
                    placeholder="Select a year"
                    v-if="isEditing"
                />
            </div>
        </template>
        <template #footer>
            {{ data.year || '' }}
        </template>
    </Card>
</template>
<script lang='ts'>
    import { defineComponent, PropType, ref } from 'vue'
    import ProgressBar from 'primevue/progressbar'
    import Card from 'primevue/card'
    import Dropdown from 'primevue/dropdown'
    import ItemData from '@/models/item'
    import ChronicleConfig from '@/config'
    import Slider from 'primevue/slider'
    import Button from 'primevue/button'

    export default defineComponent({
        name: 'Item',
        components: {
            ProgressBar,
            Button,
            Card,
            Dropdown,
            Slider,
        },
        props: {
            data: {
                type: Object as PropType<ItemData>,
                require: true,
            },

            editKey: {
                type: String,
                required: true,
            },
        },
        setup() {
            const isEditing = ref(false)
            const selectedYear = ref<number>(new Date().getUTCFullYear())
            const rating = ref<number>(0)

            const edit = () => {
                isEditing.value = !isEditing.value
            }

            return {
                isEditing,
                selectedYear,
                rating,
                years: ChronicleConfig.Years(),
                edit
            }
        },
    })
</script>
<style lang='scss' scoped>
    .item {
        width: 12em;
        margin: 0.5em;

        &__rating-slider {
            height: 18em;
        }

        &__poster {
            &--edit {
                margin-left: -0.3em;
            }
        }

        &__header {
            display: flex;
            justify-content: center;
        }

        &__edit {
            width: 100%;
        }

        &__rating {
            border-radius: 0;
            background-color: var(--surface-card);
        }

        &__year {
            width: 100%;
            margin-top: 0.5em;
        }

        &__content {
            margin-bottom: -1em;
        }
    }
</style>
