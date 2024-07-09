"use client"
import usePersonData from "@/hooks/usePersonData"
import {
  createFilmEdges,
  createFilmNodes,
  createStarshipEdges,
  createStarshipNodes,
  nodeXSpacing,
} from "@/utils/createNodesAndEdges"
import { useParams } from "next/navigation"
import { FC } from "react"
import ReactFlow, { Background, BackgroundVariant, Controls, ReactFlowProvider } from "reactflow"
import "reactflow/dist/style.css"

const PersonPage: FC = () => {
  const { id } = useParams()

  if (!id || typeof id !== "string") {
    return <div className="text-red-500 text-center mt-10">Invalid person ID</div>
  }

  const { person, films, starships, isLoading, error } = usePersonData(id)

  if (isLoading) return <div className="text-center mt-10">Loading...</div>
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>
  if (!person) return <div className="text-center mt-10">No person found</div>

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
    <div className="flex flex-col gap-3 items-center rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-bold mb-4">{person.name}</h2>
      <div className="container mx-auto">
        <div className="w-full h-[60vh]">
          <ReactFlowProvider>
            <ReactFlow nodes={nodes} edges={edges} fitView>
              <Controls />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
      {/* <div className="rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Gender:</span> {person.gender}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Birth Year:</span> {person.birth_year}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Height:</span> {person.height}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Mass:</span> {person.mass}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Hair Color:</span> {person.hair_color}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Skin Color:</span> {person.skin_color}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Eye Color:</span> {person.eye_color}
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <span className="font-semibold">Homeworld:</span> {person.homeworld}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default PersonPage
