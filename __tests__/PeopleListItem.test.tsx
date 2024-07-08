import React from "react"
import { render } from "@testing-library/react"
import PeopleListItem from "@/components/people/PeopleListItem"
import { Person } from "@/types/people"

const mockPerson: Person = {
  id: 10,
  name: "Obi-Wan Kenobi",
  height: "182",
  mass: "77",
  hair_color: "auburn, white",
  skin_color: "fair",
  eye_color: "blue-gray",
  birth_year: "57BBY",
  gender: "male",
  homeworld: 20,
  films: [1, 2, 3, 4, 5, 6],
  species: [1],
  vehicles: [38],
  starships: [48, 59, 64, 65, 74],
  created: "2014-12-10T16:16:29.192000Z",
  edited: "2014-12-20T21:17:50.325000Z",
  url: "https://sw-api.starnavi.io/people/10/",
}

describe("PeopleListItem component", () => {
  it("renders person details correctly", () => {
    const { getByText } = render(<PeopleListItem person={mockPerson} />)

    const nameElement = getByText(mockPerson.name)
    const genderElement = getByText(`Gender: ${mockPerson.gender}`)
    const birthYearElement = getByText(`Birth Year: ${mockPerson.birth_year}`)
    expect(nameElement).toBeInTheDocument()
    expect(genderElement).toBeInTheDocument()
    expect(birthYearElement).toBeInTheDocument()
  })

  it("links to the correct person page", () => {
    const { container } = render(<PeopleListItem person={mockPerson} />)

    const linkElement = container.querySelector("a")
    expect(linkElement).toHaveAttribute("href", `/people/${mockPerson.id}`)
  })
})
