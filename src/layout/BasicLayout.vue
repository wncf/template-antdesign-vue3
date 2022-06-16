<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="256px" class="sider">
      <div class="logo" />
      <Menu :menu="menuList" />
    </a-layout-sider>
    <a-layout :style="{ minHeight: '100vh' }">
      <a-layout-header style="background: #fff; padding: 0; display: flex">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="onTrigger"
        />
        <menu-fold-outlined v-else class="trigger" @click="onTrigger" />
        <pageHeader />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          Height: '100%',
        }"
      >
      <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref, defineAsyncComponent, onBeforeMount,computed } from "vue";
import {AlertFilled} from "@ant-design/icons-vue";
import Menu from "~/components/Menu/index.vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
import pageHeader from "~/components/PageHeader/index.vue";
import {useAppStore} from "~/store/index";
const AppStore = useAppStore()
const menuList = computed(()=>AppStore.menu)
console.log(menuList.value, '菜单构建数据');

const collapsed = ref(false);
const onTrigger = () => {
  collapsed.value = !collapsed.value;
};
</script>
<style lang="less" scoped>
:deep(.sider){
  height: 100vh;
  overflow-y: auto;
}
:deep(.trigger) {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

:deep(.trigger:hover) {
  color: #1890ff;
}
:deep(.logo) {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
