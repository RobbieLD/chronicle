<template>
    <div class="add-musical">
        <h2>Add Musical</h2>
        <div class="p-fluid add-musical__panel">
            <div class="p-field add-musical__row">
                <label for="name">Musical Name</label>
                <AutoComplete
                    id="name"
                    v-model="selectedMusical"
                    :suggestions="suggestions"
                    @complete="musicalSearch($event)"
                    @item-select="musicalSelected"
                    @clear="musicalCleared"
                    field="title"
                    class="add-musical__field"
                    forceSelection
                    dropdownMode="current"
                    :class="invalid ? 'p-invalid' : ''"
                >
                    <template #item="slotProps">
                        <div>{{ slotProps.item.title }}</div>
                    </template>
                </AutoComplete>
            </div>
            <div
                class="p-field add-musical__row"
                v-html="selectedMusical?.description"
                v-show="itemSelected"
            ></div>
            <div
                class="p-field add-musical__row add-musical__poster"
                v-show="itemSelected"
            >
                <img :src="poster?.source" class="add-musical__image" />
            </div>
            <div class="p-field add-musical__row" v-show="itemSelected">
                <label for="rating">Rating</label>
                <Knob
                    v-model="rating"
                    id="rating"
                    :size="150"
                    class="add-musical__rating"
                />
            </div>
            <div class="p-field add-musical__row" v-show="itemSelected">
                <label for="year">Year Seen</label>
                <Dropdown
                    class="add-musical__field"
                    id="year"
                    v-model="selectedYear"
                    :options="years"
                    placeholder="Select a year"
                />
            </div>
            <div class="p-field add-musical__row" v-show="itemSelected">
                <Button
                    :label="saving ? 'Saving' : 'Save'"
                    @click="save"
                    :disabled="saving"
                />
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
    import { defineComponent, ref } from 'vue'
    import AutoComplete from 'primevue/autocomplete'
    import AutoCompleteEvent, { AutoCompleteEventSelectedEvent, } from '@/models/prime-events'
    import Dropdown from 'primevue/dropdown'
    import ChronicleConfig from '@/config'
    import Button from 'primevue/button'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import 'firebase/database'
    import { Thumbnail } from '@/models/musical-poster'
    import MusicalSuggestion from '@/models/musical-search'
    import Knob from 'primevue/knob'
    import ItemData from '@/models/item'

    export default defineComponent({
        name: 'AddMusical',
        components: {
            AutoComplete,
            Knob,
            Dropdown,
            Button,
        },
        emits: ['saved'],
        setup(props, { emit }) {
            const suggestions = ref<string[]>([])
            const selectedMusical = ref<MusicalSuggestion>()
            const rating = ref<number>(0)
            const selectedYear = ref<number>()
            const invalid = ref(false)
            const saving = ref(false)
            const itemSelected = ref(false)
            const store = useStore(storeKey)
            const poster = ref<Thumbnail>()

            const musicalSelected = async (event: AutoCompleteEventSelectedEvent<MusicalSuggestion>) => {
                itemSelected.value = true
                poster.value = await store.dispatch(
                    'musicals/loadPoster',
                    event.value.title
                )
            }

            const musicalCleared = () => {
                itemSelected.value = false
            }

            const save = async () => {
                invalid.value = selectedMusical.value === undefined

                if (invalid.value) {
                    return
                }

                const musical: ItemData = {
                    name: selectedMusical.value?.title || '',
                    posterUrl: poster.value?.source || '',
                    poasterWidth: poster.value?.width || 0,
                    myRating: rating.value || 0,
                    globalRating: 0,
                    year: selectedYear.value || 0,
                }

                saving.value = true
                await store.dispatch('musicals/addMusical', musical)
                emit('saved')
            }

            const musicalSearch = async (event: AutoCompleteEvent) => {
                suggestions.value = await store.dispatch(
                    'musicals/loadSuggestions',
                    event.query.trim()
                )
            }

            return {
                musicalSearch,
                selectedMusical,
                suggestions,
                rating,
                selectedYear,
                years: ChronicleConfig.Years(),
                save,
                invalid,
                saving,
                poster,
                musicalSelected,
                itemSelected,
                musicalCleared,
            }
        },
    })
</script>
<style lang='scss' scoped>
    .add-musical {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 20em;

        &__field {
            margin-top: 0.5em;
        }

        &__row {
            margin-top: 1em;
        }

        &__poster {
            display: flex;
            justify-content: center;
            background: var(--surface-900);
            border-radius: 1em;
        }

        &__image {
            max-width: 20em;
        }

        &__panel {
            width: 100%;
        }

        &__rating {
            display: flex;
            justify-content: center;
        }
    }
</style>
