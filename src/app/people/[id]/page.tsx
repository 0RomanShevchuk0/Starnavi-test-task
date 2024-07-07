"use client"
import usePerson from "@/hooks/usePerson"
import { FC } from "react"

const PersonPage: FC = () => {
  const { person, isLoading, error } = usePerson("10")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!person) return <div>No person found</div>

  return (
    <div>
      <h2>{person.name}</h2>
      <div>Gender: {person.gender}</div>
      <div>Birth Year: {person.birth_year}</div>
      <div>Height: {person.height}</div>
      <div>Mass: {person.mass}</div>
      <div>Hair Color: {person.hair_color}</div>
      <div>Skin Color: {person.skin_color}</div>
      <div>Eye Color: {person.eye_color}</div>
    </div>
  )
}

export default PersonPage
