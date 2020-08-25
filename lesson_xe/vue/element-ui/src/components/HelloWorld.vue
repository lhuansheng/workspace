<template>
  <div class="hello">
    <el-button type="primary" round circle @click='doLogin'>默认按钮</el-button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// el-button? components 手写 element-ui

import EleButton from "./EleButton.vue"; // react
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    "el-button": EleButton,
  },
  methods: {
    doLogin(e) {
      this.$emit('click',e)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
