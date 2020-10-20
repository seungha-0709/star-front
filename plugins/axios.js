import Cookies from "js-cookie"

export default ({ $axios, redirect }) => {
  const getTokenByCookies = Cookies.get("token")
  $axios.setHeader("x-access-token", getTokenByCookies)

  $axios.onRequest((config) => {
    console.log("Making request to " + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect("/400")
    }
  })
}
