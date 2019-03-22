<template>
  <div class="main">
    <div class="main-body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar v-model="tabbarActive"
                :fixed="false">
      <van-tabbar-item icon="home-o"
                       :to="{name:'home'}"
                       replace>首页</van-tabbar-item>
      <van-tabbar-item icon="search"
                       info='1'>标签</van-tabbar-item>
      <van-tabbar-item icon="user-o"
                       dot
                       :to="{name:'my'}"
                       replace>MY</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "Main",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      tabbarActive: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  &-body {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
