<template>
  <van-popup v-model="show"
             position="bottom">
    <van-picker show-toolbar
                :title="title"
                :columns="columns"
                @change="onChange"
                @cancel="show = false"
                @confirm="onConfirm"
                value-key="label"
                ref="picker"
                :loading="loading" />
  </van-popup>
</template>
<script>
import { Popup, Picker, Area } from "vant";
export default {
  name: "myArea",
  components: {
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Area.name]: Area
  },
  props: {
    value: {
      default: false,
      type: Boolean
    },
    title: {
      default: "123"
    },
    areaList: {
      default: []
    },
    columnsNum: {
      default: 3
    },
    loading: {
      default: false
    },
    defaultSelect: {
      default: () => []
    }
  },
  data() {
    return {
      areas: {},
      show: false
    };
  },
  computed: {
    columns() {
      let _arr = [];
      for (let index = 0; index < this.columnsNum; index++) {
        _arr.push({ values: [] });
      }
      return _arr;
    }
  },
  watch: {
    value: {
      handler(val) {
        this.show = val;
      },
      immediate: true
    },
    show(val) {
      this.$emit("input", val);
      val && this.init();
    }
  },
  methods: {
    onChange(picker, data, columnIndex) {
      this.setSelect(columnIndex);
    },
    setSelect(columnIndex, defaultSelect) {
      const { picker } = this.$refs;
      if (!picker) {
        return;
      }
      for (let index = columnIndex; index <= this.columnsNum; index++) {
        if (index === 0) {
          picker.setColumnValues(index, this.areas["0"]);

          // 设置默认选择
          if (defaultSelect && defaultSelect[index]) {
            picker.setColumnIndex(
              index,
              this.areas["0"].findIndex(item => {
                return defaultSelect[index].value === item.value;
              })
            );
          }
        } else {
          let _data = picker.getColumnValue(index - 1);
          if (_data && _data.value && this.areas[_data.value]) {
            picker.setColumnValues(index, this.areas[_data.value]);
            // 设置默认选择
            if (defaultSelect && defaultSelect[index]) {
              picker.setColumnIndex(
                index,
                this.areas[_data.value].findIndex(item => {
                  return defaultSelect[index].value === item.value;
                })
              );
            }
          } else {
            picker.setColumnValues(index, []);
          }
        }
      }
    },
    onConfirm(...arg) {
      this.show = false;
      this.$emit("confirm", ...arg);
    },
    init() {
      this.areas = {};
      this.areaList.forEach(item => {
        if (!item.parentId) {
          if (!this.areas["0"]) {
            this.areas["0"] = [];
          }
          this.areas["0"].push(item);
        } else {
          if (!this.areas[item.parentId]) {
            this.areas[item.parentId] = [];
          }
          this.areas[item.parentId].push(item);
        }
      });
      this.setSelect(0, this.defaultSelect);
    }
  }
};
</script>
