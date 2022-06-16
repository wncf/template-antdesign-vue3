<template>
  <div class="flexCenter">
    <a-space direction="vertical" align="center">
      <a-typography-title :level="3">404</a-typography-title>
      <a-typography-text type="secondary">这个页面好像并不存在</a-typography-text>
      <div>
        <a-button type="primary" @click="goBackHome">返回首页</a-button>
      </div>
    </a-space>
  </div>
</template>
<script setup>
import router from "~/router/index";
const goBackHome = () => {
  router.push({ path: "/index/index" });
};
</script>
<style lang="less">
.flexCenter {
  height: 100%;
  flex-direction: column;
}
</style>
