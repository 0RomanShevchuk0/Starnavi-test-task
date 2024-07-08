export const configureParamsString = (params: object) => {
  return params
    ? Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&")
    : ""
}
