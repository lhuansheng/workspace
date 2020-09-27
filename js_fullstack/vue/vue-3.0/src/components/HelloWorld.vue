<template>
  <div class="hello">
    adsf
    <h1>{{ timeString }}</h1>
   
  </div>
</template>

<script>
import useClock from '../useClock'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const timeString = useClock()
    return {timeString}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
