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
    import { defineComponent, onBeforeUnmount, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Button from 'primevue/button'
    import firebase from 'firebase/app'
    import 'firebase/auth'
    
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
            const userLoggedIn = ref(false)
            
            const openMenu = () => {
                emit('menuOpen')
            }

            const logout = () => {
                firebase.auth().signOut()
                router.push('/')
            }

            const authListener = firebase
                .auth()
                .onAuthStateChanged((user) => {
                    userLoggedIn.value = user !== null
                })

            onBeforeUnmount(() => {
                authListener()
            })

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
        background-color: var(--surface-300);

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
