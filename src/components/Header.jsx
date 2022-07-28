import Logo from '../assets/react.svg'
const Header = () => {
  return (
    <nav className='flex flex-row justify-between w-full h-[80px] px-16 bg-black'>
      <div className='flex flex-row items-center'>
        <img src={Logo} alt='logo' className='h-6 w-6' />
        <h1 className='text-white ml-2'>SpotiClone</h1>
      </div>

      <ul className='flex flex-row text-white items-center gap-x-8'>
        <li>
          <a href='#'>Discover</a>
        </li>
        <li>
          <a href='#'>My Favorites</a>
        </li>
      </ul>
      <form className='flex flex-row items-center'>
        <input
          type='text'
          placeholder='Search Music...'
          className='rounded-lg h-6 w-64'
        />
        <button type='submit' className='text-black rounded-lg bg-white w-24'>
          Search
        </button>
      </form>
    </nav>
  )
}

export default Header
