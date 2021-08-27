<template>
    <Card class="movie" v-for="(data, index) in movies" :key="index">
        <template #header>
            <img alt="Poster" :src="data.movie.poster.url" />
        </template>
        <template #title> {{ data.movie.name }} </template>
        <template #content>
            <div>
                <ProgressBar :value="data.rating" :showValue="true" />
            </div>
        </template>
        <template #footer>
            TODO
        </template>
    </Card>
</template>
<script lang='ts'>
    import { defineComponent, ref } from 'vue'
    import firebase from 'firebase/app'
    import 'firebase/database'
    import Card from 'primevue/card'
    import MovieData from '@/models/movie-search'
    import ProgressBar from 'primevue/progressbar'

    export default defineComponent({
        name: 'Movies',
        components: {
            Card,
            ProgressBar
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
        height: 31em;
        margin: 0.5em;

        &__rating {
            transform: rotate(-90deg);
            position: relative;
            top: -7em;
            display: flex;
            left: -5em;
            margin-bottom: -2em;
        }
    }
</style>
