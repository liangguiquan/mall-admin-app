<template>
  <div class="home">
    <left-menu></left-menu>
    <div class="main-app" :class="$store.state.collapsed ? 'menu-unfold' : ''">
      <slider-nav></slider-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from "../../components/menu.vue";
import SliderNav from "../../components/sliderNav.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    LeftMenu,
    SliderNav,
  },
  methods: {
  },
};
</script>


<style lang="less">
@import url("~@/assets/css/home.less");

// ~代表后面的文件作为一个模块来编译，没有~会报错
</style>
