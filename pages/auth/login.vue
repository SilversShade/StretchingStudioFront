<template>
    <div class="form-wrapper">
        <div class="form">
            <div class="content">
                <div class="heading-1">Войти</div>
                <div class="inputs">
                    <div class="input-wrapper">
                        <div class="input-label">Логин</div>
                        <input class="input-value" value="user_login"></input>
                    </div>
                    <div class="input-wrapper">
                        <div class="input-label">Пароль</div>
                        <input class="input-value" value="****************"></input>
                    </div>
                </div>
            </div>
            <button class="cta-button"><nuxt-link to="/">Войти</nuxt-link></button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'login'
})
</script>

<style scoped src="/assets/css/globals.css"></style>