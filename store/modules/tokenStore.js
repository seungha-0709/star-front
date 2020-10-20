import Cookies from "js-cookie"

export default {
  state: () => ({
    token: null
  }),

  getters: {
    GE_ISSUE_TOKEN: (state) => state.token
  },

  mutations: {
    MU_ISSUE_TOKEN(state, payload) {
      state.token = payload
      const date = new Date()
      const minutes = 30
      Cookies.set("token", payload.token, {
        path: "/",
        expires: date.getTime() + minutes * 60 * 1000
      })
    }
  },

  actions: {
    AC_ISSUE_TOKEN({ commit }) {
      return this.$axios.get(`/auth/jwt/token`).then((res) => {
        commit("MU_ISSUE_TOKEN", res.data)
      })
    }
  }
}
