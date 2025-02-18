<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home',
  titleTemplate: '%s%separator%siteName',
  templateParams: { separator: ' - ', siteName: 'js-monorepo-template' },
  htmlAttrs: {
    lang: navigator.language,
  },
})
</script>

<template>
  <BApp>
    <RouterView />
  </BApp>
</template>
