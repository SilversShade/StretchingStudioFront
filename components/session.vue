<template>
    <div class="card">
        <div class="card-title">{{ sessionType }}</div>
        <div class="card-content">
            <div class="card-label">Дата и время</div>
            <div class="card-value mb-3">{{ convertDate(startingDate) }}</div>
            <div class="card-label">Свободных мест</div>
            <div class="card-value">{{ freeSlotsNum }}</div>
            <button class="card-button" @click="signUp">Записаться</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: String,
    sessionType: String,
    startingDate: String,
    freeSlotsNum: Number
})

const signUp = () => {

}
</script>

<style scoped src="../assets/css/globals.css"></style>

<style></style>