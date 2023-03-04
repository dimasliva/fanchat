import { refreshToken } from "./user/func"
import { getCookie } from "./cookie/func"

export async function requestUrl(url, method, body, repeatRequest) {
  let resp = await fetch('/api_fc/' + url, {
    method: method,
    headers: {
      'Authorization':"Bearer " + getCookie("access"), 
      "Content-Type": "application/json",
    },
    body
  })
  console.log('middleware', resp)
  if(resp.status === 401) {
    await refreshToken()
    if(!repeatRequest) {
      requestUrl(url, method, body, true)
    }
  }
  let res = await resp.json()
  return res
}