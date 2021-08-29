<template>
    <div class="col-fixed" v-for="(data, index) in movies" :key="index">
        <Card class="movie">
            <template #header>
                <img alt="Poster" :src="data.movie.poster.url" />
            </template>
            <template #title> {{ data.movie.name }} </template>
            <template #content>
                <div>
                    <ProgressBar v-if="data.rating" :value="data.rating" :showValue="true" />
                    <Button class="movie__seen-it" v-if="!data.rating" label="Seen It" />
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
            transform: rotate(-90deg);
            position: relative;
            top: -7em;
            display: flex;
            left: -5em;
            margin-bottom: -2em;
        }
    }
</style>
