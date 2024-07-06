import { IPerson, PeopleResponseType } from "@/types/people"
import axios from "axios"

export const baseURL = "https://sw-api.starnavi.io/"

export const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export async function getPeople(): Promise<PeopleResponseType> {
  try {
    return (await instance.get("people")).data
  } catch (error) {
    throw error
  }
}
