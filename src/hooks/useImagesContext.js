import { useContext } from "react"
import { ImagesContext } from "../context/ImagesContext.jsx"

export const useImagesContext = () => {
  const context = useContext(ImagesContext)

  if (!context) {
    throw new Error("useImagesContext must be used within a ImagesContextProvider")
  }

  return context
}