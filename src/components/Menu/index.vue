<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    @openChange="onOpenChange"
    @select="menuItemSelect"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in props.menu" :key="item.code">
      <template v-if="!item.children">
        <a-menu-item :key="item.code">
          <router-link :to="item.url" replace>{{ item.name }}</router-link>
          <template #icon v-if="item.icon">
            <component :is="`${item.icon}Outlined3`" />
          </template>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.code" :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>
<script setup>
import { defineComponent, ref, computed, watch, nextTick } from "vue";
import subMenu from "./subMenu.vue";
import { useRoute } from "vue-router";
const props = defineProps(["menu"]);
const route = useRoute();
const collapsed = ref(false);
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const selectedKeys = ref([]);
const openKeys = ref([]);
// 点击其他菜单时，收起当前菜单
const onOpenChange = (CurrentKeys) => {
  const arry = CurrentKeys[CurrentKeys.length - 1];
  openKeys.value = [arry];
};
// 监视路由数据变化，选中左侧选中项
watch(
  () => route.name,
  (newValue) => {
    nextTick(() => {
      if (!selectedKeys.value.includes(newValue)) {
        selectedKeys.value = [newValue];
      }
    });
  },
  { immediate: true }
);
const menuItemSelect = (item) => {};
</script>
