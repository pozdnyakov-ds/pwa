<template>
    <div class="layout" id="layout">
        <logoBlank v-if="!state.isCode"/>
    </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
const state = useStorage('display', { isCode: false, code: '' })
if (!state.isCode) {
    localStorage.setItem('display', { isCode: false, code: '' })
}

</script>

<style lang="scss" scoped>
.layout {
    height: calc(100vh - 5px); 
    width: 100%;
    background-color: #000;
}
</style>