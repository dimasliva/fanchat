import { requestUrl } from "../middleware"

export async function getBuyerSeances() {
  let res = await requestUrl("buyer_seance/list/", "GET")
  return res
}
