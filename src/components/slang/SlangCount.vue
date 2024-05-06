<template>
  <div class="row q-col-gutter-md">
    <div
      v-for="slangCnt in slangCnts"
      :key="slangCnt.key"
      class="col-12 col-sm-2 col-md-2 col-lg-2"
    >
      <q-card class="my-card">
        <q-img :src="`/consonants/${slangCnt.key}.png`">
          <div class="absolute-full flex flex-center text-h6">{{ slangCnt.cnt }}개</div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { getAllCharCnt } from 'src/services/slangService';
import { onMounted, ref } from 'vue';

const slangCnts = ref([]);

onMounted(async () => {
  const res = await getAllCharCnt();
  console.log(res);
  slangCnts.value = res;
});
</script>

<style lang="scss" scoped>
.my-card {
  &:hover .absolute-full {
    visibility: visible; // 보임 처리
    opacity: 1; // 투명도를 1로 설정
  }

  .absolute-full {
    visibility: hidden; // 숨김 처리
    opacity: 0; // 투명도를 0으로 설정
    transition: opacity 0.3s ease-in-out; // 투명도 변경에 대한 부드러운 전환 효과
    text-weight: bold;
  }
}
</style>
