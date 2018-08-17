<template>
  <div>
    我是首页
  </div>
</template>
<script>
import { userList } from "../api/index";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      userList({ params: { query: "", pagenum: 1, pagesize: 5 } })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="css" scoped>

</style>