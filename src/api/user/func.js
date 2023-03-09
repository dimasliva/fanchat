import { requestUrl } from "../middleware";
import { getCookie, setCookie } from "../cookie/func";

export async function getUsers() {
  let res = await requestUrl("user/list/", "GET")
  return res
}
export async function getUser(id) {
  let res = await requestUrl(`user/get/${id}`, "GET")
  return res
}
export async function editUser(id, data) {
  let res = await requestUrl(`user/${id}/`, "PUT", JSON.stringify({
    data
  }))
  return res
}
// auth
export async function signUp(username, email, password) {
  let res = await requestUrl("user/create/", "POST", JSON.stringify({
    "username": username,
    "email": email,
    "password": password,
  }))
  signIn(email, password)
  return res
}

export async function signIn(email, password) {
  let resp = await fetch("/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  })
  let res = await resp.json()
  setCookie("refresh", res.refresh)
  setCookie("access", res.access)
  console.log('signIn', res)
  return res
}

export async function refreshToken() {
  let resp = await fetch("/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "refresh": getCookie("refresh"),
    })
  })
  let res = await resp.json()
  setCookie("access", res.access)
  return res
}