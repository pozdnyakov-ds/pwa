<template>
  <div>
    <VitePwaManifest />
    <Toolbar></Toolbar>
    <WorkArea></WorkArea>
  </div>
</template>

<script setup>
import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyCf9EH9DJnbHVZAQkYZEYySoX3Zvr-1lbg",
  authDomain: "cafecard-e3729.firebaseapp.com",
  databaseURL: "https://cafecard-e3729.firebaseio.com",
  projectId: "cafecard-e3729",
  storageBucket: "cafecard-e3729.appspot.com",
  messagingSenderId: "700682171623",
  appId: "1:700682171623:web:471ee3447e7b4f41095e42",
  measurementId: "G-JXJY457LXB"
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)
console.log("messaging: ", messaging)

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