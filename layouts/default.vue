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
                <button class="enter-button button-on-white"><nuxt-link to="/auth/login">Вход</nuxt-link></button> <!--v-if="authStore.user"-->
                <!--v-else, <button class="enter-button button-on-white"><nuxt-link to="/account">Мой аккаунт</nuxt-link></button>-->
            </div>

            <div>
                <slot />
            </div>

        </div>
    </div>
</template>

<style scoped src="../assets/css/globals.css"></style>