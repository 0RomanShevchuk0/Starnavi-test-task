import React from "react"
import { render } from "@testing-library/react"
import PeopleList from "@/components/people/PeopleList"
import { mockPeople } from "../../mockData"

describe("PeopleList component", () => {
  it("renders a list of PeopleListItem components", () => {
    const { getByText } = render(<PeopleList people={mockPeople} />)

    mockPeople.forEach((person) => {
      expect(getByText(person.name)).toBeInTheDocument()
    })
  })
})
