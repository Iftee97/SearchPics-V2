import ImageShow from "./ImageShow"
import { useImagesContext } from "../hooks/useImagesContext"
import './ImageList.css'

export default function ImageList() {
  const { images } = useImagesContext()

  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageShow image={image} key={image.id} />
      ))}
    </div>
  )
}
