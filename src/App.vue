<template>
  <div id="app">
    <router-view @signin-success="resetToken" />
  </div>
</template>
<script>
export default {
  created () {
    let token = localStorage.getItem('token');
    if (token) {
      this.valiToken()
    } else {
      this.$router.replace('/login')
    }
  },
  methods: {
    // 验证token 失败就去登陆
    valiToken () {
      this.refreshToken().then(res => {
        if (!res.code) {
          //token 有效 免登陆
          this.$router.replace('/')
          this.resetToken();
        } else {
          this.$router.replace('/login')
        }
      }).catch(err => {
        this.$router.replace('/login')
      });
    },
    resetToken () {
      let timer = setInterval(() => {
        this.refreshToken().then(res => {
          if (res.code) {
            clearInterval(timer)
            this.$dialog.alert({
              message: '登陆已过期，请重新登陆'
            }).then(() => {
              this.$router.push('/login')
            });
          }
        }).catch(err => {
          console.log(err);
        });
      }, 60 * 60 * 1000)
    },
    refreshToken () {
      return this.$http.get('/users/refreshRoken')
    },
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
