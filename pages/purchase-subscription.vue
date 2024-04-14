<template>
    <div class="page-content">
        <div class="page-block">
            <div class="block-heading">
                <div class="heading-2">Купить абонемент</div>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div v-for="s in subscriptions">
                    <SubscriptionCards :sessions-num="s.sessionsNum" :price="s.price" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Subscription {
        sessionsNum: number,
        price: number
    }

    const config = useRuntimeConfig()
    const { data: subscriptions } = await useFetch<Subscription[]>(config.public.apiBase + '/api/v1/available-subscriptions')
</script>

<style scoped src="../assets/css/globals.css"></style>