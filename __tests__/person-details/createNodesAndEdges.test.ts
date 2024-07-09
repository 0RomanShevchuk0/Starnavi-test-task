import {
  createFilmNodes,
  createFilmEdges,
  createStarshipNodes,
  createStarshipEdges,
} from "@/utils/createNodesAndEdges"
import { mockFilms, mockStarships } from "../../mockData"

describe("createFilmNodes function", () => {
  it("should create nodes for films", () => {
    const nodes = createFilmNodes(mockFilms)
    expect(nodes.length).toBe(mockFilms.length)

    const checkFilmNode = (index: number) => {
      expect(nodes[index].id).toBe(`filmNode${mockFilms[index].id}`)
      expect(nodes[index].data.label).toBe(mockFilms[index].title)
    }

    mockFilms.forEach((_, index) => checkFilmNode(index))
  })
})

describe("createFilmEdges function", () => {
  it("should create edges for films", () => {
    const edges = createFilmEdges(mockFilms)
    expect(edges.length).toBe(mockFilms.length)

    const checkFilmEdge = (index: number) => {
      expect(edges[index].id).toBe(`filmEdge${mockFilms[index].id}`)
      expect(edges[index].source).toBe("person")
    }

    mockFilms.forEach((_, index) => checkFilmEdge(index))
  })
})

describe("createStarshipNodes function", () => {
  it("should create nodes for starships", () => {
    const nodes = createStarshipNodes(mockStarships, mockFilms.length)
    expect(nodes.length).toBe(mockStarships.length)

    const checkStarshipNode = (index: number) => {
      expect(nodes[index].id).toBe(`starshipNode${mockStarships[index].id}`)
      expect(nodes[index].data.label).toBe(mockStarships[index].name)
    }

    mockStarships.forEach((_, index) => checkStarshipNode(index))
  })
})

describe("createStarshipEdges function", () => {
  it("should create edges for starships based on films", () => {
    const edges = createStarshipEdges(mockStarships, mockFilms)
    const expectedEdges = [
      { id: "starshipEdge0", source: "filmNode5", target: "starshipNode48" },
      { id: "starshipEdge1", source: "filmNode6", target: "starshipNode48" },
      { id: "starshipEdge2", source: "filmNode6", target: "starshipNode59" },
      { id: "starshipEdge3", source: "filmNode6", target: "starshipNode64" },
      { id: "starshipEdge4", source: "filmNode6", target: "starshipNode65" },
      { id: "starshipEdge5", source: "filmNode6", target: "starshipNode74" },
    ]

    expect(edges.length).toBe(expectedEdges.length)
    expect(edges).toEqual(expectedEdges)
  })
})
