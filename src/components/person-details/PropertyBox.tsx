import React, { FC } from "react"

type PersonDetailsPropertyBoxProps = {
  property: string
  value: string | number | boolean
}

const PropertyBox: FC<PersonDetailsPropertyBoxProps> = ({ property, value }) => {
  return (
    <div className="bg-gray-600 p-4 rounded-lg min-w-40">
      <span className="font-semibold">{property}:</span> {value}
    </div>
  )
}

export default PropertyBox
