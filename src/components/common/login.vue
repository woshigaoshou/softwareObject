<template>
  <div>
    <el-form label-width="100px">
      <p>大创账号登录</p>
      <el-form-item label="账号" prop="pass">
        <el-input type="input" v-model="loginForm.userID" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.userPsw" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="pass" id="identParent">
        <el-input type="input" v-model="loginForm.randString" placeholder="请输入验证码"></el-input>
        <img :src="imgsrc" id="ident" @click="createImg" />
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="submit">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from "../../network/request/request";

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userID: "",
        userPsw: "",
        randString: ""
      },
      imgsrc: this.createImg()
    };
  },
  methods: {
    createImg() {
      let timetamp = new Date().getTime();
      request({
        url: "/createImg/" + timetamp,
        method: "get"
      }).then(res => {
        this.imgsrc = "http://47.113.80.250:9001/createImg/" + timetamp;
      });
    },
    submit() {
      if (this.account === "" || this.pwd === "") alert("账号或密码为空！");
      console.log(this.loginForm);
      request({
        url: "/oauth/login",
        data: this.loginForm,
        method: "post"
      }).then(res => {
        console.log(res);
        if (res.code !== 200) {
          // console.log(res.message);
          alert(res.message);
          this.$router.push("/login");
        } else {
          this.userToken = "Bearer " + res.data.accessToken;
          this.$store.commit("changeLogin", { Authorization: this.userToken });
          alert("登录成功！");
          this.$router.push("/index");
        }
      });
    },
    register() {
      location.href = "/register";
    }
  }
};
</script>
<style>
form {
  width: 350px;
  margin-top: 180px;
  margin-left: 520px;
}
.btn {
  margin-left: 40px;
}
form p {
  font-size: 30px;
  margin-left: 130px;
  margin-bottom: 30px;
}
#identParent .el-input {
  width: 125px;
}
#identParent input {
  display: inline-block;
  width: 125px;
}
#ident {
  position: absolute;
  width: 87px;
  height: 40px;
  right: 28px;
}
#ident :hover {
  z-index: 99999;
  cursor: pointer;
}
</style>
