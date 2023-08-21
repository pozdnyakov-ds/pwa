<template>
    <div class="workArea">
        <div v-if="!state.isCode">
            <infoStart />
        </div>
        <!-- <div v-else-if="false">
            <infoConnect />
        </div> -->
        <div v-else>
            <Layout></Layout>
        </div>
    </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
const state = useStorage('display', { isCode: false, code: '', locale: 'ru', timezone: 'GMT+3' })

</script>

<style lang="scss" scoped>
.workArea {
    height: calc(100vh - 5px); 
    width: 100%;
    background-color: #000;
}
</style>