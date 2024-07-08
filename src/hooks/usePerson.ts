import { useState, useEffect } from "react"
import { getPersonById } from "@/api/people"
import { Person } from "@/types/people"
import { getFilms } from "@/api/films"
import { Film } from "@/types/films"
import { getStarships } from "@/api/starships"
import { Starship } from "@/types/starship"

const usePerson = (id: string) => {
  const [person, setPerson] = useState<Person | null>(null)
  const [films, setFilms] = useState<Film[]>([])
  const [starships, setStarships] = useState<Starship[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchPersonData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const personResponse = await getPersonById(id)
        setPerson(personResponse)

        const filmsParams = { characters__contains: personResponse.id }
        const starshipParams = { id__in: personResponse.starships.join(",") }

        const filmsResponse = await getFilms(filmsParams)
        setFilms(filmsResponse.results)

        const starshipResponse = await getStarships(starshipParams)
        setStarships(starshipResponse.results)
      } catch (err) {
        setError("Error fetching person data.")
        console.error("Error fetching person data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPersonData()
  }, [id])

  return { person, films, starships, isLoading, error }
}

export default usePerson
