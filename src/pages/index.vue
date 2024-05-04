<template>
  <q-page class="q-pa-xl">
    <ShortenURL />
  </q-page>
</template>

<script setup>
import ShortenURL from './components/ShortenURL.vue';
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  layout: default
</route>
