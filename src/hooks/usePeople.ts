import { useState, useEffect } from "react"
import { getPeople } from "@/api/starWars"
import { Person } from "@/types/people"

const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isNext, setIsNext] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPeople = async (page: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await getPeople(page)
      setPeople((prev) => [...prev, ...response.results])
      setCurrentPage((prev) => prev + 1)
      setIsNext(!!response.next)
    } catch (err) {
      setError("Error fetching people data.")
      console.error("Error fetching people data:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPeople(currentPage)
  }, [])

  const loadMore = () => {
    fetchPeople(currentPage)
  }

  return { people, isNext, isLoading, error, loadMore }
}

export default usePeople
