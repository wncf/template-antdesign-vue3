<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const emit = defineEmits(['handleOk', 'update:visible'])
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  modalProps: {
    type: Object,
    default: () => ({})
  }
})
const visible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emit('update:visible', value)
  }
})
const handleOk = () => {
  emit('handleOk')
}
</script>
<template>
  <a-modal v-model:visible="visible" width="620px" :bodyStyle="{ minHeight: '400px' }" @ok="handleOk"
    v-bind="props.modalProps">
    <slot />
  </a-modal>
</template>
<style lang="less" scoped>
:deep(.ant-modal) {
  height: 200px;
}
</style>