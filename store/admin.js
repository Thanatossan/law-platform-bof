export const state = () => ({
  myLaws: [],
})

export const mutations = {
  SET_MY_LAW(state, payload) {
    state.myLaws = payload
  },
}

export const actions = {
  async getMyLaws({ commit }) {
    const res = await this.$axios.$get('/admin/laws')
    commit('SET_MY_LAW', res.data.laws)
    console.log(res.data.laws)
  },
  async allowLaw(context, lawId) {
    try {
      await this.$axios.$post(`/admin/allow/${lawId}`, { allow: true })
      this.$swal('success', 'ท่านได้ยินยอมร่างนี้แล้ว', 'success')
      this.$router.push('/')
    } catch (error) {
      this.$swal('error', 'มีข้อผิดพลาด', 'error')
    }
  },
  async cancel(context, lawId) {
    try {
      await this.$axios.$post(`/admin/allow/${lawId}`, { allow: false })
      this.$swal('success', 'ท่านได้ปฏิเสธร่างนี้แล้ว', 'success')
      this.$router.push('/')
    } catch (error) {
      this.$swal('error', 'มีข้อผิดพลาด', 'error')
    }
  },
  async submitLaw(context, lawId) {
    try {
      await this.$axios.$post(`/admin/submit/${lawId}`)
      this.$swal('success', 'ร่างกฎหมายนี้มีผลแล้ว', 'success')
      this.$router.push('/')
    } catch {
      this.$swal('error', 'มีข้อผิดพลาด', 'error')
    }
  },
}
