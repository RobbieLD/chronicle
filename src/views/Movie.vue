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
            const mobileWith = 1000
            const movieView = ref<MovieView>()
            // Look up the movie information
            const store = useStore(storeKey)
            const route = useRoute()

            const handleResize = () => {
                if (window.innerWidth > mobileWith) {
                    store.commit('ui/setBackground', movieView.value?.backdrop)
                }
                else {
                    store.commit('ui/setBackground', movieView.value?.posters[0].poster)
                }
            }

            const debounce = (func: () => void) => {
                let timer: number
                return (event: Event) => {
                    if(timer) clearTimeout(timer)
                    timer = setTimeout(func, 100, event)
                }
            }
            
            // TODO: Lionking 2019 ha wrong movie ID
            onMounted(async () => {
                await store.dispatch('movies/loadConfiguration')
                const movie: MovieView = await store.dispatch('movies/loadMovieView', route.params.id)
                movieView.value = movie
                store.commit('ui/setTitle', movie.title)
                handleResize()

                window.addEventListener('resize', debounce(handleResize))
            })

            onUnmounted(() => {
                window.removeEventListener('resize', handleResize)
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
