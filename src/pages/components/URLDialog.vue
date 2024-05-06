<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-px-xl q-pb-xl">
        <div class="text-h5 text-center text-weight-bold q-mb-xl no-wrap">😀URL줄이기 성공!!😀</div>
        <!-- {{ changedURL.oldUrl }}
        {{ changedURL.newUrl }} -->
        <div>
          <div class="col items-center text-subtitle2 q-gutter-y-xs">
            <div class="row no-wrap items-center">
              <div class="col-3 text-red">이전({{ changedURL.oldUrl.length }}) :</div>
              <div class="ellipsis q-mr-sm">{{ changedURL.oldUrl }}</div>
              <q-btn
                class="col-1"
                size="sm"
                rounded
                icon="content_copy"
                @click="copyToClipboard(props.changedURL.oldUrl)"
              />
            </div>
            <div class="row no-wrap">
              <div class="col-3 text-primary">이후({{ changedURL.newUrl.length }}) :</div>
              <div class="ellipsis q-mr-sm">{{ changedURL.newUrl }}</div>
              <q-btn
                class="col-1"
                size="sm"
                rounded
                icon="content_copy"
                @click="copyToClipboard(props.changedURL.oldUrl)"
              />
            </div>
            <div>
              <div class="row items-center" :class="{ blink: isBlinking }">
                <q-icon name="announcement" class="q-mr-md" />
                <span> URL이 무려[</span>
                <span class="text-red text-weight-bolder text-h6">{{ displayNumber }}</span>
                <span>]만큼 줄였습니다</span>
                <q-icon name="thumb_up_alt" />
                <q-icon name="thumb_up_alt" />
              </div>
              <div class="text-weight-thin">
                ({{ changedURL.oldUrl.length }}-{{ changedURL.newUrl.length }})
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  changedURL: {
    type: Object,
    default: () => ({
      oldUrl: 'www.naver.com',
      newUrl: 'sss',
    }),
  },
});

const isBlinking = ref(false);

watch(
  () => props.modelValue,
  newVal => {
    if (newVal) {
      // triggerBlink();
      countup();
    }
  },
);

function triggerBlink() {
  isBlinking.value = true;

  setTimeout(() => {
    isBlinking.value = false;
  }, 1000);
}

const displayNumber = ref(0);
function countup() {
  const duration = 1000;
  const framerate = 1000 / 60;
  const totalFrames = duration / framerate;
  const target = props.changedURL.oldUrl.length - props.changedURL.newUrl.length;
  const increment = Math.floor(target / totalFrames);
  let currentFrame = 0;
  const timer = setInterval(() => {
    currentFrame++;
    displayNumber.value += increment;
    console.log(currentFrame, '/', totalFrames);
    if (currentFrame >= totalFrames) {
      displayNumber.value = target;
      clearInterval(timer);
    }
  }, framerate);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    $q.notify({
      message: '클립보드에 복사되었습니다',
      color: 'primary',
      position: 'top',
      timeout: 1000,
    });
  } catch (e) {
    console.error(e);
    $q.notify({
      message: '클립보드 복사에 실패했습니다',
      color: 'negative',
      position: 'top',
      timeout: 1000,
    });
  }
}
</script>

<style lang="scss" scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.blink {
  animation: blink 500ms infinite; /* 2초 동안 실행 */
}
</style>
