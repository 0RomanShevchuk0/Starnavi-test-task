import { Film } from "@/types/films"
import { Starship } from "@/types/starship"

interface Node {
  id: string
  position: { x: number; y: number }
  data: { label: string }
}

interface Edge {
  id: string
  source: string
  target: string
}
export const nodeXSpacing = 200

const calculateXPosition = (index: number, spacing: number, factor = 1, offset = 0) =>
  index * spacing * factor + offset

export const createFilmNodes = (films: Film[]): Node[] => {
  return films.map((film, index) => ({
    id: `filmNode${film.id}`,
    position: { x: calculateXPosition(index, nodeXSpacing), y: 200 },
    data: { label: film.title },
  }))
}

export const createFilmEdges = (films: Film[]): Edge[] => {
  return films.map((film) => ({
    id: `filmEdge${film.id}`,
    source: "person",
    target: `filmNode${film.id}`,
  }))
}

export const createStarshipNodes = (starships: Starship[], filmsLength: number): Node[] => {
  return starships.map((starship, index) => {
    const positionFactor = filmsLength / starships.length
    return {
      id: `starshipNode${starship.id}`,
      position: { x: calculateXPosition(index, nodeXSpacing, positionFactor, 20), y: 400 },
      data: { label: starship.name },
    }
  })
}

export const createStarshipEdges = (starships: Starship[], films: Film[]): Edge[] => {
  const starshipIdSet = new Set(starships.map((starship) => starship.id))
  const starshipsInFilms = films.flatMap((film) =>
    film.starships
      .filter((starshipId) => starshipIdSet.has(starshipId))
      .map((starshipId) => ({ film: film.id, starship: starshipId }))
  )

  return starshipsInFilms.map(({ film, starship }, index) => ({
    id: `starshipEdge${index}`,
    source: `filmNode${film}`,
    target: `starshipNode${starship}`,
  }))
}
