<template>
    <Sidebar v-model:visible="menuIsOpen">
        <main-menu @navigate="closeMenu"></main-menu>
    </Sidebar>
    <nav-bar @menuOpen="openMenu"></nav-bar>
    <div class="content grid">
        <router-view :key="$route.fullPath" />
    </div>
    <add-button v-if="showAddButton" @clicked="openAddPanel"></add-button>
    <div class="footer">Created by Rob Davis | {{ sha }}</div>
    <Toast position="top-right" />
</template>
<script lang="ts">
    import { defineComponent, onBeforeUpdate, onMounted, ref } from 'vue'
    import NavBar from '@/components/NavBar.vue'
    import Sidebar from 'primevue/sidebar'
    import MainMenu from '@/components/MainMenu.vue'
    import Toast from 'primevue/toast'
    import AddButton from '@/components/AddButton.vue'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import { useRoute } from 'vue-router'

    export default defineComponent({
        name: 'App',
        components: {
            NavBar,
            Sidebar,
            MainMenu,
            Toast,
            AddButton,
        },
        setup() {
            const menuIsOpen = ref(false)
            const store = useStore(storeKey)
            const showAddButton = ref(true)

            onBeforeUpdate(() => {
                const route = useRoute()
                showAddButton.value = route.meta?.hasAdd as boolean
            })

            const openAddPanel = () => {
                store.commit('ui/setAddPanelOpen', true)
            }

            const openMenu = () => {
                menuIsOpen.value = true
            }

            const closeMenu = () => {
                menuIsOpen.value = false
            }

            onMounted(() => {
                store.dispatch('auth/authSubscribe')
            })

            return {
                menuIsOpen,
                openMenu,
                closeMenu,
                openAddPanel,
                sha: process.env?.VUE_APP_COMMIT,
                showAddButton
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
        background-attachment: fixed;
        background-size: cover;
        background-image: url('https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80');
        //background-image: url('https://images.unsplash.com/photo-1549074862-6173e20d02a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80');
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
        padding: 0.5em;
        justify-content: center;
    }

    .p-sidebar-content {
        height: 100%;
    }

    .footer {
        color: var(--surface-0);
        bottom: 0;
        padding: 0.5em;
        display: flex;
        flex-grow: 1;
        align-items: flex-end;
        font-size: 0.8em;
    }
</style>
