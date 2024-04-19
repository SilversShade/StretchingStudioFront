<template>
    <div class="page-content">
        <div class="page-block">
            <div class="block-heading">
                <div class="heading-2">Ваши абонементы</div>
            </div>
            <div class="grid grid-cols-3 gap-5 mr-15">
                <div v-for="s in subscriptions" :key="s.id">
                    <UserSubscription :sessions-num="s.sessionsLeft" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

interface Subscription {
    id: string,
    sessionsLeft: number,
    userId: string,
    subscription: {
        id: string,
        sessionsNum: number,
        price: number,
    }
}

const config = useRuntimeConfig()
const { data: subscriptions, error } = await useFetch<Subscription[]>(config.public.apiBase + '/api/v1/user-subscriptions', {
    headers: {
        "Authorization": "Bearer " + useCookie('accessToken').value
    },
    server: false,
})
if (error.value) {
    const authStore = useAuthStore()
    authStore.resetState()
    useCookie('accessToken').value = null
    
    await navigateTo({ path: '/auth/login' })
}
</script>

<style scoped src="../assets/css/globals.css"></style>