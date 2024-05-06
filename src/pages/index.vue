<template>
  <q-page class="q-pa-xl">
    <div class="row"></div>
    <ShortenURL />
    <SlangCount />
  </q-page>
</template>

<script setup>
import ShortenURL from 'src/components/ShortenURL.vue';
import SlangCount from 'src/components/slang/SlangCount.vue';
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  layout: default
</route>
