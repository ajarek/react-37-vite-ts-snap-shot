import './TitleImages.css'
type Props = {
  tags: string
}

const TitleImages = ({ tags }: Props) => {
  return (
    <div>
      <h3>
        <span className={'title-image'}>{tags} </span>
        Images
      </h3>
    </div>
  )
}

export default TitleImages
