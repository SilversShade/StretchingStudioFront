<template>
    <div class="screen">
        <div class="container">
            <div class="navigation">
                <div class="navigation-left-side">
                    <div class="logo">
                        <div class="logo-sign"></div>
                        <div class="logo-text"><nuxt-link to="/">Stretching Studio</nuxt-link></div>
                    </div>
                    <div class="navigation-list">
                        <div class="list-navbar"> <navbar-link to="/">Главная</navbar-link></div>
                        <div class="list-navbar"> <navbar-link to="/purchase-subscription">Купить абонемент</navbar-link></div>
                        <div class="list-navbar"> <navbar-link to="/session-sign-up">Записаться на занятие</navbar-link></div>
                    </div>
                </div>
                <button class="enter-button button-on-white"><nuxt-link to="/auth/login">Вход</nuxt-link></button>
            </div>

            <div>
                <slot />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    to: {
        type: String,
        required: true,
    }
});
</script>

<style scoped src="../assets/css/globals.css">
.chips-list {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.chips {
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 20px;
    line-height: 120%;
    cursor: pointer;
}

.chips-active {
    color: #fff;
    background-color: #CF48FF;
    font-weight: 600;
}

.chips-inactive {
    color: #000;
    background-color: #F2F2F2;
}
</style>