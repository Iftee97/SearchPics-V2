import { useState } from "react"
import './SearchBar.css'

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(searchTerm.toLowerCase())
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
