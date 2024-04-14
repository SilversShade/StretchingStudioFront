<template>
    <div class="form-wrapper">
        <div class="form">
            <div class="content">
                <div class="heading-1">Регистрация</div>
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
                        <div class="input-wrapper">
                            <input type="password" id="confirm-password" class="input-value"
                                placeholder="Подтвердите пароль" />
                        </div>
                        <button type="submit" class="cta-button">Зарегистрироваться</button>
                    </form>
                    <p v-if="error !== undefined" class="font-bold text-rose-500"> {{ error }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
const formData = ref({
    email: "",
    password: ""
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

            await $fetch(config.public.apiBase + '/register', {
                method: 'post',
                body: {
                    "email": formData.value.email,
                    "password": formData.value.password
                }
            })
            .then(async _ => await navigateTo({ path: '/auth/login'}))
            .catch(err => {
                const errors = err.response._data.errors
                if (errors.DuplicateUserName)
                    this.error = "Пользователь с данным email уже зарегистрирован"
                else
                    this.error = "Ошибка. Проверьте введенные данные"
            }) 
        }
    }
}
</script>

<script setup lang="ts">
definePageMeta({
    layout: 'register'
})
</script>

<style scoped src="/assets/css/globals.css"></style>