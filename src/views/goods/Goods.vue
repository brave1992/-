<template>
    <div class="goods">
        <el-row>
            <el-col :span="24">
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button type="success" plain @click="addGoods">添加商品</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods: {
       addGoods() {
           this.$router.push({name: 'AddGoods'})
       } 
    }
}
</script>
<style lang="scss">

</style>

