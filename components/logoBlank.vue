<template>
    <div class="logo">
        <img src="/images/logos/logo_blank.png" alt="Logo blank" /><br>
        <div class="logo_text">Cafecard TV</div>
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
.logo_text {
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 48pt;
}
</style>