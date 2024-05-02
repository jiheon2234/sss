<template>
  <q-page>
    <div class="row window-height">
      <div
        class="col flex justify-center items-center min-width-200px"
        style="min-width: 1000px"
      >
        <q-card flat>
          <div class="row">
            <div>
              <q-card-section>
                <div
                  class="text-h1 text-weight-bold text-center flex justify-center items-center q-mx-md"
                >
                  <span>별</span>
                  <span
                    class="highlight"
                    style="margin-left: 0.5rem; margin-right: 0.5rem"
                    >걸</span
                  >
                  <span>다</span>
                  <span style="margin-left: 0.5rem">줄</span>
                  <span class="highlight" style="margin-left: 0.5rem"
                    >이네</span
                  >
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="row">
            <q-card-section>
              <q-form>
                <div class="q-gutter-sm col-12 row items-center">
                  <q-input
                    class="col-grow"
                    rounded
                    outlined
                    v-model="inputUrl"
                    :label="
                      inputUrl == ''
                        ? 'URL을 입력해주세요'
                        : isValidUrl
                        ? 'URL'
                        : '올바른 URL 형식이 아닙니다'
                    "
                    :color="
                      inputUrl == '' ? 'primary' : isValidUrl ? 'green' : 'red'
                    "
                  />
                  <q-btn color="red" round label="GO!" :disable="!isValidUrl" />
                </div>
              </q-form>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
const inputUrl = ref('');

const isValidUrl = computed(() => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)([\\da-z\\.-]+\\.[a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$',
    'i',
  );
  console.log(urlPattern.test(inputUrl.value));
  return urlPattern.test(inputUrl.value);
});
</script>

<style lang="scss" scoped>
.highlight {
  font-size: 1rem;
  color: $primary;
  margin: 0.5rem;

  body.screen--xs &,
  body.screen--sm & {
    display: none;
  }
}
</style>

<route lang="yaml">
name: home-page
meta:
  layout: default
</route>
