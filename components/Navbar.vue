<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand d-flex align-items-center">
        <img
          src="/logo.svg"
          class="d-inline-block mr-3 p-1"
          width="60px"
          alt=""
        />
        <span style="font-family: Sarabun-bold; font-size: 30px;"
          >ข้อมูลการเข้าขื่อเสนอกฎหมาย</span
        ></span
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button
              class="btn"
              :class="
                currentPath === 'index' ? 'active btn-light' : 'text-white'
              "
              aria-current="page"
              @click="$router.push('/')"
            >
              รายชื่อร่างที่รอการตรวจสอบ
            </button>
          </li>
        </ul>
        <div class="buttons">
          <button
            v-if="!$auth.loggedIn"
            class="btn btn-success"
            @click="$router.push('/login')"
          >
            ลงชื่อเข้าใช้
          </button>
          <button v-if="$auth.loggedIn" class="btn btn-danger" @click="logout">
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name
    },
  },
  created() {
    console.log(this.currentPath)
    console.log(this.$auth.loggedIn)
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$swal('Logout successful', 'ออกจากระบบสำเร็จ', 'success')
      location.reload()
    },
  },
}
</script>
