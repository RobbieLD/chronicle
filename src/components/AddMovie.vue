<template>
    <div class="add-movie">
        <h2>Add Movie</h2>
        <div class="p-fluid">
            <div class="p-field add-movie__row">
                <label for="name">Movie Name</label>
                <div v-show="!searchReady">Loading Search ...</div>
                <AutoComplete
                    id="name"
                    v-model="selectedMovie"
                    :suggestions="suggestions"
                    @complete="movieSearch($event)"
                    field="name"
                    v-show="searchReady"
                    class="add-movie__field"
                    forceSelection
                    :class="invalid ? 'p-invalid' : ''"
                >
                    <template #item="slotProps">
                        <div>{{ slotProps.item.name }}</div>
                    </template>
                </AutoComplete>
            </div>
            <div class="p-field add-movie__row add-movie__poster">
                <Slider v-model="rating" class="add-movie__rating" orientation="vertical" />
                <img class="add-movie__poster" :src="selectedMovie?.poster?.url" :width="selectedMovie?.poster?.width"/>
            </div>
            <div class="p-field add-movie__row">
                <label for="year">Year Seen / Rating: {{ rating }}</label>
                <Dropdown class="add-movie__field" id="year" v-model="selectedYear" :options="years" placeholder="Select a year" />
            </div>
            <div class="p-field add-movie__row">
                <Button :label="saving ? 'Saving' : 'Save'" @click="save" :disabled="saving" />
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
    import { defineComponent, onMounted, ref } from 'vue'
    import AutoComplete from 'primevue/autocomplete'
    import AutoCompleteEvent from '@/models/prime-events'
    import MovieSuggestion from '@/models/movie-search'
    import Slider from 'primevue/slider'
    import Dropdown from 'primevue/dropdown'
    import ChronicleConfig from '@/config'
    import Button from 'primevue/button'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import 'firebase/database'
    import ItemData from '@/models/item'

    export default defineComponent({
        name: 'AddMovie',
        components: {
            AutoComplete,
            Slider,
            Dropdown,
            Button
        },
        emits: ['saved'],
        setup(props, { emit }) {
            const searchReady = ref(false)
            const suggestions = ref<MovieSuggestion[]>([])
            const selectedMovie = ref<MovieSuggestion>()
            const rating = ref<number>(0)
            const selectedYear = ref<number>()
            const invalid = ref(false)
            const saving = ref(false)
            const store = useStore(storeKey)

            onMounted(async () => {
                await store.dispatch('movies/loadConfiguration')
                searchReady.value = true
            })

            const save = async () => {
                invalid.value = selectedMovie.value === undefined

                if (invalid.value) {
                    return
                }

                const movie : ItemData = {
                    name: selectedMovie.value?.name || '',
                    posterUrl: selectedMovie.value?.poster?.url || '',
                    poasterWidth: selectedMovie.value?.poster?.width || 0,
                    myRating: rating.value || 0,
                    globalRating: selectedMovie.value?.rating || 0,
                    year: selectedYear.value || 0
                }

                saving.value = true
                await store.dispatch('movies/addMovie', movie)
                emit('saved')
            }

            const movieSearch = async (event: AutoCompleteEvent) => {
                suggestions.value = await store.dispatch('movies/loadSuggestions', event.query.trim())
            }

            return {
                movieSearch,
                searchReady,
                selectedMovie,
                suggestions,
                rating,
                selectedYear,
                years: ChronicleConfig.Years(),
                save,
                invalid,
                saving
            }
        },
    })
</script>
<style lang='scss' scoped>
    .add-movie {

        display: flex;
        flex-direction: column;
        align-items: center;

        &__field {
            margin-top: 0.5em;
        }

        &__row {
            padding-top: 0.5em;
        }

        &__poster {
            display: flex;
            justify-content: center;
        }

        &__rating {
            height: 20em;
        }
    }
</style>
