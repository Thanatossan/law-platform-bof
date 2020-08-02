export default function ({ redirect }) {
  // console.log(store)
  if (this.$auth.loggedIn) {
    redirect('/lawlist')
  }
}
