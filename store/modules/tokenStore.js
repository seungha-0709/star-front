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
      // 요청받은 token값을 localStorage에 "token" 으로 저장
      if (process.browser) {
        localStorage.setItem("token", payload.token)
      }
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
