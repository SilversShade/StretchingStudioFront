<template>
    <div class="form-wrapper">
        <div class="form shadow-form">
            <div class="content">
                <div class="heading-2">Оплата</div>
                <div class="inputs">
                    <div class="input-wrapper">
                        <div class="input-label">Сумма</div>
                        <input class="input-value" value="660 ₽" disabled></input>
                    </div>
                    <div class="input-wrapper">
                        <div class="input-label">Номер карты</div>
                        <input class="input-value" value="0000 0000 0000 0000"></input>
                    </div>

                    <div class="inputs-in-line">
                        <div class="input-wrapper">
                            <div class="input-label">Срок</div>
                            <input class="input-value" value="12/12"></input>
                        </div>
                        <div class="input-wrapper">
                            <div class="input-label">CVC</div>
                            <input class="input-value" value="000"></input>
                        </div>
                    </div>
                </div>
            </div>
            <button class="cta-button"><nuxt-link to="/">Оплатить</nuxt-link></button>
        </div>
    </div>
</template>

<style scoped src="../assets/css/globals.css"></style>

<style scoped>
.inputs-in-line {
    display: flex;
    gap: 16px;
    width: 100%;
}
</style>