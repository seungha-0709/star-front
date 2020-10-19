export default ({ $axios, redirect }) => {
  if (process.browser) {
    // 로컬스토리지에 저장된 token을 axios header에 삽입
    $axios.defaults.headers.common["x-access-token"] = localStorage.token
  }

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
