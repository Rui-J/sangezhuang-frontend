<template>
  <div class="home">
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';

export default {
  name: 'home',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      list: [],
      params: {
        offset: 0,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {},
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
