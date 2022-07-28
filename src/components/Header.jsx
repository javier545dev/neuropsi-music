import { useStateProvider } from '../utils/StateProvider'

import { FaSearch } from 'react-icons/fa'
import Logo from '../assets/react.svg'

const Header = () => {
  const [{ userInfo }] = useStateProvider()
  console.log(userInfo)

  return (
    <nav className='flex flex-row justify-between w-full h-[80px] px-3 bg-black'>
      <div className='flex flex-row items-center '>
        <img src={Logo} alt='logo' className='h-6 w-6' />
        <h1 className='text-white ml-2'>Neuropsi</h1>
      </div>

      <form className='flex flex-row items-center'>
        <div className='flex flex-row items-center bg-white rounded-full '>
          <FaSearch className='h-6 text-black pointer mx-[1rem]' />
          <input
            type='text'
            placeholder='Artists, Songs, Albums...'
            className='rounded-lg h-6 border-none w-full focus:outline-none'
          />
          <button
            type='submit'
            className='text-black bg-white w-24 pr-[1rem] rounded-full'
          >
            Search
          </button>
        </div>
      </form>
      <div className='flex flex-col rounded-full items-center justify-center'>
        <a href='' className='flex flex-col items-center'>
          <img
            src={userInfo?.imgProfile[0].url}
            alt=''
            className='h-8 w-8 rounded-full'
          />
          <span className='text-white text-[0.5rem]'>{userInfo?.name}</span>
        </a>
      </div>
    </nav>
  )
}

export default Header
