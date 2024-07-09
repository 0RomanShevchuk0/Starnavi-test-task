import React, { FC } from "react"
import PropertyBox from "@/components/PersonDetails/PropertyBox"
import { Person } from "@/types/people"

type PersonDetailsProps = {
  person: Person
}

const PersonDetails: FC<PersonDetailsProps> = ({ person }) => {
  return (
    <div className="rounded-lg shadow-md p-6 w-full flex flex-wrap justify-between gap-4">
      <PropertyBox property="Gender" value={person.gender} />
      <PropertyBox property="Birth Year" value={person.birth_year} />
      <PropertyBox property="Height" value={person.height} />
      <PropertyBox property="Mass" value={person.mass} />
      <PropertyBox property="Hair Color" value={person.hair_color} />
      <PropertyBox property="Skin Color" value={person.skin_color} />
      <PropertyBox property="Eye Color" value={person.eye_color} />
      <PropertyBox property="Homeworld" value={person.homeworld} />
    </div>
  )
}

export default PersonDetails
