<template>
    <Card class="item" :data-key="editKey">
        <template #header>
            <div class="item__header" :class="{ 'item__header--active' : data?.id > 0 }" @click="view">
                <img
                    alt="Poster"
                    :src="data.posterUrl"
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
                    v-if="data.myRating && data.globalRating"
                    :value="data.globalRating"
                    :showValue="true"
                    title="Global Rating"
                />

                <Knob
                    v-model="rating"
                    v-if="isEditing"
                    :size="150"
                    class="item_rating"
                />

                <Button
                    class="item__edit"
                    v-if="!data.year"
                    :label="isEditing ? 'Save' : 'Edit'"
                    @click="edit"
                ></Button>
                <Button
                    class="item__delete"
                    v-if="isEditing"
                    :label="'Delete'"
                    @click="remove"
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
    import { defineComponent, inject, PropType, ref } from 'vue'
    import Card from 'primevue/card'
    import Dropdown from 'primevue/dropdown'
    import ItemData from '@/models/item'
    import ChronicleConfig from '@/config'
    import Button from 'primevue/button'
    import { useStore } from 'vuex'
    import { moduleKey, storeKey } from '@/store'
    import Knob from 'primevue/knob'
    import ProgressBar from 'primevue/progressbar'
    import { useRouter } from 'vue-router'

    export default defineComponent({
        name: 'Item',
        components: {
            Knob,
            Button,
            Card,
            Dropdown,
            ProgressBar,
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
        setup(props) {
            const isEditing = ref(false)
            const selectedYear = ref<number>(new Date().getUTCFullYear())
            const rating = ref<number>(0)
            const store = useStore(storeKey)
            const module = inject(moduleKey)
            const router = useRouter()

            const view = async () => {
                if (props.data?.id) {
                    let routeData = router.resolve({name: 'Movie', params: { id: props.data?.id }})
                    window.open(routeData.href, '_blank')
                }
            }

            const remove = async () => {
                await store.dispatch(`${module}/removeItem`, props.editKey)
            }

            const edit = async () => {
                if (!isEditing.value) {
                    isEditing.value = true
                } else {
                    // Save
                    const item = { ...props.data }
                    item.myRating = rating.value
                    item.year = selectedYear.value
                    await store.dispatch(`${module}/updateItem`, { item, key: props.editKey })
                    isEditing.value = false
                }
            }

            return {
                isEditing,
                selectedYear,
                rating,
                years: ChronicleConfig.Years(),
                edit,
                view,
                remove
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

        &__header {
            display: flex;
            justify-content: center;

            &--active {
                cursor: pointer;
            }
        }

        &__edit {
            width: 100%;
        }

        &__delete {
            width: 100%;
            margin-top: 0.5em;
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
