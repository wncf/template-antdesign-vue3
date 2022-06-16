<template>
  <div class="header-fill">
    <div class="user">
      <a-avatar class="avatar" src="https://joeschmoe.io/api/v1/random" />
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent> 用户姓名 </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">更多信息</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
}
.header-fill {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 24px;
}
.avatar {
  margin-right: 12px;
}
.ant-dropdown-link {
  height: 42px;
  width: 120px;
  text-align: center;
  line-height: 42px;
}
</style>
