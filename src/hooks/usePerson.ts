import { useState, useEffect } from "react"
import { getPersonById } from "@/api/starWars"
import { Person } from "@/types/people"

const usePerson = (id: string) => {
  const [person, setPerson] = useState<Person | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchPerson = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await getPersonById(id)
        console.log("response", response)
        setPerson(response)
      } catch (err) {
        setError("Error fetching person data.")
        console.error("Error fetching person data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPerson()
  }, [id])

  return { person, isLoading, error }
}

export default usePerson
