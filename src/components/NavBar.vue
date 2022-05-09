<template>
    <div class="grid shadow-3 nav">
        <div class="col-fixed nav__burger">
            <i class="pi pi-bars" @click="openMenu"></i>
        </div>
        <div class="col-fixed nav__title">
            <span >{{ title }} </span>
        </div>
        <div class="col nav__user">
            <ToggleButton v-model="showItems" onLabel="Hide Items" class="nav__item" offLabel="Show Items"/>
            <Button v-show="userLoggedIn" label="Logout" @click="logout" class="nav__item" />
        </div>
    </div>
</template>
<script lang='ts'>
    import { computed, defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import Button from 'primevue/button'
    import 'firebase/auth'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'
    import ToggleButton from 'primevue/togglebutton'
    
    export default defineComponent({
        name: 'NavBar',
        components: {
            Button,
            ToggleButton
        },
        emits: ['menuOpen'],
        setup(props, { emit }) {
            const router = useRouter()
            const store = useStore(storeKey)
            const userLoggedIn = computed(() => store.state.auth.user !== null)
            const title = computed(() => store.state.ui.title)

            const showItems = computed({
                get(): boolean {
                    return store.state.ui.showContent
                },
                set(v: boolean): void {
                    store.commit('ui/setShowContent', v)
                }
            })
            
            const openMenu = () => {
                emit('menuOpen')
            }

            const logout = async () => {
                await store.dispatch('auth/signOut')
                router.push('/')
            }

            return {
                openMenu,
                logout,
                title,
                userLoggedIn,
                showItems
            }
        },
    })
</script>
<style lang='scss' scoped>
    .nav {
        background-color: var(--surface-900);
        color: var(--surface-0);

        &__burger {
            display: flex;
            align-items: center;
            background-color: var(--primary-color);
            color: var(--primary-color-text);
            cursor: pointer;
            padding: 1em;
            padding-top: 1.5em;

            i {
                font-size: 2em;
            }
        }

        &__title {
            font-size: 2em;
            padding-top: 0.5em;
        }

        &__user {
            align-self: center;
            display: flex;
            justify-content: flex-end;
        }

        &__item {
            margin-right: 0.5em;
        }

    }
</style>
