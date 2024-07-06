import { FC } from "react"
import { getPeople } from "@/api/starWars"
import PeopleList from "@/components/PeopleList"

const HomePage: FC = async () => {
  const people = (await getPeople()).results
  console.log("people", people)

  return (
    <div>
      <PeopleList people={people} />
    </div>
  )
}

export default HomePage
