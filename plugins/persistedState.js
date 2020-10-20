import createPersistedState from "vuex-persistedstate"
import * as Cookies from "js-cookie"

export default ({ store }) => {
  createPersistedState({
    key: "vuex",
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => {
        const date = new Date()
        const minutes = 30
        Cookies.set(key, value, {
          expires: date.getTime() + minutes * 60 * 1000,
          secure: false
        })
      },
      removeItem: (key) => Cookies.remove(key)
    }
  })(store)
}
