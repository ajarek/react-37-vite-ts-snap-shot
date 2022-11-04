import './ImagesList.css'
type Props = {
  images: Array<Image>
}
interface Image {
  farm: number
  server: string
  id: string
  secret: string
  title: string
  url: string
}
const ImagesList = ({ images }: Props) => {
  return (
    <ul className={'ul'}>
      {images.map((image: Image) => {
        let farm = image.farm
        let server = image.server
        let id = image.id
        let secret = image.secret
        let title = image.title
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`
        return (
          <li key={id}>
            <img
              src={url}
              alt={title}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ImagesList
