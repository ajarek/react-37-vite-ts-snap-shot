import { useEffect, useState } from 'react'
import axios from 'axios'
type Props = {
  url: string
}
export const apiGet = ({ url }: Props) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function useFetch() {
      const response = await axios.get(url)
      setData(response.data)
    }
    useFetch()
  }, [])

  return data
}
export default apiGet
