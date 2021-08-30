<template>
    <items-list :items="movies"></items-list>
</template>
<script lang='ts'>
    import { computed, defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { key } from '@/store'
    import ItemsList from '@/components/ItemsList.vue'
    
    export default defineComponent({
        name: 'Movies',
        components: {
            ItemsList,
        },
        props: {
            getter: {
                type: String,
                required: true
            }
        },
        setup(props) {
            const store = useStore(key)
            const movies = computed(() => store.getters[`movies/${props.getter}`])


            onMounted(() => {
                store.dispatch('movies/loadMovies')
            })

            return {
                movies,
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>
