"use client"

import React from "react"
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

function FBMap() {
  const position = { lat: 31.94766, lng: -81.31081 }

  return (
    process.env.NEXT_PUBLIC_GOOGLE_API_KEY && (
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <Map center={position} zoom={13} disableDefaultUI>
          <Marker position={position} />
        </Map>
      </APIProvider>
    )
  )
}

export default FBMap
