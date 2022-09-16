<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">登录</div>
    <div class="login-form-sub-title">登录模板项目</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      :model="userInfo"
      name="basic"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
      >
        <a-input
          autocomplete="off"
          v-model:value="userInfo.username"
          placeholder="用户名"
        >
          <template #prefix>
            <user-outlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        name="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <a-input-password
          autocomplete="off"
          v-model:value="userInfo.password"
          placeholder="密码"
        >
          <template #prefix>
            <lock-outlined />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical" style="width: 100%">
        <div class="login-form-password-actions">
          <a-checkbox v-model:checked="rememberPassword"> 记住密码 </a-checkbox>
          <a>忘记密码</a>
        </div>
        <a-button type="primary" block :loading="loading" html-type="submit">
          登录
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
// import useLoading from "@/hooks/loading";
import { useUserStore } from "~/store";
const errorMessage = ref("");
const router = useRouter();
const loading = ref(false);
const UserStore = useUserStore();
const rememberPassword = ref(false);
const userInfo = reactive({
  username: "",
  password: "",
});
const onFinishFailed = (errorInfo) => {
  // 校验失败时调用
};
const onFinish = (values) => {
  loading.value = true;
  UserStore.onLogin({ ...values, remember: rememberPassword.value }).then(
    (res) => {
      console.log(res);
      loading.value = false;
      router.push({ path: "/" });
    }
  );
};
</script>

<style lang="less" scoped>
.login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
