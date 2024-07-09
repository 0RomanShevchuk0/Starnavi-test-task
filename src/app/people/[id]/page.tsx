"use client"
import Message from "@/components/Message"
import PersonDetails from "@/components/PersonDetails/PersonDetails"
import PersonDetailsGraph from "@/components/PersonDetails/PersonDetailsGraph"
import usePersonData from "@/hooks/usePersonData"
import { useParams } from "next/navigation"
import { FC } from "react"
import "reactflow/dist/style.css"

const PersonPage: FC = () => {
  const { id } = useParams()

  if (!id || typeof id !== "string") {
    return <Message message="Invalid person ID" />
  }

  const { person, films, starships, isLoading, error } = usePersonData(id)
  console.log("starships:", starships)
  console.log("films:", films)

  if (isLoading) return <Message message="Loading..." />
  if (error) return <Message message={error} isError={true} />
  if (!person) return <Message message="No person found" />

  return (
    <div className="flex flex-col gap-3 items-center rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-bold mb-4">{person.name}</h2>
      <PersonDetails person={person} />
      <PersonDetailsGraph person={person} films={films} starships={starships} />
    </div>
  )
}

export default PersonPage
