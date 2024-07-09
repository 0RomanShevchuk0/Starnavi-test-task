import { Person } from "@/types/people"
import Link from "next/link"
import { FC } from "react"

type PersonListProps = {
  person: Person
}

const PeopleListItem: FC<PersonListProps> = ({ person }) => {
  const personLink = `/people/${person.id}`

  return (
    <Link href={personLink}>
      <div className="bg-white shadow-lg rounded-lg p-5 mb-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{person.name}</h2>
        <div className="text-gray-600">
          <div className="mb-1">
            <span className="font-medium">Gender: {person.gender}</span>
          </div>
          <div className="mb-1">
            <span className="font-medium">Birth Year: {person.birth_year}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PeopleListItem
