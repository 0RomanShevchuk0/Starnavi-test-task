import { PeopleResponseType, Person } from "@/types/people"
import { instance } from "@/api/index"

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
