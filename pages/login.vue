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
        <button
          class="btn btn-success"
          :class="
            !otpisGen || otp.length !== 6 || remainingOtpTime === 0
              ? 'disabled'
              : ''
          "
          @click="login"
        >
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
    return {}
  },
  computed: {
    ...mapState({
      otpisGen: ({ authen }) => authen.otpisGen,
      waitingOtpConfirm: ({ authen }) => authen.waitingOtpConfirm,
      remainingOtpTime: ({ authen }) => authen.remainingOtpTime,
    }),

    cardId: {
      get() {
        return this.$store.state.authen.cardId
      },
      set(value) {
        this.$store.commit('authen/HANDLE_CARD_ID', value)
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.authen.phoneNumber
      },
      set(value) {
        this.$store.commit('authen/HANDLE_PHONE_NUMBER', value)
      },
    },
    otp: {
      get() {
        return this.$store.state.authen.otp
      },
      set(value) {
        this.$store.commit('authen/HANDLE_OTP', value)
      },
    },
  },
  methods: {
    ...mapActions({
      otpGen: 'authen/otpGenerate',
      login: 'authen/login',
    }),
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
