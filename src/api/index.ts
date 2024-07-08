import axios from "axios"

export const baseURL = "https://sw-api.starnavi.io/"

export const instance = axios.create({
  baseURL,
})
