"use client"
import { FC } from "react"
import { Person } from "@/types/people"
import PeopleListItem from "@/components/people/PeopleListItem"

type PeopleListProps = {
  people: Person[]
}

const PeopleList: FC<PeopleListProps> = ({ people }) => {
  const PeopleComponents = people.map((person) => (
    <PeopleListItem key={person.id} person={person} />
  ))
  return <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{PeopleComponents}</div>
}

export default PeopleList
