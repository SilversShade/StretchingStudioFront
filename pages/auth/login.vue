<template>
    <div class="form-wrapper">
        <div class="form">
            <div class="content">
                <div class="heading-1">Войти</div>
                <div class="inputs">
                    <form @submit.prevent="submitForm">
                        <div class="input-wrapper">
                            <input type="email" v-model="formData.email" id="email" class="input-value"
                                placeholder="Email" />
                        </div>
                        <div class="input-wrapper">
                            <input type="password" v-model="formData.password" id="password" class="input-value"
                                placeholder="Пароль" />
                        </div>
                        <button type="submit" class="cta-button">Войти</button>
                    </form>
                    <p v-if="error" class="font-bold text-rose-500">{{ error }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
const formData = ref({
    email: "",
    password: "",
})

interface LoginResponse {
    accessToken: string,
    expiresIn: number,
}

export default {
    data() {
        return {
            error: ""
        }
    },
    methods: {
        async submitForm() {
            const config = useRuntimeConfig()

            await $fetch<LoginResponse>(config.public.apiBase + '/login', {
                method: 'post',
                body: {
                    "email": formData.value.email,
                    "password": formData.value.password
                }
                })
                .then(async res => {
                    // также добавить isLoggedIn = true в хранилку (pinia)
                    useCookie('accessToken', {
                        maxAge: res.expiresIn,
                    }).value = res.accessToken

                    await navigateTo({ path: '/account' })
                })
                .catch(_ => {
                    this.error = "Произошла ошибка. Убедитесь в корректности введенных данных."
                })
        }
    }
}
</script>

<script setup lang="ts">
definePageMeta({
    layout: 'login'
})
</script>

<style scoped src="/assets/css/globals.css"></style>