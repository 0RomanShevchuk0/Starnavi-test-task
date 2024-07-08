import { instance } from "@/api/index"
import { configureParamsString } from "@/utils/configureParamsString"
import { starshipResponseType } from "@/types/starship"

export async function getStarships(params?: object): Promise<starshipResponseType> {
  try {
    const paramsString = params ? configureParamsString(params) : ""
    return (await instance.get(`starships?${paramsString}`)).data
  } catch (error) {
    throw error
  }
}
