import { requestUrl } from "../middleware"

export async function getSeances() {
  let res = await requestUrl("seance/list/", "GET")
  return res
}
