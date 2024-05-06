<template>
  <q-page class="q-pa-xl">
    <ShortenURL />
    <SlangCount />
  </q-page>
</template>

<script setup>
import ShortenURL from './components/ShortenURL.vue';
import SlangCount from './components/slang/SlangCount.vue';
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  layout: default
</route>
