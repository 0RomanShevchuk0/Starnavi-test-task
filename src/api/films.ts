import { FilmsResponseType } from "@/types/films"
import { instance } from "@/api/index"
import { configureParamsString } from "@/utils/configureParamsString"

export async function getFilms(params?: object): Promise<FilmsResponseType> {
  try {
    const paramsString = params ? configureParamsString(params) : ""
    return (await instance.get(`films?${paramsString}`)).data
  } catch (error) {
    throw error
  }
}
