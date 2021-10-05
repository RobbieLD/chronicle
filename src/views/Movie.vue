<template>
    <div class="view-movie">
        <!-- <Galleria :value="posters">
            <template #item="slotProps">
                <img :src="slotProps.item.poster" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnail" />
            </template>
        </Galleria>
        https://forum.vuejs.org/t/about-using-style-tags-inside-templates/7275/3 -->
    </div>
</template>
<script lang='ts'>
    import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import Galleria from 'primevue/galleria'
    import MovieView from '@/models/movie-view'
    import { useRoute } from 'vue-router'
    export default defineComponent({
        name: 'Movie',
        components: {
            //Galleria
        },
        setup() {
            const movieView = ref<MovieView>()
            // Look up the movie information
            const store = useStore(storeKey)
            const route = useRoute()

            // TODO: Lionking 2019 ha wrong movie ID


            onMounted(async () => {
                await store.dispatch('movies/loadConfiguration')
                const movie: MovieView = await store.dispatch('movies/loadMovieView', route.params.id)
                movieView.value = movie
                store.commit('ui/setTitle', movie.title)

                const root = document.documentElement
                root.style.setProperty('--backdrop', `url(${movie.backdrop})`)               
                root.style.setProperty('--poster', `url(${movie.posters[0].poster})`)
            })

            return {
                movieView
            }
        },
    })
</script>
<style lang='scss' scoped>
    .view-movie {
        display: flex;
        // flex-direction: column;
        // align-items: center;
        // margin: auto;
        // width: 20em;
    }
</style>
