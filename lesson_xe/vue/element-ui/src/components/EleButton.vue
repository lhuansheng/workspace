<template>
  <div>
    <button
    @click="doLogin"
    class="el-button"
    :class="[
    type?'el-button--'+type:'',
    {
      'is-round':round,
      'is-circle': circle
    }
    ]"
    
    >
      <!-- {{type}} - {{tit}} -->
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  // props 检查 结构
  // vue 怎么做?
  data() {
    return {
      tit: "hello",
    };
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    round: Boolean,
    circle: Boolean,
  },
  created() {
    console.log(this.type, this.tit);
  },
  method: {
    doLogin(e) {
      console.log(e)
    }
  }
};
</script>
<style lang="stylus"></style>
