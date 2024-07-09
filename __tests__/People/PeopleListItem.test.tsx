import React from "react"
import { render } from "@testing-library/react"
import PeopleListItem from "@/components/people/PeopleListItem"
import { mockPerson } from "../../mockData"

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
