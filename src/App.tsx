import {createContext, useContext, useEffect, useState } from 'react'
import apiGet from './components/api/apiGet'
import { Header } from './components/Header/Header'
import ImagesList from './components/ImagesList/ImagesList'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'

export type GlobalContent = {
  tags:string
  setTags:(c: string) => void
}
export const AppContext = createContext<GlobalContent>({
  tags:'',
  setTags:() => {},
})
export const useGlobalContext = () => useContext(AppContext)
function App() {
  const [tags, setTags]=useState('pizza')
  const [images, setImages] = useState<[]>([])


  const url=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tags}&per_page=24&format=json&nojsoncallback=1`
 
  const Data = apiGet({ url })

  useEffect(()=>{
 
 console.log(url);
 if (Data) {
  setImages(Data.photos.photo)
}
  })
  
 

  
  return (
    <AppContext.Provider value={{tags, setTags}}>
    <div className='App'>
      <Header />
      <Search />
      <Navbar />
      <ImagesList images={images} />
    </div>
    </AppContext.Provider>
  )
}

export default App
