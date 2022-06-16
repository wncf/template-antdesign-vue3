<template>
  <a-sub-menu :key="menuInfo.code">
    <template #icon v-if="menuInfo.icon">
      <component :is="`${menuInfo.icon}Outlined`" />
    </template>
    <template #title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.code">
      <template v-if="!item.children">
        <a-menu-item :key="item.code">
          <template #icon v-if="item.icon">
            <component :is="`${item.icon}Outlined`" />
          </template>
          <router-link :to="item.url" replace>{{ item.name }}</router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.code" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default {
  name: "SubMenu",
  props: { menuInfo: { type: Object, default: () => ({}) } },
  components: { PieChartOutlined, MailOutlined },
};
</script>
