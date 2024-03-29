/* eslint-disable no-undef */
<template>
    <Card class="login">
        <template #title> {{ ready ? 'Login' : 'Authenticating' }} </template>
        <template #content>
            <div v-if="ready">
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
            <div v-else class="login__container">
                <i class="pi pi-spin pi-spinner login__spinner"></i>
            </div>
        </template>
    </Card>
</template>
<script lang='ts'>
    import { computed, defineComponent, ref, watch } from 'vue'
    import Card from 'primevue/card'
    import InputText from 'primevue/inputtext'
    import Password from 'primevue/password'
    import Button from 'primevue/button'
    import { useRouter } from 'vue-router'
    import Notify from '@/util/notify'
    import { useStore } from 'vuex'
    import { storeKey } from '@/store'

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
            const password = ref('')
            const email = ref('')
            const loggingIn = ref(false)
            const notify = new Notify()
            const store = useStore(storeKey)
            const ready = computed(() => store.state.auth.ready)

            const login = async () => {
                loggingIn.value = true
                await store.dispatch('auth/signIn', { email: email.value, password: password.value })
                loggingIn.value = false
            }

            watch(() => store.state.auth.user, (user) => {
                if (user) {
                    router.push({ name: 'Movie History'})
                }
            })

            watch(() => store.state.auth.error, (error) => {
                if (error) {
                    notify.show(error)
                }
            })

            return {
                password,
                email,
                loggingIn,
                login,
                ready
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

        &__spinner {
            font-size: 3em;
        }

        &__container {
            text-align: center;
        }
    }
</style>
