import { FC } from "react"
import { IPerson } from "@/types/people"
import Person from "./Person"

type PeopleListProps = {
  people: IPerson[]
}

const PeopleList: FC<PeopleListProps> = ({ people }) => {
  const PeopleComponents = people.map((person) => <Person person={person} />)
  return <div>{PeopleComponents}</div>
}

export default PeopleList
