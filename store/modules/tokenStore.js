export default {
  state: () => ({
    jwt: null
  }),

  getters: {
    GE_ISSUE_TOKEN: (state) => state.jwt
  },

  mutations: {
    MU_ISSUE_TOKEN(state, payload) {
      state.jwt = payload
    }
  },

  actions: {
    async AC_ISSUE_TOKEN({ commit }) {
      const { data } = await this.$axios.get("/auth/jwt/token")
      commit("MU_ISSUE_TOKEN", data)
    }
  }
}
