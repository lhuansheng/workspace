<template>
  <div class="hello">
    <el-button type="primary" loading icon="el-icon-edit" @click="doLogin">成功按钮</el-button>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"  >edit</el-button>
      <el-button type="primary" icon="el-icon-share" >share</el-button>
      <el-button type="primary" icon="el-icon-delete">delete</el-button>
    </el-button-group>
  </div>
</template>

<script>
// el-button? component 手写element-ui
import EleButton from "./EleButton.vue";
import EleButtonGroup from "@/components/EleButtonGroup.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    "el-button": EleButton,
    "el-button-group": EleButtonGroup,
  },
  methods: {
    doLogin(evt1) {
      console.log(evt1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
