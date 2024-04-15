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

export default {
    data() {
        return {
            error: ""
        }
    },
    methods: {
        async submitForm() {
            const config = useRuntimeConfig()

            await $fetch(config.public.apiBase + '/login', {
                method: 'post',
                body: {
                    "email": formData.value.email,
                    "password": formData.value.password
                }
                })
                .then(async res => { // это все поместить в хранилище???
                    // this.accessToken = res.accessToken
                    // this.refreshToken = res.refreshToken
                    // this.expiresIn = res.expiresIn
                    await navigateTo({ path: '/account' })
                })
                .catch(err => {
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