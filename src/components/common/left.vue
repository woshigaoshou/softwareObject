<template>
<el-row class="container" style="height: 100%">
  <el-col :span="24" class="main">
      <el-row class="left">
        <el-menu class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
          <template>
            <el-menu-item >项目1</el-menu-item>
            <el-menu-item >项目2</el-menu-item>
            <el-menu-item >项目3</el-menu-item>
          </template>
        </el-menu>
        <section class="contentCon">
          <el-col :span="21" :offset="3" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </section>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>
.container {
  padding-top: 80px;
  height: 100%;
}
.el-menu {
    height: 100%;
    width: 160px;
    background-color: #c6c6c6;
    position: fixed;
    float: left;
}
.left {
  text-align:center;
}
.container ul li.el-menu-item {
    font-size: 100%;
  }

  .container .mar-l {
    padding: 0;
    height: 100%;
  }

</style>