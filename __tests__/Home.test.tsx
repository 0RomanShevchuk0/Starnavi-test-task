import { act, render } from "@testing-library/react"
import Home from "@/app/page"

describe("Home", () => {
  it("should have Home page text", () => {
    const { getByText } = render(<Home />)

    const myElem = getByText("Home page")
    expect(myElem).toBeInTheDocument()
  })

  it("should have link to people", () => {
    const { getByText } = render(<Home />)

    const linkElement = getByText("To People")
    expect(linkElement).toBeInTheDocument()
  })
})
