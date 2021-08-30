<template>
    <div class="menu-header">Movies</div>
    <router-link
        v-on:click="handleClick"
        key="/movies/history"
        class="menu-item"
        to="/movies/history"
        >History</router-link
    >
    <router-link
        v-on:click="handleClick"
        key="/movies/watch"
        class="menu-item"
        to="/movies/watch"
        >Watch List</router-link
    >
</template>
<script lang='ts'>
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'MainMenu',
        components: {},
        emits: ['navigate'],
        setup(props, { emit }) {
            const handleClick = () => {
                emit('navigate')
            }

            return {
                handleClick,
            }
        },
    })
</script>
<style lang='scss' scoped>
    .router-link-active {
        color: var(--primary-color) !important;
    }


    .menu-item, .menu-header {
        padding-left: 0.5em;
        padding-bottom: 0.3em;
        font-size: 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--surface-900);
        text-decoration: none;
    }

    .menu-item {
        padding-left: 1em;
        &:hover {
            color: var(--primary-color);
        }
    }
</style>
