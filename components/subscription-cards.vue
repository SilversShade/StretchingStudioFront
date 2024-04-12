<template>
    <div class="card">
        <div class="card-title">Количество занятий: {{ $props.sessionsNum }}</div>
        <div class="card-content">
            <div class="card-label">Стоимость</div>
            <div class="card-value">{{ $props.price }} ₽</div>
        </div>
        <button class="card-button"><nuxt-link to="/payment">Купить</nuxt-link></button>
    </div>
</template>

<script setup>
const props = defineProps({
    sessionsNum: Number,
    price: Number
})
</script>

<style scoped src="../assets/css/globals.css"></style>