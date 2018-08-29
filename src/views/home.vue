<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="auto">
        <div class="logo"></div>
        <el-menu
<<<<<<< HEAD
      :unique-opened="true"
      :collapse="isCollapse"
      :router="true"
=======
      :router='true'
      :collapse="isCollapse"
>>>>>>> master
      class="el-menu-admin"
      @open="handleOpen"
      @close="handleClose" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
<<<<<<< HEAD
      <!-- 用户管理 -->
      <el-submenu :index="item.path" v-for="item in menusData" :key="item.id">
        <template slot="title" >
=======
      <el-submenu index='1'>
        <template slot="title">
>>>>>>> master
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
<<<<<<< HEAD
          <el-menu-item :index="tag.path" v-for="tag in item.children" :key="tag.id">
=======
          <el-menu-item index='/user'>
>>>>>>> master
            <i class="el-icon-menu"></i>
            <span slot="title">{{tag.authName}}</span>
          </el-menu-item>
      </el-submenu>

    </el-menu>
      </el-aside>
      <el-container>

        <!-- header部分 -->
        <el-header>
          <i class="el-icon-tickets toggle-btn" @click="toggleCollapse"></i>
          <div class="system-title">电商后台管理系统</div>
          <div class="welcome">
            <span>您好,{{$store.getters.username}}</span>
            <el-button type="text" @click="loginOut">退出</el-button>
          </div>
        </el-header>
        <!-- 中间内容部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {getUserList,getMenus} from '@/api'
export default {
  data() {
    return {
      isCollapse: false,
      menusData: []
    }
  },
  created() {
    getMenus().then(res => {
      if(res.meta.status === 200) {
        console.log(res)
        this.menusData = res.data
      }
    })
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleCollapse() {
        this.isCollapse = !this.isCollapse
      },
      loginOut() {
        // 清除登录状态,即清除保存在localStorage中的token
        localStorage.removeItem('mytoken')
        // 跳转到登录页面
        this.$router.push({name: 'Login'})
      }
    },
  mounted() {
    let params = {params: {query: '', pagenum: '1', pagesize: '1'}}
    getUserList(params).then(res => {
      // console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  .home {
  height: 100%;
  background-color: #E5E5E5;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    width: 100%;
    height:60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #989898;
  }
  .toggle-btn {
    padding: 0 10px;
    margin-left: -20px;
    font-size: 36px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #00635a;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome, {
    color: white;
  }
}
</style>


