import { useState } from "react"
import { useImagesContext } from "../hooks/useImagesContext"
import { searchImages } from "../api"
import './SearchBar.css'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const { dispatch } = useImagesContext()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const images = await searchImages(searchTerm.toLowerCase())
    dispatch({ type: "SET_IMAGES", payload: images })
  }

  return (
    <div className="search-bar">
      <label>Enter Search Term:</label>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  )
}
