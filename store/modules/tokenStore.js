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

      const minutes = 30
      Cookies.set("token", payload.token, {
        path: "/",
        expires: new Date(Date.now() + minutes * 60 * 1000)
      })
    }
  },
  actions: {
    AC_ISSUE_TOKEN({ commit }) {
      return this.$axios.get(`/auth/jwt/token`).then((res) => {
        commit("MU_ISSUE_TOKEN", res.data)
      })
    },
    AC_REFRESH_TOKEN({ commit }) {
      return this.$axios.get(`/auth/jwt/refresh-token`).then((res) => {
        console.log(res)
      })
    }
  }
}
