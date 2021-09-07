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
    <div class="menu-header">Musicals</div>
    <router-link
        v-on:click="handleClick"
        key="/musicals/history"
        class="menu-item"
        to="/musicals/history"
        >History</router-link
    >
    <router-link
        v-on:click="handleClick"
        key="/musicals/listen"
        class="menu-item"
        to="/musicals/listen"
        >Listen List</router-link
    >

    <div class="menu-header">Other</div>
    <router-link
        v-on:click="handleClick"
        key="/stats"
        class="menu-item"
        to="/stats"
        >Stats</router-link
    >
    <router-link
        v-on:click="handleClick"
        key="/graph"
        class="menu-item"
        to="/graph"
        >Graph</router-link
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

    .menu-header {
        margin-top: 1em;
        font-weight: bold;
    }

    .menu-item {
        padding-left: 1em;
        &:hover {
            color: var(--primary-color);
        }
    }
</style>
