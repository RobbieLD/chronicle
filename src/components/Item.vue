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
                <ToggleButton
                    class="item__flagged"
                    v-model="flagged"
                    onLabel="Flagged"
                    offLabel="Unflagged"
                    v-if="isEditing"
                />  
                <Calendar 
                    id="date"
                    v-model="selectedDate"
                    :showIcon="false"
                    :showTime="false"
                    selectionMode="single"
                    v-if="isEditing"
                    :maxDate="new Date()"
                />
            </div>
        </template>
        <template #footer>
            {{ formatDate(data.year) }}
        </template>
    </Card>
</template>
<script lang='ts'>
    import { defineComponent, inject, PropType, ref } from 'vue'
    import ToggleButton from 'primevue/togglebutton'
    import Card from 'primevue/card'
    import Calendar from 'primevue/calendar'
    import ItemData from '@/models/item'
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
            Calendar,
            ProgressBar,
            ToggleButton
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
            const flagged = ref(false)
            const selectedDate = ref<Date>(new Date())
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
                    item.year = selectedDate.value
                    await store.dispatch(`${module}/updateItem`, { item, key: props.editKey })
                    isEditing.value = flagged.value
                }
            }

            const formatDate = (date: Date | string | undefined) => {
                if (!date) {
                    return ''
                } else {
                    return new Date(date).toDateString()
                }
            }

            return {
                isEditing,
                selectedDate,
                rating,
                formatDate,
                edit,
                view,
                remove,
                flagged
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
            margin-bottom: 0.5em;
        }

        &__flagged {
            width: 100%;
            margin-bottom: 0.5em;
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
