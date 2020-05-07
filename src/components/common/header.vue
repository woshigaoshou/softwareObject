<template>
    <div>
        <header>
            <div class="header-title" onclick="window.location.href = 'index.html'">
                <strong>大创中期检查系统</strong>
            </div>
            <div class="header-search">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="formInline.content" placeholder="查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="header-profile">
                <el-dropdown>
                    <span class="el-dropdown-link">
                  我的<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown" class="dropdown-menu">
                        <el-dropdown-item disabled>当前登录用户: {{ $store.state.loginForm.userID }}（学生）</el-dropdown-item>
                        <el-dropdown-item>个人主页</el-dropdown-item>
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item><el-button @click="logout">退出账号</el-button></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </header>

    </div>
</template>

<script>
import { CHANGE_LOGOUT } from "../../store/mutation-types";
export default {
data() {
            return {
                formInline: {
                    content: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
             logout() {
                // console.log(this.$store.state.loginForm.userID);
                this.$store.commit(CHANGE_LOGOUT);
                this.$router.push("/login");
            }
        },
        created() {
          console.log(this.$store.state.loginForm);
        }
}
</script>

<style>
 header {
        background-color: #292A2A;
        height: 80px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        padding: 0 20px;
        z-index: 999;
        box-sizing: border-box;
    }
    .demo-form-inline {
      width: 100%;
      margin: 0;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #ccc;
        font-size: 16px;
    }
    .el-icon-arrow-down {
        font-size: 16px;
    }
    
    .dropdown-menu {
        text-align: center;
    }
    .el-dropdown-menu .el-button {
      border: 0;
    }
    .header-profile {
        width: 100px;
        height: 50px;
        float: right;
        margin-top: 32px;
        margin-right: 6px;
    }
    
    .header-search {
        display: inline-block;
        margin-left: 330px;
        margin-top: 20px;
        z-index:999;
    }
    
    .header-title {
        position: absolute;
        font-size: 24px;
        line-height: 70px;
    }
</style>