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
  if(resp.status === 401) {
    await refreshToken()
    if(!repeatRequest) {
      requestUrl(url, method, body, true)
    } else {
      location.href = '/';
    }
  }
  let res = await resp.json()
  return res
}