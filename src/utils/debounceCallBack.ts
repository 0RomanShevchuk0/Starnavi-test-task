export const debounceCallBack = (callBack: () => void, wait: number) => {
  let timeout: NodeJS.Timeout
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callBack(), wait)
  }
}
