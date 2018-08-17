<template>
  <div>
    <el-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        value2: true,
        value1:''
      }
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
