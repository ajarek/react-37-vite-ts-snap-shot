import {
  createContext,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react'
import axios from 'axios'
import { Header } from './components/Header/Header'
import ImagesList from './components/ImagesList/ImagesList'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import TitleImages from './components/TitleImages/TitleImages'

export type GlobalContent = {
  tags: string
  setTags: (c: string) => void
}
export const AppContext = createContext<GlobalContent>({
  tags: '',
  setTags: () => {},
})
export const useGlobalContext = () => useContext(AppContext)
function App() {
  const [tags, setTags] = useState('autumn')
  const [images, setImages] = useState<[]>([])

  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tags}&per_page=24&format=json&nojsoncallback=1`

  useEffect(() => {
    async function useFetch() {
      const response = await axios.get(url)
      setImages(response.data.photos.photo)
    }
    useFetch()
  }, [tags])

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    let inputValue = (target.elements[0] as HTMLInputElement).value
    setTags(inputValue)
  }

  return (
    <AppContext.Provider value={{ tags, setTags }}>
      <div className='App'>
        <Header />
        <Search handleSubmit={handleSubmit} />
        <Navbar />
       <TitleImages
        tags={tags}/>
        <ImagesList images={images} />
      </div>
    </AppContext.Provider>
  )
}

export default App
