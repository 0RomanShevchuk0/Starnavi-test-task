import { render, fireEvent } from "@testing-library/react"
import PeoplePage from "@/app/people/page"
import usePeople from "@/hooks/usePeople"

jest.mock("../src/hooks/usePeople")

const mockUsePeople = usePeople as jest.MockedFunction<typeof usePeople>

describe("PeoplePage", () => {
  beforeEach(() => {
    mockUsePeople.mockReturnValue({
      people: [
        {
          id: 68,
          name: "Bail Prestor Organa",
          height: "191",
          mass: "unknown",
          hair_color: "black",
          skin_color: "tan",
          eye_color: "brown",
          birth_year: "67BBY",
          gender: "male",
          homeworld: 2,
          films: [5, 6],
          species: [1],
          vehicles: [],
          starships: [],
          created: "2014-12-20T16:53:08.575000Z",
          edited: "2014-12-20T21:17:50.463000Z",
          url: "https://sw-api.starnavi.io/people/68/",
        },
      ],
      isNext: true,
      isLoading: false,
      error: null,
      loadMore: jest.fn(),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders people list", () => {
    const { getByText } = render(<PeoplePage />)
    expect(getByText("People Page")).toBeInTheDocument()
    expect(getByText("Bail Prestor Organa")).toBeInTheDocument()
  })

  it("displays loading text when isLoading is true", () => {
    mockUsePeople.mockReturnValueOnce({
      people: [],
      isNext: false,
      isLoading: true,
      error: null,
      loadMore: jest.fn(),
    })
    const { getByText } = render(<PeoplePage />)
    expect(getByText("Loading...")).toBeInTheDocument()
  })

  it("displays error message when there is an error", () => {
    mockUsePeople.mockReturnValueOnce({
      people: [],
      isNext: false,
      isLoading: false,
      error: "Failed to load data",
      loadMore: jest.fn(),
    })
    const { getByText } = render(<PeoplePage />)
    expect(getByText("Failed to load data")).toBeInTheDocument()
  })

  it("does not call loadMore when isLoading is true", () => {
    const mockLoadMore = jest.fn()
    mockUsePeople.mockReturnValueOnce({
      people: [],
      isNext: true,
      isLoading: true,
      error: null,
      loadMore: mockLoadMore,
    })
    render(<PeoplePage />)

    fireEvent.scroll(window, { target: { scrollY: document.documentElement.scrollHeight } })
    expect(mockLoadMore).not.toHaveBeenCalled()
  })

  it("does not call loadMore when isNext is false", () => {
    const mockLoadMore = jest.fn()
    mockUsePeople.mockReturnValueOnce({
      people: [],
      isNext: false,
      isLoading: false,
      error: null,
      loadMore: mockLoadMore,
    })
    render(<PeoplePage />)

    fireEvent.scroll(window, { target: { scrollY: document.documentElement.scrollHeight } })
    expect(mockLoadMore).not.toHaveBeenCalled()
  })
})
