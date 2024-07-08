"use client"
import { FC, useCallback, useEffect } from "react"
import PeopleList from "@/components/people/PeopleList"
import usePeople from "@/hooks/usePeople"
import { debounceCallBack } from "@/utils/debounceCallBack"

const PeoplePage: FC = () => {
  const { people, isNext, isLoading, error, loadMore } = usePeople()

  const handleScroll = useCallback(
    debounceCallBack(() => {
      if (isLoading || !isNext) return
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      if (isBottom) {
        loadMore()
      }
    }, 200),
    [isLoading, isNext, loadMore]
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-6xl font-bold">People Page</h2>
      {error && <div>{error}</div>}
      <PeopleList people={people} />
      {isLoading && <div>Loading...</div>}
    </div>
  )
}

export default PeoplePage
