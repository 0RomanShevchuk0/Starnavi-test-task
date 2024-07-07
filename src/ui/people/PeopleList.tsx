"use client"
import { FC } from "react"
import { Person } from "@/types/people"
import PeopleListItem from "./PeopleListItem"

type PeopleListProps = {
  people: Person[]
}

const PeopleList: FC<PeopleListProps> = ({ people }) => {
  const PeopleComponents = people.map((person) => (
    <PeopleListItem key={person.id} person={person} />
  ))
  return <div>{PeopleComponents}</div>
}

export default PeopleList
