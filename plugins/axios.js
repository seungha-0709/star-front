import Cookies from "js-cookie"

export default ({ $axios, redirect, req }) => {
  const isServer = process.server ? 'server' : 'client'
  const getTokenByCookies = Cookies.get("token")
  const getCsrfTokenByCookies = Cookies.get("csrf")
  const ip = process.server ? req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null) : null

  // default header setting
  $axios.setHeader("health", isServer)
  $axios.setHeader("x-access-token", getTokenByCookies)
  $axios.setHeader("csrf-token", getCsrfTokenByCookies)
  $axios.setHeader("x-forwarded-for", ip)
  $axios.setHeader("Pragma", 'no-cache')
  
  $axios.onRequest((config) => {
    try {
      // axios call 했을때 해당 메서드가 아닐때 error 처리
      if (!["get", "post", "put", "patch", "delete"].includes(config.method))
        throw new Error("invalid method")
      // 개발 환경일때만 콘솔 찍히게 수정
      if (process.env.NODE_ENV === "development") {
        console.log("Making request to " + config.url)
      }
    } catch (err) {
      console.error(err)
      return null
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect("/400")
    }
  })
}
