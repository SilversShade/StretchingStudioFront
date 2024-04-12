<template>
    <body>
        <div class="screen">
            <div class="container">
                <div class="navigation">
                    <div class="navigation-left-side">
                        <div class="logo">
                            <div class="logo-sign"></div>
                            <div class="logo-text"><a href=".">Stretching Studio</a></div>
                        </div>
                        <div class="navigation-list">
                            <div class="list-active">Главная</div>
                            <div class="list-inactive"> <a href="./purchase-subscription/index.html">Купить
                                    абонемент</a>
                            </div>
                            <div class="list-inactive"> <a href="./session-sign-up/index.html">Записаться на занятие</a>
                            </div>
                        </div>
                    </div>
                    <button class="enter-button button-on-white"><a href="./login/index.html">Вход</a></button>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped src="../assets/globals.css">
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