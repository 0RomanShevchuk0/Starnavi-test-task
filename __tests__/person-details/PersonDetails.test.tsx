import React from "react"
import { render } from "@testing-library/react"
import PersonDetails from "@/components/person-details/PersonDetails"
import { mockPerson } from "../../mockData"

describe("PersonDetails", () => {
  it("renders correctly with given person props", () => {
    const { getByText } = render(<PersonDetails person={mockPerson} />)

    expect(getByText("Gender:")).toBeInTheDocument()
    expect(getByText("male")).toBeInTheDocument()

    expect(getByText("Birth Year:")).toBeInTheDocument()
    expect(getByText("57BBY")).toBeInTheDocument()

    expect(getByText("Height:")).toBeInTheDocument()
    expect(getByText("182")).toBeInTheDocument()

    expect(getByText("Mass:")).toBeInTheDocument()
    expect(getByText("77")).toBeInTheDocument()

    expect(getByText("Hair Color:")).toBeInTheDocument()
    expect(getByText("auburn, white")).toBeInTheDocument()

    expect(getByText("Skin Color:")).toBeInTheDocument()
    expect(getByText("fair")).toBeInTheDocument()

    expect(getByText("Eye Color:")).toBeInTheDocument()
    expect(getByText("blue-gray")).toBeInTheDocument()

    expect(getByText("Homeworld:")).toBeInTheDocument()
    expect(getByText("20")).toBeInTheDocument()
  })
})
