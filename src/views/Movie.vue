<template>
    <Divider align="left" class="view-movie__divider">
        <b>Details</b>
    </Divider>

    <Card>
        <template #title> Release Date: {{ movieView?.release?.toDateString() }} </template>
        <template #subtitle>
            <div>
                Runtime: {{ movieView?.runtime }}
            </div>
            <div>
                Director: {{ movieView?.director }}    
            </div>
            <div>
                Revenue: {{ movieView?.earning }}
            </div>
        </template>
        <template #content>
            {{ movieView?.description }}
        </template>
    </Card>

    <Divider align="left" class="view-movie__divider">
        <b>Cast</b>
    </Divider>

    <div
        class="col-fixed"
        v-for="(person, index) of movieView?.people"
        :key="index"
    >
        <Card class="view-movie__person">
            <template #header>
                <img
                    v-if="person.profile"
                    :src="person.profile"
                    alt="No image found"
                />
                <div v-else class="view-movie__person--missing"></div>
            </template>
            <template #title>
                {{ person.name }}
            </template>
            <template #subtitle>
                {{ person.job }}
            </template>
        </Card>
    </div>
    <Divider align="left" class="view-movie__divider">
        <b>Posters</b>
    </Divider>
    <div
        class="col-fixed"
        v-for="(picture, index) of movieView?.posters"
        :key="index"
    >
        <Card class="view-movie__poster">
            <template #header>
                <Image :src="picture.poster" preview />
            </template>
            <template #title> Rating: {{ picture.rating }} </template>
            <template #subtitle> Language: {{ picture.language }} </template>
        </Card>
    </div>
</template>
<script lang='ts'>
    import { defineComponent, onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import Image from 'primevue/image'
    import Card from 'primevue/card'
    import MovieView from '@/models/movie-view'
    import { useRoute } from 'vue-router'
    import Divider from 'primevue/divider'

    export default defineComponent({
        name: 'Movie',
        components: {
            Image,
            Card,
            Divider,
        },
        setup() {
            const movieView = ref<MovieView>()
            // Look up the movie information
            const store = useStore(storeKey)
            const route = useRoute()

            // TODO: Lionking 2019 and planet earth has wrong movie ID

            onMounted(async () => {
                await store.dispatch('movies/loadConfiguration')
                const movie: MovieView = await store.dispatch(
                    'movies/loadMovieView',
                    route.params.id
                )
                movieView.value = movie
                store.commit('ui/setTitle', movie.title)

                const root = document.documentElement
                root.style.setProperty('--backdrop', `url(${movie.backdrop})`)
                root.style.setProperty(
                    '--poster',
                    `url(${movie.posters[0].poster})`
                )
            })

            return {
                movieView,
            }
        },
    })
</script>
<style lang='scss'>
    .view-movie {
        display: flex;
        width: 100%;

        &__person {
            width: 12em;
            margin: 0.5em;

            &--missing {
                background-color: white;
                height: 252px;
            }
        }

        &__poster {
            margin: 0.5em;
            width: 12em;
        }

        &__divider {
            font-size: 2em !important;
            border-bottom: solid 5px #a0a6ad;
        }
    }

    .p-divider .p-divider-content {
        background-color: #a0a6ad !important;
    }

    .p-divider.p-divider-horizontal:before {
        border-top: none !important;
    }
</style>
