import createPersistedState from "vuex-persistedstate"
import * as Cookies from "js-cookie"

export default ({ store }) => {
  createPersistedState({
    paths: ["tokenStore"],
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => {
        const minutes = 30
        Cookies.set(key, value, {
          expires: new Date(Date.now() + minutes * 60 * 1000),
          secure: false
        })
      },
      removeItem: (key) => Cookies.remove(key)
    }
  })(store)
}
