import { useEffect, useState } from 'react'
import apiGet from './components/api/apiGet'
import { Header } from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
interface Image {
  farm: number
  server: string
  id: string
  secret: string
  title: string
  url: string
}

const url =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=Food&per_page=24&format=json&nojsoncallback=1'

function App() {
  const [images, setImages] = useState<[]>([])
  const  Data = apiGet({ url })
  console.log(Data)

  useEffect(() => {
   if(Data)
   { setImages(Data.photos.photo)}
})
  return (
    <div className='App'>
      <Header />
      <Search />
      <Navbar />
      <ul>
        { images.map((image:Image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return  <li key={id}><img src={url} alt={title} />
    </li>})}
       
      </ul>
    </div>
  )
}

export default App
