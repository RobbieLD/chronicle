/* eslint-disable no-undef */
<template>
    <Card class="login">
        <template #title> Login </template>
        <template #content>
            <div>
                <div class="field grid">
                    <label for="email" class="col-fixed login__label"
                        >Email</label
                    >
                    <div class="col">
                        <InputText id="email" type="username" v-model="email" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="password" class="col-fixed login__label"
                        >Password</label
                    >
                    <div class="col">
                        <Password
                            v-model="password"
                            :feedback="false"
                        ></Password>
                    </div>
                </div>
                <div class="field grid">
                    <div class="col-fixed login__label"></div>
                    <div class="col">
                        <Button
                            type="button"
                            :label="loggingIn ? 'Authenticating' : 'Login'"
                            :loading="loggingIn"
                            @click="login"
                        />
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>
<script lang='ts'>
    import { defineComponent, ref } from 'vue'
    import Card from 'primevue/card'
    import InputText from 'primevue/inputtext'
    import Password from 'primevue/password'
    import Button from 'primevue/button'
    import { useRouter } from 'vue-router'
    import firebase from 'firebase/app'
    import Notify from '@/util/notify'

    export default defineComponent({
        name: 'Login',
        components: {
            Card,
            InputText,
            Password,
            Button,
        },
        setup() {
            const router = useRouter()
            const password = ref('password')
            const email = ref('me@robdavis.dev')
            const loggingIn = ref(false)
            const notify = new Notify()
            const login = () => {
                loggingIn.value = true
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                    .catch((error) => {
                        notify.show(error)
                    })
                    .finally(() => {
                        loggingIn.value = false
                    })
            }

            firebase.auth().onAuthStateChanged(user => {
                if (user !== null) {
                    router.push('/movies')
                }
            })


            return {
                password,
                email,
                loggingIn,
                login,
            }
        },
    })
</script>
<style lang='scss' scoped>
    .login {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10em;
        &__label {
            width: 6em;
        }
    }
</style>
