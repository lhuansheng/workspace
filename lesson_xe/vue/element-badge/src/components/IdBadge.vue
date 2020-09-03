<template>
  <div class="el-badge">
    <slot></slot>
    <!-- sup 右上角标签 -->
    <transition name="el-zoom-in-center">
      <sup v-text="content" class="el-badge_content" v-show="!hidden"> </sup>
    </transition>
  </div>
</template>

<script>
import { type } from "os";
export default {
  name: "IdBadge",
  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;
      // 框架除了要有通用性之外，可配置性
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  },
  props: {
    // 通用性
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return ["primary", "success", "info", "danger"].indexOf(val) > -1;
      }
    }
  }
};
</script>

<style scoped></style>
