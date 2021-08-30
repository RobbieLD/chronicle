<template>
    <div class="grid shadow-3 nav">
        <div class="col-fixed nav__burger">
            <i class="pi pi-bars" @click="openMenu"></i>
        </div>
        <div class="col-fixed nav__title">
            <span >{{ route.name }} </span>
        </div>
        <div class="col nav__user">
            <Button v-show="userLoggedIn" label="Logout" @click="logout" />
        </div>
    </div>
</template>
<script lang='ts'>
    import { computed, defineComponent, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Button from 'primevue/button'
    import 'firebase/auth'
    import { useStore } from 'vuex'
    import { key } from '@/store'
    
    export default defineComponent({
        name: 'NavBar',
        components: {
            Button
        },
        emits: ['menuOpen'],
        setup(props, { emit }) {
            const route = useRoute()
            const title = ref(route.name)
            const router = useRouter()
            const store = useStore(key)
            const userLoggedIn = computed(() => store.state.auth.user !== null)
            
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
                route,
                userLoggedIn
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
            margin-right: 0.5em;
        }

    }
</style>
