<template>
  <div class="mv-image">
    <img v-lazy="src">
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import { getAgentParams } from "@/actions/marvel";
import qs from "querystring";
export default {
  name: "MvImage",
  props: {
    path: String,
    extension: {
      default: "jpg"
    }
  },
  data() {
    return {};
  },
  computed: {
    src() {
      return this.path + "/standard_amazing." + this.extension;
    }
  }
};
</script>

