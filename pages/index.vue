<template>
  <div>
    <VitePwaManifest />
    <Toolbar></Toolbar>
    <WorkArea></WorkArea>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
const state = useStorage('display', { isCode: false, code: '', locale: 'ru', timezone: 'GMT+3' })

onMounted(() => {

  // Check language
  let locale = state.value.locale
  getCurrentInstance().proxy.$i18n.locale = locale
  
  // Check display code
  if (state.value.isCode) {
    let code = getCurrentInstance().proxy.$t('index.started_with_code')
    useNuxtApp().$toast.success(code + state.value.code)
  } else {
    let code = getCurrentInstance().proxy.$t('index.started')
    useNuxtApp().$toast.success(code)
  }


  
})
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
</style>