<template>
    <div class="logo">
        <img src="/images/logos/logo_blank.png" alt="Logo" />
        <p class="logoText">{{ $t('index.title') }}</p>

        <div class="infoBlock">
            <p>{{ $t('index.set_display_code') }} </p>
            <div style="margin: 10px 0 0 0;">
                <v-form v-model="valid">
                    <v-container style="margin: 0;">
                        <v-row>
                            <v-col>
                                <div class="col-12">
                                    <v-text-field v-model="state.code" class="codeInput" label="Код" type="text" counter=10
                                    outlined :rules="[required('Code'), minLength('Code', 10), maxLength('Code', 10)]"
                                    style="background-color: #fff; color: #333; border-radius: 5px;" />
                                </div>
                                <div class="col-12" style="padding: 0px; margin-bottom: 0px;">
                                    <v-btn style="background-color: #666; color: #fff; margin: 10px 0 0 0;" block @click="saveCode($t('index.save_code'))" :disabled="!valid">{{ $t('index.save') }}</v-btn>
                                </div>
                            </v-col>
                       </v-row>
                    </v-container>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script setup>
// AN73PYPXW9
import { useStorage } from '@vueuse/core'
const state = useStorage('display', { isCode: false, code: '', lang: 'ru', timezone: 'GMT+3' })

let valid = ref(false)

const required = (propertyType) => {
    return v => v && v.length > 0 || `Нужно указать ${propertyType}`
}
const minLength = (propertyType, minLength) => {
	return v => v && v.length >= minLength || `${propertyType} должен иметь длину ${minLength} символов!`
}
const maxLength = (propertyType, maxLength) => {
	return v => v && v.length <= maxLength || `${propertyType} должен иметь длину ${maxLength} символов!`
}

const saveCode = (mess) => {
    state.value.isCode = true
    useNuxtApp().$toast.success(mess + state.value.code);
}

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
.codeInput {
    margin: 0 20px 0 0;
    padding: 5px 10px;
    font-family: 'Roboto';
    font-size: 16pt;
    border-radius: 5px;
    color: #333;
    background-color: #eee;
}
button {
    margin: 0;
    padding: 5px 10px;
    font-family: 'Roboto';
    font-size: 16pt;
    border-radius: 5px;
    background-color: #fff;
}
.buttons .v-btn__overlay{
    opacity: 1 !important;
}
</style>