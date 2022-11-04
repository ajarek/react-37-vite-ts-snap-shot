import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import './Navbar.css'

const Navbar = () => {
  const { tags, setTags } = useContext(AppContext)

  const addText = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setTags(target.innerHTML.toLowerCase())
  }

  return (
    <ul className='list'>
      <li>
        <button
          className={'nav-btn'}
          onClick={addText}
        >
          Mountain
        </button>
      </li>
      <li>
        <button
          className={'nav-btn'}
          onClick={addText}
        >
          Beach
        </button>
      </li>
      <li>
        <button
          className={'nav-btn'}
          onClick={addText}
        >
          Birds
        </button>
      </li>
      <li>
        <button
          className={'nav-btn'}
          onClick={addText}
        >
          Food
        </button>
      </li>
    </ul>
  )
}

export default Navbar
