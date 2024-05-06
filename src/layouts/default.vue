<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense>
          <q-toolbar-title>
            <q-avatar>
              <img src="logo.png" />
            </q-avatar>
            별다줄
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" to="/" />
        <q-btn stretch flat label="About" />
        <q-btn stretch flat label="Pricing" />
        <q-btn stretch flat label="Developers" />
        <q-separator class="q-my-sm q-mr-sm" vertical />
        <q-btn unelevated rounded color="primary" label="Sign In/ Sign up" />
        <q-avatar color="warning" text-color="white">J</q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.meta?.width);

const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1920px',
  margin: '0 auto',
}));
</script>
