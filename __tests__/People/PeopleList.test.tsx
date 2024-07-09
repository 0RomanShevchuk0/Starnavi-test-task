import React from "react"
import { render } from "@testing-library/react"
import PeopleList from "@/components/people/PeopleList"
import { Person } from "@/types/people"

const mockPeople: Person[] = [
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    height: "175",
    mass: "1,358",
    hair_color: "n/a",
    skin_color: "green-tan, brown",
    eye_color: "orange",
    birth_year: "600BBY",
    gender: "hermaphrodite",
    homeworld: 24,
    films: [1, 3, 4],
    species: [5],
    vehicles: [],
    starships: [],
    created: "2014-12-10T17:11:31.638000Z",
    edited: "2014-12-20T21:17:50.338000Z",
    url: "https://sw-api.starnavi.io/people/16/",
  },
  {
    id: 20,
    name: "Yoda",
    height: "66",
    mass: "17",
    hair_color: "white",
    skin_color: "green",
    eye_color: "brown",
    birth_year: "896BBY",
    gender: "male",
    homeworld: 28,
    films: [2, 3, 4, 5, 6],
    species: [6],
    vehicles: [],
    starships: [],
    created: "2014-12-15T12:26:01.042000Z",
    edited: "2014-12-20T21:17:50.345000Z",
    url: "https://sw-api.starnavi.io/people/20/",
  },
]

describe("PeopleList component", () => {
  it("renders a list of PeopleListItem components", () => {
    const { getByText } = render(<PeopleList people={mockPeople} />)

    mockPeople.forEach((person) => {
      expect(getByText(person.name)).toBeInTheDocument()
    })
  })
})
