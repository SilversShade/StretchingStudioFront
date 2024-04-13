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
                            <input type="password" v-model="formData.confirmPassword" id="confirm-password"
                                class="input-value" placeholder="Подтвердите пароль" />
                        </div>

                        <button type="submit" class="cta-button">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
    layout: 'register'
})

const formData = ref({
    email: '',
    password: '',
    confirmPassword: '',
})

const { $csrfFetch } = useNuxtApp()

const submitForm = async () => {
    const data = await $fetch('https://localhost:7229/register', { // TODO: protect against csrf
        method: 'post',
        body: {
            "email": formData.value.email,
            "password": formData.value.password
        }
    })
}

</script>

<style scoped src="/assets/css/globals.css"></style>