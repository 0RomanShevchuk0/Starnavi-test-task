import {
  createFilmNodes,
  createFilmEdges,
  createStarshipNodes,
  createStarshipEdges,
} from "@/utils/createNodesAndEdges"
import { Film } from "@/types/films"
import { Starship } from "@/types/starship"

const films: Film[] = [
  {
    id: 5,
    title: "Attack of the Clones",
    episode_id: 2,
    opening_crawl:
      "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2002-05-16",
    characters: [
      10, 20, 21, 22, 33, 35, 36, 2, 3, 6, 7, 40, 43, 46, 11, 51, 52, 53, 58, 59, 60, 61, 62, 63,
      64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 82,
    ],
    planets: [1, 8, 9, 10, 11],
    starships: [43, 47, 48, 49, 52, 58, 21, 32, 39],
    vehicles: [44, 45, 46, 50, 51, 53, 54, 55, 56, 57, 4],
    species: [12, 13, 15, 1, 2, 6, 28, 29, 30, 31, 32, 33, 34, 35],
    created: "2014-12-20T10:57:57.886000Z",
    edited: "2014-12-20T20:18:48.516000Z",
    url: "https://sw-api.starnavi.io/films/5/",
  },
  {
    id: 6,
    title: "Revenge of the Sith",
    episode_id: 3,
    opening_crawl:
      "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2005-05-19",
    characters: [
      10, 12, 13, 20, 21, 33, 35, 1, 2, 3, 4, 5, 6, 7, 46, 11, 51, 52, 53, 54, 55, 56, 58, 63, 64,
      67, 68, 75, 78, 79, 80, 81, 82, 83,
    ],
    planets: [1, 2, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19],
    starships: [48, 59, 61, 63, 64, 65, 66, 68, 2, 32, 74, 75],
    vehicles: [50, 53, 56, 60, 62, 67, 69, 70, 71, 72, 73, 33, 76],
    species: [15, 19, 20, 1, 2, 3, 6, 28, 29, 30, 33, 34, 35, 36, 37, 23, 24, 25, 26, 27],
    created: "2014-12-20T18:49:38.403000Z",
    edited: "2014-12-20T20:47:52.073000Z",
    url: "https://sw-api.starnavi.io/films/6/",
  },
]
const starships: Starship[] = [
  {
    id: 48,
    name: "Jedi starfighter",
    model: "Delta-7 Aethersprite-class interceptor",
    manufacturer: "Kuat Systems Engineering",
    cost_in_credits: "180000",
    length: "8",
    max_atmosphering_speed: "1150",
    crew: "1",
    passengers: "0",
    cargo_capacity: "60",
    consumables: "7 days",
    hyperdrive_rating: "1.0",
    MGLT: "unknown",
    starship_class: "Starfighter",
    pilots: [10, 58],
    films: [5, 6],
    created: "2014-12-20T17:35:23.906000Z",
    edited: "2014-12-20T21:23:49.930000Z",
    url: "https://sw-api.starnavi.io/starships/48/",
  },
  {
    id: 59,
    name: "Trade Federation cruiser",
    model: "Providence-class carrier/destroyer",
    manufacturer: "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
    cost_in_credits: "125000000",
    length: "1088",
    max_atmosphering_speed: "1050",
    crew: "600",
    passengers: "48247",
    cargo_capacity: "50000000",
    consumables: "4 years",
    hyperdrive_rating: "1.5",
    MGLT: "unknown",
    starship_class: "capital ship",
    pilots: [10, 11],
    films: [6],
    created: "2014-12-20T19:40:21.902000Z",
    edited: "2014-12-20T21:23:49.941000Z",
    url: "https://sw-api.starnavi.io/starships/59/",
  },
  {
    id: 64,
    name: "Naboo star skiff",
    model: "J-type star skiff",
    manufacturer: "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
    cost_in_credits: "unknown",
    length: "29.2",
    max_atmosphering_speed: "1050",
    crew: "3",
    passengers: "3",
    cargo_capacity: "unknown",
    consumables: "unknown",
    hyperdrive_rating: "0.5",
    MGLT: "unknown",
    starship_class: "yacht",
    pilots: [10, 35],
    films: [6],
    created: "2014-12-20T19:55:15.396000Z",
    edited: "2014-12-20T21:23:49.948000Z",
    url: "https://sw-api.starnavi.io/starships/64/",
  },
  {
    id: 65,
    name: "Jedi Interceptor",
    model: "Eta-2 Actis-class light interceptor",
    manufacturer: "Kuat Systems Engineering",
    cost_in_credits: "320000",
    length: "5.47",
    max_atmosphering_speed: "1500",
    crew: "1",
    passengers: "0",
    cargo_capacity: "60",
    consumables: "2 days",
    hyperdrive_rating: "1.0",
    MGLT: "unknown",
    starship_class: "starfighter",
    pilots: [10, 11],
    films: [6],
    created: "2014-12-20T19:56:57.468000Z",
    edited: "2014-12-20T21:23:49.951000Z",
    url: "https://sw-api.starnavi.io/starships/65/",
  },
  {
    id: 74,
    name: "Belbullab-22 starfighter",
    model: "Belbullab-22 starfighter",
    manufacturer: "Feethan Ottraw Scalable Assemblies",
    cost_in_credits: "168000",
    length: "6.71",
    max_atmosphering_speed: "1100",
    crew: "1",
    passengers: "0",
    cargo_capacity: "140",
    consumables: "7 days",
    hyperdrive_rating: "6",
    MGLT: "unknown",
    starship_class: "starfighter",
    pilots: [10, 79],
    films: [6],
    created: "2014-12-20T20:38:05.031000Z",
    edited: "2014-12-20T21:23:49.959000Z",
    url: "https://sw-api.starnavi.io/starships/74/",
  },
]

describe("createFilmNodes function", () => {
  it("should create nodes for films", () => {
    const nodes = createFilmNodes(films)
    expect(nodes.length).toBe(films.length)

    const checkFilmNode = (index: number) => {
      expect(nodes[index].id).toBe(`filmNode${films[index].id}`)
      expect(nodes[index].data.label).toBe(films[index].title)
    }

    films.forEach((_, index) => checkFilmNode(index))
  })
})

describe("createFilmEdges function", () => {
  it("should create edges for films", () => {
    const edges = createFilmEdges(films)
    expect(edges.length).toBe(films.length)

    const checkFilmEdge = (index: number) => {
      expect(edges[index].id).toBe(`filmEdge${films[index].id}`)
      expect(edges[index].source).toBe("person")
    }

    films.forEach((_, index) => checkFilmEdge(index))
  })
})

describe("createStarshipNodes function", () => {
  it("should create nodes for starships", () => {
    const nodes = createStarshipNodes(starships, films.length)
    expect(nodes.length).toBe(starships.length)

    const checkStarshipNode = (index: number) => {
      expect(nodes[index].id).toBe(`starshipNode${starships[index].id}`)
      expect(nodes[index].data.label).toBe(starships[index].name)
    }

    starships.forEach((_, index) => checkStarshipNode(index))
  })
})

describe("createStarshipEdges function", () => {
  it("should create edges for starships based on films", () => {
    const edges = createStarshipEdges(starships, films)
    expect(edges.length).toBe(6)
  })
})
