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
        <div class="text-h5 text-center text-weight-bold q-mb-xl">URL을 줄였음</div>
        <!-- {{ changedURL.oldUrl }}
        {{ changedURL.newUrl }} -->
        <div class="row">
          <div class="row">
            <div class="col-2 text-primary">{{ changedURL.oldUrl.length }}11</div>
            <div class="col-8">{{ changedURL.oldUrl }}</div>
          </div>

          <div class="col-8">{{ changedURL.newUrl }}</div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  changedURL: {
    type: Object,
    default: () => ({
      oldUrl: '',
      newUrl: 'sss',
    }),
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped></style>
