import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import { searchImages } from "./api"

export default function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const res = await searchImages(term)
    if (res) {
      setImages(res)
    }
  }

  return (
    <div>
      <h1>Pics Search</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}
