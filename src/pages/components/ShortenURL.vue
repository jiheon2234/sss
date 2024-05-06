<template>
  <div class="">
    <div class="row justify-center q-pt-xl q-mt-xl text-h1 col-10 text-center items-center">
      <span>별</span>
      <span class="highlight"> 걸 </span>
      <span>다</span>
      <span class="highlight">?</span>
      <span>줄</span>
      <span class="highlight">임</span>
    </div>
    <q-form @submit.prevent="openURLDialog">
      <div class="row justify-center q-mt-xl" style="min-height: 100px">
        <q-input
          class="col-5"
          outlined
          v-model="inputUrl"
          :error="!isValidUrl"
          rounded
          color="blue"
          :label="!isValidUrl ? '올바른 url 형식이 아닙니다' : 'URL을 입력해주세요!!!!'"
          placeholder="URL을 입력해주세요"
        >
          <template v-slot:prepend>
            <q-icon name="link" />
          </template>
          <template v-slot:append>
            <q-btn
              dense
              rounded
              unelevated
              color="orange"
              label="Go!"
              :loading="isLoading"
              v-show="inputUrl.length === 0 || isValidUrl"
            />
          </template>
        </q-input>
      </div>
    </q-form>

    <URLDialog v-model="showURLDialog" :changedURL="changedURL" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import URLDialog from './URLDialog.vue';
import { getShortURL } from 'src/services/URLService';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';

const $q = useQuasar();

const inputUrl = ref('');
const urlPattern = /^(https?|ftp):\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(?::\d{1,5})?(?:\/[^\s]*)?$/;
const isValidUrl = computed(() => {
  return inputUrl.value.length === 0 || urlPattern.test(inputUrl.value);
});

const showURLDialog = ref(false);
const changedURL = ref({
  oldUrl: '',
  newUrl: '',
});

const { isLoading, execute } = useAsyncState(getShortURL, null, {
  immediate: false,
  throwError: false,
  onSuccess: short_url => {
    changedURL.value.oldUrl = inputUrl.value;
    changedURL.value.newUrl = short_url;
    inputUrl.value = '';
    showURLDialog.value = true;
  },
});

const openURLDialog = () => {
  $q.notify({
    message: '서버에 갔다오는 중...',
    color: 'primary',
    position: 'top',
    timeout: 500,
  });
  execute(0, inputUrl.value);
};
</script>

<style lang="scss" scoped>
.highlight {
  font-size: 1rem;
  color: $primary;
  margin: 0.1rem;

  body.screen--xs &,
  body.screen--sm & {
    display: none;
  }
}
</style>
