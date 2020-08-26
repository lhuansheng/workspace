<template>
  <button
    @click="handleClick"
    class="el-button"
    :type="nativeType"
    :disabled="loading"
    :autofocus="autofocus"
    :class="[
        type?'el-button--'+type:'',
        buttonSize?'el-button--'+buttonSize:'',
        {
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': buttonDisabled,
            'is-plain': plain,
        }
        ]"
        
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- {{type}} - {{tit}} -->
    <!-- slot是文字内容 -->
    <!-- 默认slot -->
    <span v-if="$slots.default"><slot v-if="!icon"></slot></span>
  </button>
</template>
<script>
export default {
  name: 'EleButton',
  data() {
    return {
      tit: "hello",
      
    };
  },
  computed: {
    buttonDisabled(){
      return this.disabled
    },
    buttonSize() {
      return this.size
    }
  },
  props: {
    size: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: "default",
    },
    round: Boolean,
    circle: Boolean,
    icon: {
      type: String,
      default: ''
    },
    loading:Boolean,
    autofocus:Boolean,
    plain: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
<style>
</style>
