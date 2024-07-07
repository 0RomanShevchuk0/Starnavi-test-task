import { PeopleResponseType, Person } from "@/types/people"
import axios from "axios"

export const baseURL = "https://sw-api.starnavi.io/"

export const instance = axios.create({
  baseURL,
})

export async function getPeople(page: number): Promise<PeopleResponseType> {
  try {
    return (await instance.get(`people?page=${page}`)).data
  } catch (error) {
    throw error
  }
}

export async function getPersonById(id: string): Promise<Person> {
  try {
    return (await instance.get(`people/${id}`)).data
  } catch (error) {
    throw error
  }
}
