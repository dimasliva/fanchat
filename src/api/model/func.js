import { requestUrl } from "../middleware"

export async function getAllModelsList() {
  let res = await requestUrl("all_model_list/", "GET")
  return res
}
export async function getModelSeance(id) {
  let res = await requestUrl(`model_seance/get/${id}`, "GET")
  return res
}
