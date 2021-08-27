<template>
    <Sidebar v-model:visible="menuIsOpen">
        <main-menu @navigate="closeMenu"></main-menu>
    </Sidebar>
    <Sidebar v-model:visible="addIsOpen" position="full">
        <add-movie @saved="closeAddPanel"></add-movie>
    </Sidebar>
    <nav-bar @menuOpen="openMenu"></nav-bar>
    <div class="content" style="background-image: url('bg.jpg')">
        <router-view />
    </div>
    <add-button @clicked="openAddPanel"></add-button>
    <Toast position="top-right" />
</template>
<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import NavBar from '@/components/NavBar.vue'
    import Sidebar from 'primevue/sidebar'
    import MainMenu from '@/components/MainMenu.vue'
    import Toast from 'primevue/toast'
    import AddButton from '@/components/AddButton.vue'
    import AddMovie from '@/components/AddMovie.vue'

    export default defineComponent({
        name: 'App',
        components: {
            NavBar,
            Sidebar,
            MainMenu,
            Toast,
            AddButton,
            AddMovie,
        },
        setup() {
            const menuIsOpen = ref(false)
            const addIsOpen = ref(false)

            const openAddPanel = () => {
                addIsOpen.value = true
            }

            const closeAddPanel = () => {
                addIsOpen.value = false
            }

            const openMenu = () => {
                menuIsOpen.value = true
            }

            const closeMenu = () => {
                menuIsOpen.value = false
            }

            return {
                menuIsOpen,
                addIsOpen,
                openMenu,
                closeMenu,
                openAddPanel,
                closeAddPanel
            }
        },
    })
</script>
<style lang="scss">
    html,
    body {
        font-size: 14px;
        font-family: var(--font-family);
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .grid {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .content {
        flex: 1 0 auto;
        padding: 0.5em;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
    }

    .p-sidebar-content {
        height: 100%;
    }
</style>
