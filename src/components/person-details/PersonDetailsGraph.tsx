import { Film } from "@/types/films"
import { Person } from "@/types/people"
import { Starship } from "@/types/starship"
import {
  createFilmEdges,
  createFilmNodes,
  createStarshipEdges,
  createStarshipNodes,
  nodeXSpacing,
} from "@/utils/createNodesAndEdges"
import { FC } from "react"
import ReactFlow, { Background, BackgroundVariant, Controls, ReactFlowProvider } from "reactflow"
import "reactflow/dist/style.css"

type PersonDetailsGraphProps = {
  person: Person
  films: Film[]
  starships: Starship[]
}

const PersonDetailsGraph: FC<PersonDetailsGraphProps> = ({ person, films, starships }) => {
  const filmsNodes = createFilmNodes(films)
  const filmsEdges = createFilmEdges(films)

  const starshipsNodes = createStarshipNodes(starships, films.length)
  const starshipsEdges = createStarshipEdges(starships, films)

  const nodes = [
    {
      id: "person",
      position: { x: (films.length * nodeXSpacing) / 2 - nodeXSpacing / 2, y: 50 },
      data: { label: person.name },
    },
    ...filmsNodes,
    ...starshipsNodes,
  ]
  const edges = [...filmsEdges, ...starshipsEdges]

  return (
    <div className="w-full h-[60vh] container mx-auto">
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}

export default PersonDetailsGraph
