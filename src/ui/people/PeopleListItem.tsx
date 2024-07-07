"use client"
import { Person } from "@/types/people"
import { FC } from "react"

type PersonListProps = {
  person: Person
}

const PeopleListItem: FC<PersonListProps> = ({ person }) => {
  return <div>{person.name}</div>
}

export default PeopleListItem
