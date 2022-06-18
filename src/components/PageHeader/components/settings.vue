<script setup>
import { ref } from "vue";
import sModal from '~/components/sModal/index.vue'
const visible = ref(false)
const onSetting = () => {
  visible.value = true
}

</script>
<template>
  <setting-outlined class="icon-setting" @click="onSetting" />
  <sModal v-model:visible="visible" :modalProps="{
  title:'设置',footer: null, centered: true }">
    3fdsa
  </sModal>
</template>
<style lang="less" scoped>
.icon-setting {
  cursor: pointer;
  font-size: 14px;
}
</style>
