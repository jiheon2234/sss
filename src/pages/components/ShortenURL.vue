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

    <div class="row justify-center q-mt-xl" style="min-height: 100px">
      <q-input
        class="col-5"
        outlined
        v-model="inputUrl"
        :error="1 || !isValidUrl"
        rounded
        color="blue"
        :label="true || !isValidUrl ? '올바른 url 형식이 아닙니다' : 'URL을 입력해주세요'"
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
            :loading="false"
            v-show="1 || !isValidUrl"
            @click="openURLDialog"
          />
        </template>
      </q-input>
    </div>

    <URLDialog v-model="showURLDialog" :changedURL="changedURL" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import URLDialog from './URLDialog.vue';
import { getShortURL } from 'src/services/URLService';
const inputUrl = ref('');
const urlPattern = new RegExp(
  '^(https?:\\/\\/)([\\da-z\\.-]+\\.[a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$',
  'i',
);
const isValidUrl = computed(() => {
  return inputUrl.value.length === 0 || urlPattern.test(inputUrl.value);
});

const showURLDialog = ref(false);
const changedURL = ref({
  oldUrl: '',
  newUrl: '',
});

const openURLDialog = async () => {
  const short_url = await getShortURL(inputUrl.value);
  changedURL.value.oldUrl = inputUrl.value;
  changedURL.value.newUrl = short_url;
  inputUrl.value = '';
  showURLDialog.value = true;
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
