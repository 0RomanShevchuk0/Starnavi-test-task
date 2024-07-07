"use client"
import { FC } from "react"
import PeopleList from "@/ui/people/PeopleList"
import usePeople from "@/hooks/usePeople"

const PeoplePage: FC = () => {
  const { people, isNext, isLoading, error, loadMore } = usePeople()

  return (
    <div>
      <h2>People Page</h2>
      {error && <div>{error}</div>}
      <PeopleList people={people} />
      {isLoading && <div>Loading...</div>}
      {isNext && !isLoading && <button onClick={loadMore}>Load More</button>}
    </div>
  )
}

export default PeoplePage
