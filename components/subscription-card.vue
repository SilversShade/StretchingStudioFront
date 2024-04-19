<template>
    <div class="card">
        <div class="card-title">Количество занятий: {{ props.sessionsNum }}</div>
        <div class="card-content">
            <div class="card-label">Стоимость</div>
            <div class="card-value">{{ props.price }} ₽</div>
        </div>
        <button class="card-button" @click="purchase"><nuxt-link to="/account">Купить</nuxt-link></button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: String,
    sessionsNum: Number,
    price: Number
})

const purchase = async () => {
    const config = useRuntimeConfig()

    await $fetch<string>(config.public.apiBase + '/api/v1/purchase-subscription', {
        method: 'post',
        headers: {
            "Authorization": "Bearer " + useCookie('accessToken').value
        },
        body: {
            "subscriptionId": props.id
        }
        })
        .then(async _ => {
            await navigateTo({ path: '/account' })
        })
        .catch(async _ => {
            const authStore = useAuthStore()
            authStore.resetState()
            useCookie('accessToken').value = null
            
            await navigateTo({ path: '/auth/login' })
        })
}
</script>

<style scoped src="../assets/css/globals.css"></style>