<template>
  <div class="user">
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
        <el-input placeholder="请输入内容" class="search-input" v-model="query" @keydown.native.enter="initList">
          <el-button slot="append" icon="el-icon-search" @click="initList"></el-button>
        </el-input>
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row> 
    <el-table
      :data="userList"
      border
      style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-switch v-model="value3"></el-switch>
        </template>
      </el-table-column>        
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain icon="el-icon-edit"></el-button>
          <el-button size="mini" type="danger" plain icon="el-icon-delete"></el-button>
          <el-button size="mini" type="warning" plain icon="el-icon-check"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {getUserList} from '@/api'
export default {
   data() {
      return {
        value3: '',
        userList: [],
        query: '',
        total: 0,
        pageSize: 1,
        pagenum: 1
      }
    },
    // 在这些数据挂载到页面之前调用的
    created() {
      this.initList()
    },
     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
        this.pageSize = val
        this.initList()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        this.pagenum = val
        this.initList()
      },
      // 初始化表格数据
      initList() {
        getUserList({params:{query: this.query, pagenum: this.pagenum, pagesize: this.pageSize}}).then(res => {
          console.log(res)
          this.userList = res.data.users
          this.total = res.data.total
        })
      },
      // 
    }
}
</script>
<style lang="scss" scoped>
.user {
  .search-input {
    width: 300px;
  }
  .page {
    padding: 5px 0;
    background-color: #D3DCE6;
  }
}
</style>

