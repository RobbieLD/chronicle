<template>
    <div class="col-fixed" v-for="(data, key) in items" :key="key">
        <item :data="data" :editKey="key"></item>
    </div>
</template>
<script lang='ts'>
    import { computed, defineComponent, inject, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { moduleKey, storeKey } from '@/store'
    import Item from '@/components/Item.vue'
    import { useRoute } from 'vue-router'

    export default defineComponent({
        name: 'ItemsList',
        components: {
            Item
        },
        props: {
            getter: {
                type: String,
                required: true,
            },
        },
        setup(props) {
            const module = inject(moduleKey)
            const store = useStore(storeKey)
            const route = useRoute()
            
            // This might be being too clever but there's several ways of doing this.
            const items = computed(() => store.getters[`${module}/${props.getter}`](store.state.auth.settings.showFlagged))

            onMounted(() => {
                store.commit('ui/setTitle', route.name)
            })

            return {
                items,
            }
        },
    })
</script>
<style lang='scss' scoped>
</style>

