<template>
  <div>
    <VitePwaManifest />
    <Toolbar></Toolbar>
    <WorkArea></WorkArea>
  </div>
</template>

<script setup>
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
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
var messaging = null

!async function() {
  messaging = getMessaging(app)

  getToken(messaging, { vapidKey: 'BMFKhOoG_T398r7jsT1fx_tGE-9KqMbf3x402KBmEDBro6s3AZsJofkIgdTPcYb0wcN49yRjXSKwwB0vN65_1yY' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log('Send the token to your server and update the UI if necessary')
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

}()

import { useStorage } from '@vueuse/core'
const state = useStorage('display', { isCode: false, code: '', locale: 'ru', timezone: 'GMT+03' })

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