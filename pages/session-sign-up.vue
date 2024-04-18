<template>
    <div class="page-content">
        <div class="page-block">
            <div class="block-heading">
                <div class="heading-2">Запись на тренировку</div>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div v-for="s in sessions" :key="s.id">
                    <Session 
                        :id="s.id" 
                        :session-type="s.sessionType.name" 
                        :starting-date="s.startingDate" 
                        :free-slots-num="s.freeSlotsNum"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

interface Session {
    id: string,
    sessionType: {
        id: string,
        name: string,
        duration: number
    },
    startingDate: string,
    freeSlotsNum: number
}

const config = useRuntimeConfig()

const { data: sessions } = await useFetch<Session[]>(config.public.apiBase + '/api/v1/upcoming-sessions?free-slots-only=true', {
    server: false,
})
</script>

<style scoped src="../assets/css/globals.css"></style>