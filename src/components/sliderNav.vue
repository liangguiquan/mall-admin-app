<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        欢迎，梁桂权
        <a-icon type="down" />
      </li>
      <li @click="loginOut">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
    methods: {
    toggleCollapsed() {
      this.$store.commit('changeCollapsed');
    },
    loginOut(){
      this.$store.dispatch('loginOut');
      this.$router.push({
        name: 'Login'
      })
    }
  },
}
</script>