import { requestUrl } from "../middleware"

export async function getAllModelsList() {
  let res = await requestUrl("all_model_list/", "GET")
  return res
}
