<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from "./components/common/login";
import register from "./components/common/register";

export default {
  name: "App",
  components: {
    login,
    register
  }
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
