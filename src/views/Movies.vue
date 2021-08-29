<template>
    <div class="col-fixed" v-for="(data, index) in movies" :key="index">
        <Card class="movie">
            <template #header>
                <img alt="Poster" :src="data.movie.poster.url" />
            </template>
            <template #title> {{ data.movie.name }} </template>
            <template #content>
                <div>
                    <ProgressBar class="movie__rating" v-if="data.myRating" :value="data.myRating" :showValue="true" title="My Rating" />
                    <ProgressBar class="movie__rating" v-if="data.globalRating" :value="data.globalRating" :showValue="true" title="Global Rating" />
                    <Button class="movie__seen-it" v-if="!data.myRating" label="Seen It" />
                </div>
            </template>
            <template #footer>
                {{ data.year || '' }}
            </template>
        </Card>
    </div>
</template>
<script lang='ts'>
    import { defineComponent, ref } from 'vue'
    import firebase from 'firebase/app'
    import 'firebase/database'
    import Card from 'primevue/card'
    import MovieData from '@/models/movie-search'
    import ProgressBar from 'primevue/progressbar'
    import Button from 'primevue/button'

    export default defineComponent({
        name: 'Movies',
        components: {
            Card,
            ProgressBar,
            Button
        },
        setup() {
            const movies = ref<MovieData>()
            const databaseRef = firebase.database().ref('/movies')
            databaseRef.on('value', (snapshot) => {
                movies.value = snapshot.val()
            })

            return {
                movies
            }
        },
    })
</script>
<style lang='scss' scoped>
    .movie {
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
