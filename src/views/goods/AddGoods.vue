<template>
    <div class="add-goods">
        <el-row>
            <el-col :span="24">
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-steps  :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
            <el-step title="步骤 4"></el-step>
            <el-step title="步骤 5"></el-step> 
        </el-steps>
        <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" class="p-20">
            <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
            <el-tab-pane label="商品参数" name="second">商品参数</el-tab-pane>
            <el-tab-pane label="商品属性" name="third">商品属性</el-tab-pane>
            <el-tab-pane label="商品图片" name="fourth">商品图片</el-tab-pane>
            <el-tab-pane label="商品内容" name="fifth">商品内容</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            activeName:'second'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
        switch(tab.name) {
            case 'first':
                this.active = 0
                break
            case 'second':
                this.active = 1
                break
            case 'third':
                 this.active = 2
                break
            case 'fourth':
                this.active = 3
                break
            case 'fifth':
                this.active = 4
                break
            default:
                this.active = 0
                break
        }
      }
    }
}
</script>
<style lang="scss">
    .add-goods {
        .p-20 {
            padding: 20px;
            margin-top: 40px
        }
    }
</style>

