import { useHead } from '@unhead/vue'
<script setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'

const { t } = useI18n()

useHead({
  title: "Welcome",
})</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('welcome') }}</h1>
  </BContainer>
</template>
