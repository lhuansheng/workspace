<template>
  <div class="hello">
    <id-badge :value="12" class="item" :max="9" :hidden="isHidden" >
      <el-button size="small">评论</el-button>
    </id-badge>
    <!-- <el-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge is-dot class="item">数据查询</el-badge> -->
  </div>
</template>

<script>
import IdBadge from '@/components/IdBadge'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    'id-badge':IdBadge
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = true
    }, 3000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
