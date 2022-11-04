import { HTMLInputTypeAttribute } from 'react'
import './Search.css'
type Props = {
  handleSubmit: React.FormEventHandler
 
}
export const Search = ({ handleSubmit }: Props) => {
  return (
    <form
      className={'form'}
      onSubmit={handleSubmit}
    >
      <input
        type='search'
        placeholder='Search...'
      />
      <input
        type='submit'
        value='🔍'
      />
    </form>
  )
}
export default Search
