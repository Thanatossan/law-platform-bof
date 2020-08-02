export const state = () => ({})

export const mutations = {}

export const actions = {
  async login({ state }, { username, password }) {
    try {
      await this.$auth.loginWith('local', {
        data: {
          username,
          password,
        },
      })
      this.$router.push('/')
    } catch {
      this.$swal('Error', 'เกิดข้อผิดพลาด', 'error')
    }
  },
}
