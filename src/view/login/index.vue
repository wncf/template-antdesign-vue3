<template>
  <div class="container">
    <div class="logo">
      <div class="logo-text">模板项目</div>
    </div>
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginBanner from "./components/banner.vue";
import LoginForm from "./components/LoginForm.vue";
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  min-width: 1080px;
  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: white;
    font-size: 20px;
  }
}
</style>
