import './Search.css'
export const Search = () => {
  return (
    <form className={'form'}>
      <input
        type='search'
        placeholder='Search...'
        id=''
      />
      <input
        type='submit'
        value='🔍'
      />
      
    </form>
  )
}
export default Search
