<template>
    <div class="category">
        <!-- 面包屑 -->
        <el-row>
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>商品分类</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <!-- 添加分类按钮 -->
        <el-row>
            <el-col :span="24">
                <el-button type="success" plain @click="addDialogFormVisible=true">添加分类</el-button>
            </el-col>
        </el-row>

        <!-- 引入TreeGrid组件 -->
        <tree-grid :treeStructure="true" :columns="columns" :data-source="dataSource"
        @deleteCate="deleteCategory" @editCate="editCategory">
        </tree-grid> 
        
        <!-- 分页 -->
         <div class="page">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import TreeGrid from '@/components/TreeGrid/TreeGrid'
export default {
    data() {
        return {
            addDialogFormVisible: false,
            dataSource: [],
            columns: [{
            text: '分类名称',
            dataIndex: 'cat_name',
            width: ''
            }, {
            text: '是否有效',
            dataIndex: 'cat_deleted',
            width: ''
            }, {
            text: '排序',
            dataIndex: 'cat_level',
            width: ''
            }]
        }
    },
    // 注入组件
    components: {
        TreeGrid
    },
    methods: {
        // TreeGrid相关函数
        deleteCategory (cid) {
            console.log(cid)
        },
        editCategory (cid) {
            console.log(cid)
        },
        // 分页处理函数
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        },
    }   
}
</script>
<style lang="scss" scoped>
    .category {
        .page {
            padding: 5px 0;
            background-color: #D3DCE6;
        }
    }
</style>
