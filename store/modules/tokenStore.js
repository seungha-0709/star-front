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

      Cookies.set("token", payload.token)
      Cookies.set("csrf", payload.decoded_token.csrf)
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
