import ImageShow from "./ImageShow"
import './ImageList.css'

export default function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  )
}
