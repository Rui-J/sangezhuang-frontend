<template>
  <div class="demo">
    <button @click=" show = !show">1</button>
    <van-popup v-model="show"
               position="bottom">
      <van-picker show-toolbar
                  :columns="[]"
                  value-key="label"
                  ref="picker" />
    </van-popup>
    <!-- <my-area v-model="show"
             :area-list="areaList"
             ref="area"
             :columns-num='4'></my-area> -->

  </div>
</template>
<script>
import MyArea from "@/components/MyArea";
import { Popup, Picker, Area } from "vant";
export default {
  name: "Demo",
  components: {
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    MyArea
  },
  data() {
    return {
      show: false,
      areaList: [
        {
          label: "北京市",
          value: 110000
        },
        {
          label: "北京市",
          value: 110100,
          parentId: 110000
        },
        {
          label: "东城区",
          value: 110101,
          parentId: 110100
        },
        {
          label: "东城区县",
          value: 11010101,
          parentId: 110101
        },
        {
          label: "西城区",
          value: 110102,
          parentId: 110100
        },
        {
          label: "朝阳区",
          value: 110105,
          parentId: 110100
        },
        {
          label: "丰台区",
          value: 110102,
          parentId: 110106
        },
        {
          label: "天津市",
          value: 120000
        },
        {
          label: "天津市",
          value: 120100,
          parentId: 120000
        },
        {
          label: "河东区",
          value: 120102,
          parentId: 120100
        },
        {
          label: "河东区3",
          value: 120103,
          parentId: 120100
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.demo {
}
</style>

