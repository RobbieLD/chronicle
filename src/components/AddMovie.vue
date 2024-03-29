<template>
    <div class="add-movie">
        <h2>Add Movie</h2>
        <div class="p-fluid add-movie__panel">
            <div class="p-field add-movie__row">
                <label for="name">Movie Name</label>
                <AutoComplete
                    id="name"
                    v-model="selectedMovie"
                    :suggestions="suggestions"
                    @complete="movieSearch($event)"
                    @item-select="movieSelected"
                    @clear="movieCleared"
                    field="name"
                    class="add-movie__field"
                    forceSelection
                    dropdownMode="current"
                    :class="invalid ? 'p-invalid' : ''"
                >
                    <template #item="slotProps">
                        <div>{{ slotProps.item.name }}</div>
                    </template>
                </AutoComplete>
            </div>
            <div class="p-field add-movie__row add-movie__poster" v-show="itemSelected">
                <img
                    :src="selectedMovie?.poster?.url"
                    class="add-movie__image"
                />
            </div>
            <div class="p-field add-movie__row" v-show="itemSelected">
                <label for="rating">Rating</label>
                <Knob
                    v-model="rating"
                    id="rating"
                    :size="150"
                    class="add-movie__rating"
                />
            </div>
            <div class="p-field add-movie__row" v-show="itemSelected">
                <ToggleButton
                    v-model="flagged"
                    onLabel="Flagged"
                    offLabel="Unflagged"
                />
            </div>
            <div class="p-field add-movie__row" v-show="itemSelected">
                <label for="year">Date Seen</label>
                <Calendar 
                    id="date"
                    v-model="selectedDate"
                    :showIcon="false"
                    :showTime="false"
                    selectionMode="single"
                    :maxDate="new Date()"
                />   
            </div>
            <div class="p-field add-movie__row" v-show="itemSelected">
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
    import AutoCompleteEvent from '@/models/prime-events'
    import MovieSuggestion from '@/models/movie-search'
    import Calendar from 'primevue/calendar'
    import Button from 'primevue/button'
    import ToggleButton from 'primevue/togglebutton'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import 'firebase/database'
    import ItemData from '@/models/item'
    import Knob from 'primevue/knob'

    export default defineComponent({
        name: 'AddMovie',
        components: {
            AutoComplete,
            Knob,
            Calendar,
            Button,
            ToggleButton
        },
        emits: ['saved'],
        setup(props, { emit }) {
            const suggestions = ref<MovieSuggestion[]>([])
            const selectedMovie = ref<MovieSuggestion>()
            const rating = ref<number>(0)
            const selectedDate = ref<Date>()
            const invalid = ref(false)
            const saving = ref(false)
            const flagged = ref(false)
            const store = useStore(storeKey)
            const itemSelected = ref(false)

            const movieSelected = () => {
                itemSelected.value = true
            }

            const movieCleared = () => {
                itemSelected.value = false
            }

            const save = async () => {
                invalid.value = selectedMovie.value === undefined

                if (invalid.value) {
                    return
                }

                const movie: ItemData = {
                    name: selectedMovie.value?.name || '',
                    posterUrl: selectedMovie.value?.poster?.url || '',
                    posterWidth: selectedMovie.value?.poster?.width || 0,
                    myRating: rating.value || 0,
                    globalRating: selectedMovie.value?.rating || -1,
                    year: selectedDate.value,
                    id: selectedMovie.value?.id || 0,
                    flagged: flagged.value
                }

                saving.value = true
                await store.dispatch('movies/addItem', movie)
                emit('saved')
            }

            const movieSearch = async (event: AutoCompleteEvent) => {
                suggestions.value = await store.dispatch(
                    'movies/loadSuggestions',
                    event.query.trim()
                )
            }

            return {
                movieSearch,
                selectedMovie,
                suggestions,
                rating,
                selectedDate,
                save,
                invalid,
                saving,
                itemSelected,
                movieSelected,
                movieCleared,
                flagged
            }
        },
    })
</script>
<style lang='scss' scoped>
    .add-movie {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 20em;

        &__field {
            margin-top: 0.5em;
        }

        &__row {
            margin-top: 0.5em;
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
