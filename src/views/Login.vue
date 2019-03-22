<template>
  <div class="login">
    <div class="signup"
         v-if="status==='signup'">
      <h2>注册</h2>
      <van-cell-group>

        <van-field v-model="signup.phone"
                   label="手机号"
                   placeholder="请输入手机号" />
        <van-field v-model="signup.name"
                   label="用户名"
                   placeholder="请输入用户名" />
        <!-- <van-field v-model="signup.vali"
                   label="验证码"
                   placeholder="请输入验证码">
          <van-button slot="button"
                      size="small"
                      type="primary"
                      @click="sendValiCode">发送验证码</van-button>
        </van-field> -->
        <van-field v-model="signup.password"
                   type="password"
                   clearable
                   label="密码"
                   placeholder="请输入密码" />
      </van-cell-group>
      <div class="login-submit">
        <van-button size="large"
                    @click="onSignup"
                    type="info">注 册</van-button>
      </div>
      <div class="login-a">
        <a @click="status=''">用户登录</a>
        <a>找回密码</a>
      </div>
    </div>
    <div class="signin"
         v-else>
      <h2>登陆</h2>
      <van-cell-group>
        <van-field v-model="signin.phone"
                   label="手机号"
                   placeholder="请输入手机号" />

        <van-field v-model="signin.password"
                   type="password"
                   clearable
                   label="密码"
                   placeholder="请输入密码" />
      </van-cell-group>
      <div class="login-submit">
        <van-button size="large"
                    type="info"
                    @click="onSignin">登 录</van-button>
      </div>
      <div class="login-a">
        <a @click="status='signup'">用户注册</a>
        <a>找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import { signup, getValiCode, signin } from "@/actions/users";

export default {
  name: "Login",
  data () {
    return {
      signin: {},
      signup: {},
      status: "" //signup
    };
  },
  methods: {
    //注册
    onSignup () {
      this.requestBefore();
      signup(this.signup)
        .then(res => {
          console.log(res);
          if (!res.code) {
            this.requestAfter();
          } else {
            this.requestAfter({
              type: 'fail',
              message: res.msg
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.requestAfter({
            type: 'fail',
            message: "网络错误"
          });
        });
    },
    //登录
    onSignin () {
      this.requestBefore();
      signin(this.signin)
        .then(res => {
          if (!res.code) {
            this.requestAfter();
          } else {
            this.requestAfter({
              type: 'fail',
              message: res.msg
            });
          }
        })
        .catch(err => {
          this.requestAfter({
            type: 'fail',
            message: "网络错误"
          });
        });
    },
    // sendValiCode () {
    //   if (!this.signup.phone) {
    //     this.$toast('请输入手机号');
    //     return;
    //   }
    //   getValiCode(this.signup.phone)
    //     .then(res => {

    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: url(~assets/images/login_bg.jpg) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #f5f5f5;
  .signin,
  .signup {
    padding-top: 120px;
    width: 80%;
    margin: 0 auto;
    .login-submit {
      margin: 20px 0;
    }
    .login-a {
      a {
        font-size: 12px;
        margin: 0 10px;
      }
    }
  }
}
</style>

<style lang="scss">
.login {
  // .van-cell-group {
  //   background: transparent;
  //   .van-cell {
  //     background: transparent;
  //     color: #f5f5f5;
  //     .van-field__control {
  //       color: #f5f5f5;
  //     }
  //   }
  // }
}
</style>
