import './Navbar.css'

const Navbar = () => {
  return (
    <ul className='list'>
      <li>
        <button className={'nav-btn'}  >Mountain</button>
      </li>
      <li>
        <button className={'nav-btn'} >Beaches</button>
      </li>
      <li>
        <button className={'nav-btn'} >Birds</button>
      </li>
      <li>
        <button className={'nav-btn'} >Food</button>
      </li>
    </ul>
  )
}

export default Navbar
