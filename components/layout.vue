<template>
    <div class="layout" id="layout">
        <p>{{ $t('index.render') }}{{ state.code }}</p>
    </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
const state = useStorage('display', { isCode: false, code: '', locale: 'ru', timezone: 'GMT+03' })

</script>

<style lang="scss" scoped>
.layout {
    height: calc(100vh - 5px); 
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 10px;
}
</style>