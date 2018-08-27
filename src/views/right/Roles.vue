<template>
    <div class="role">
        <el-row>
            <el-col :span="24">
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>角色列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <el-button type="primary" plain>添加角色</el-button>

        <el-table :data="roleList" style="width: 100%" border class="mt-20">
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <el-row v-for="firstChildren in scope.row.children" :key="firstChildren.id">
                        <el-col :span="3">
                            <el-tag closable @close="deleteRight(scope.row,firstChildren.id)">>
                                {{firstChildren.authName}}
                            </el-tag>
                            <i class="el-icon-arrow-right" v-if="firstChildren.children.length !== 0 "></i>
                        </el-col>
                        <el-col :span="21">
                            <el-row v-for="secondChildren in firstChildren.children" :key="secondChildren.id">
                                <el-col :span="4">
                                    <el-tag closable type='success' @close="deleteRight(scope.row,secondChildren.id)">
                                        {{secondChildren.authName}}
                                    </el-tag> 
                                    <i class="el-icon-arrow-right" v-if="secondChildren.children.length !== 0 "></i>  
                                </el-col>
                                <el-col :span="20">
                                    <el-tag closable type='warning' 
                                    @close="deleteRight(scope.row,thirdChildren.id)" 
                                    v-for="thirdChildren in secondChildren.children"
                                    :key="thirdChildren.id">
                                        {{thirdChildren.authName}}
                                    </el-tag>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row v-if="scope.row.children.length === 0">
                        <el-col :span="24">该角色没有分配权限</el-col>
                    </el-row>
                </template>
            </el-table-column>
            <el-table-column label="角色名称" prop="roleName" width="163px"></el-table-column>
            <el-table-column label="描述" prop="roleDesc" width="163px"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-button size="mini" type="primary" plain icon="el-icon-edit"></el-button>
                <el-button size="mini" type="danger" plain icon="el-icon-delete"></el-button>
                <el-button size="mini" type="warning" plain icon="el-icon-check"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getRoleList,deleteRoleRight} from '@/api'
export default {
    data() {
        return {
            loading: false,
            roleList: []
        }
    },
    created() {
        loading: true
        getRoleList().then(res => {
            console.log(res)
            if(res.meta.status === 200) {
                this.roleList = res.data
            }
            loading: false
        })
    },
    methods: {
        deleteRight(row,rightId) {
            deleteRoleRight({roleId: row.id,rightId: rightId}).then(res => {
                if(res.meta.status === 200) {
                    console.log(res)
                    row.children = res.data
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: "error"
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .role {
        .el-tag {
            margin-right: 5px;
            margin-bottom: 5px
        }
    }    
</style>
