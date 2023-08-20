<template>
    <div class="logo">
        <img src="/images/logos/logo_blank.png" alt="Logo" />
        <p class="logoText">Cafecard TV</p>

        <div class="infoBlock">
            <p>{{ $t('index.waiting_connection') }}</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Чтобы логотип был по центру даже на экранах с маленькой высотой */
}
.logoText {
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 32pt;
}
.infoBlock {
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #ffffff33;
    padding: 20px;
    margin: 40px 0 0 0;
}
p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 18pt;
    color: #fff;
    text-align: center;
}
</style>