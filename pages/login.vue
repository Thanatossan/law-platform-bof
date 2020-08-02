<template>
  <div class="container-lg">
    <div class="text-center">
      <img src="/logo.svg" class="center" />
      <h1 class="display-4">เข้าสู่ระบบ</h1>
    </div>

    <div class="m-5">
      <div class="form-group formmargin mx-auto w-50">
        <label>Username</label>
        <input v-model="username" type="text" class="form-control" />
      </div>
      <div class="form-group mx-auto formmargin w-50">
        <div>
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" />
        </div>
      </div>

      <div class="mt-3 d-flex justify-content-end" style="margin-right: 300px;">
        <button class="btn btn-success" @click="login">
          ลงชื่อเข้าใช้งาน
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  layout: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push('/lawlist')
    }
  },
  methods: {
    ...mapActions({
      auth: 'authen/login',
    }),
    async login() {
      await this.auth({ username: this.username, password: this.password })
    },
  },
}
</script>

<style scoped>
img.center {
  display: block;
  margin: 0 auto;
  width: 200px;
}

small {
  font-size: 18px;
  color: red !important;
}
.formmargin {
  margin-bottom: 30px;
  margin-top: 20px;
}
label {
  font-size: 24px;
  font-weight: bold;
}
</style>
