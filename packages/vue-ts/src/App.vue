<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home',
})
</script>

<template>
  <BApp>
    <RouterView />
  </BApp>
</template>
