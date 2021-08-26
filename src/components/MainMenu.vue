<template>
    <router-link
        v-on:click="handleClick"
        v-for="route in routes"
        :key="route.path"
        class="menu-item"
        :to="route.path"
        >{{ route.name }}
    </router-link>
</template>
<script lang='ts'>
    import router from '@/router'
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'MainMenu',
        components: {},
        emits: ['navigate'],
        setup(props, { emit }) {
            const routes = router.options.routes.filter(r => r.meta?.requiresAuth)
            const handleClick = () => {
                emit('navigate')
            }
            return {
                routes,
                handleClick
            }
        },
    })
</script>
<style lang='scss' scoped>
    .router-link-active {
        color: var(--primary-color) !important;
    }

    .menu-item {
        padding: 0.5em;
        font-size: 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--surface-900);
        text-decoration: none;
        padding: 0.5em;

        &:hover {
            color: var(--primary-color);
        }
    }
</style>
