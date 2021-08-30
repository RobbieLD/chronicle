<template>
    <router-view></router-view>
</template>
<script lang='ts'>
    import { defineComponent, provide, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { moduleKey, storeKey } from '@/store'
        
    export default defineComponent({
        name: 'Movies',
        components: {},
        setup() {
            const store = useStore(storeKey)
            provide(moduleKey, 'movies')
            onMounted(() => {
                store.dispatch('movies/loadMovies')
            })

            return {}
        },
    })
</script>
<style lang='scss' scoped>
</style>
