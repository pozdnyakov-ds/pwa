<template>
    <div class="logo">
        <img src="/images/logos/logo_blank.png" alt="Logo" />
        <p class="logoText">{{ $t('index.title') }}</p>

        <div class="infoBlock">
            <!-- <p>{{ $t('index.set_display_code') }} </p> -->

            <div style="margin: 10px 0 0 0;">
                <v-form v-model="valid">
                    <v-container style="margin: 0;">
                        <v-row>
                            <v-col sm="5">
                                <v-text-field v-model="stateCode" class="codeInput" type="text" counter=10 :label="$t('index.code')"
                                    outlined :rules="[
                                        required($t('index.code_rules')), 
                                        minLength($t('index.code_rules_10'), 10), 
                                        maxLength($t('index.code_rules_10'), 10)
                                    ]"
                                    style="background-color: #fff; color: #333; border-radius: 5px; padding: 0px;" />
                            </v-col>
                            <v-col sm="3">
                                <v-select
                                    :label="$t('index.language')"
                                    :items="['ru', 'en']"
                                    :value="$i18n.locale"
                                    v-model="$i18n.locale"
                                    ></v-select>
                            </v-col>
                            <v-col sm="4">
                                <v-select
                                    :label="$t('index.timezone')"
                                    :items="timezones"
                                    :value="stateTimezone"
                                    v-model="stateTimezone"
                                    ></v-select>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: 0px;">
                            <v-col>    
                                <div class="col-12">
                                    <v-btn style="background-color: #666; color: #fff; margin: 0;" block @click="saveCode($t('index.save_code'), $i18n.locale)" :disabled="!valid">{{ $t('index.save') }}</v-btn>
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
const timezone = (new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]).substring(0, 6)
console.log("timezone: ", timezone)

const state = useStorage('display', { isCode: false, code: '0123456789', locale: 'ru', timezone: 'GMT+03' })
const stateCode = ref(state.value.code)
const stateTimezone = ref(state.value.timezone)

const timezones = ['GMT-12', 'GMT-11', 'GMT-10', 'GMT-09', 'GMT-08', 'GMT-07', 'GMT-06', 'GMT-05', 'GMT-04', 'GMT-03', 'GMT-02', 'GMT-01',
    'GMT+0', 'GMT+01', 'GMT+02', 'GMT+03', 'GMT+04', 'GMT+05', 'GMT+06', 'GMT+07', 'GMT+08', 'GMT+09', 'GMT+10', 'GMT+11', 'GMT+12']
let valid = ref(false)

const required = (propertyType) => {
    return v => v && v.length > 0 || `${propertyType}`
}
const minLength = (propertyType, minLength) => {
	return v => v && v.length >= minLength || `${propertyType}`
}
const maxLength = (propertyType, maxLength) => {
	return v => v && v.length <= maxLength || `${propertyType}`
}

const saveCode = (mess, locale) => {
    state.value.isCode = true
    state.value.code = stateCode
    state.value.locale = locale
    state.value.timezone = stateTimezone
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
    border-radius: 10px;
    background-color: #fff;
    padding: 0px;
    margin: 40px 0 0 0;
    width: 30%;
}
p {
    margin: 10px 0 0 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 18pt;
    color: #333;
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