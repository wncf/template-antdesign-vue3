<script setup>
import { computed } from "vue";
import { useUserStore } from "~/store/index";
import { token } from "~/config/Static_config";
import settingsVue from "./components/settings.vue";
const UserStore = useUserStore();
const UserInfo = computed(() => UserStore.userInfo);
const account = UserInfo.value.account;

const onLogout = () => {
  localStorage.removeItem(token);
  window.location.reload();
};
</script>

<template>
  <div class="header-fill">
    <div class="user">
      <a-avatar class="avatar" src="https://joeschmoe.io/api/v1/random" />
      <a-dropdown class="user-dropdown">
        <a class="ant-dropdown-link" @click.prevent> {{ account }} </a>
        <template #overlay>
          <a-menu class="menu">
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a @click="onLogout">退出登录</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">更多信息</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <settingsVue />
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu {
  a {
    display: block;
    padding: 4px 0;
  }
}
.user {
  display: flex;
  align-items: center;
}
.header-fill {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 26px;
}
.avatar {
  margin: 6px;
}
.ant-dropdown-link {
  height: 64px;
  min-width: 80px;
  text-align: center;
  line-height: 64px;
}
.user-dropdown{
  margin-right: 24px;
}
</style>
