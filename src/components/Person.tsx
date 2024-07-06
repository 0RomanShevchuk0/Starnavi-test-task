import { IPerson } from "@/types/people"
import { FC } from "react"

type PersonListProps = {
  person: IPerson
}

const Person: FC<PersonListProps> = ({ person }) => {
  return <div>{person.name}</div>
}

export default Person
