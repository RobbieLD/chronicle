<template>
    <Sidebar v-model:visible="menuIsOpen">
        <main-menu @navigate="closeMenu"></main-menu>
    </Sidebar>
    <Sidebar v-model:visible="settingsAreOpen" position="full" @hide="setPanelClosedInStore">
        <settings></settings>
    </Sidebar>
    <nav-bar @menuOpen="openMenu"></nav-bar>
    <div class="content grid">
        <router-view :key="$route.fullPath" />
    </div>
    <action-button :position="addButtonPosition" icon="pi-plus" v-if="showAddButton" @clicked="openAddPanel"></action-button>
    <action-button :position="settingsButtonPosition" icon="pi-cog" @clicked="openSettingsPanel"></action-button>
    <div class="footer">Created by Rob Davis | {{ sha }} | {{ backgroundLocation }}</div>
    <Toast position="top-right" />
</template>
<script lang="ts">
    import { computed, defineComponent, onBeforeUpdate, onMounted, ref, watch } from 'vue'
    import NavBar from '@/components/NavBar.vue'
    import Sidebar from 'primevue/sidebar'
    import MainMenu from '@/components/MainMenu.vue'
    import Toast from 'primevue/toast'
    import { ActionButtonPosition } from '@/config/index'
    import ActionButton from '@/components/ActionButton.vue'
    import Settings from '@/components/Settings.vue'
    import Notify from '@/util/notify'
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
            ActionButton,
            Settings
        },
        setup() {
            const menuIsOpen = ref(false)
            const store = useStore(storeKey)
            const showAddButton = ref(true)
            const settingsAreOpen = ref(false)
            const notify = new Notify()

            onBeforeUpdate(() => {
                const route = useRoute()
                showAddButton.value = route.meta?.hasAdd as boolean
            })

            const openAddPanel = () => {
                store.commit('ui/setAddPanelOpen', true)
            }

            const openSettingsPanel = () => {
                store.commit('ui/setSettingsPanelOpen', true)
            }

            const openMenu = () => {
                menuIsOpen.value = true
            }

            const closeMenu = () => {
                menuIsOpen.value = false
            }

            const setBackgroundUrl = (url: string) => {
                const root = document.documentElement
                root.style.setProperty('--backdrop', `url(${url})`)               
                root.style.setProperty('--poster', `url(${url})`)
            }

            const setPanelClosedInStore = async () => {
                store.commit('ui/setSettingsPanelOpen', false)
                await store.dispatch('auth/updateProfile')
                notify.show('Settings update', 'info')
            }

            watch(() => store.state.ui.background, (url) => setBackgroundUrl(url))

            watch(() => store.state.ui.settingsPanelOpen, (current) => {
                settingsAreOpen.value = current
            })

            const backgroundLocation = computed(() => store.state.ui.backgroundLocation)

            onMounted(() => {
                store.dispatch('auth/authSubscribe')
                store.dispatch('ui/loadBackground').then(() => {
                    setBackgroundUrl(store.state.ui.background)
                })
            })

            return {
                menuIsOpen,
                openMenu,
                closeMenu,
                openAddPanel,
                sha: process.env?.VUE_APP_COMMIT || 'git-hash',
                showAddButton,
                openSettingsPanel,
                addButtonPosition: ActionButtonPosition.right,
                settingsButtonPosition: ActionButtonPosition.left,
                settingsAreOpen,
                setPanelClosedInStore,
                backgroundLocation
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
        background-color: #262837;
        background-attachment: fixed;
        background-size: cover;
        background-position-x: center;
        background-position-y: top;

        background-image: var(--backdrop);

        @media only screen and (max-width: 1000px) {
            background-image: var(--poster);
        }
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
