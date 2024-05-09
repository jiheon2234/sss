<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-center justify-center">
        <div><img :src="`/consonants/${$route.params.id}.png`" /></div>
        <span class="text-h6"> 으로 시작하는 줄임말을 아라보자 </span>
      </div>

      <section class="col-7">
        <q-list bordered seperator>
          <q-item v-for="slang in slangs" :key="slang.id">
            <q-item-section>
              <q-item-label>{{ slang.word }}</q-item-label>
              <q-item-label caption>{{ slang.meaning }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div
          v-intersection-observer="handleInterSectionObserver"
          class="bg-primary"
          style="height: 100px"
        >
          {{ isLoading ? 'Loading...' : 'Load More' }}
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getSlangsByChar } from 'src/services/slangService';
import { ref } from 'vue';
import { vIntersectionObserver } from '@vueuse/components';
import { useAsyncState } from '@vueuse/core';

const route = useRoute();
const slangs = ref([]);

const { isLoading, execute } = useAsyncState(getSlangsByChar, [], {
  immediate: false,
  onSuccess: result => {
    slangs.value = [...slangs.value, ...result];
  },
});

const loadMore = () => {
  pageNum.value += 1;
  execute(0, route.params.id);
};

const pageNum = ref(0);
const hasMore = ref(true);

const handleInterSectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting) {
    console.log('### handleInterSectionObserver ###');
    loadMore();
  }
};
</script>

<style lang="scss" scoped></style>
