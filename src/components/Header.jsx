import { useState } from 'react'
import { reducerCases } from '../utils/Constants'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [{ token, userInfo }, dispatch] = useStateProvider()

  const query = async searchQuery => {
    try {
      const queryResult = await axios.get(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=10`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      )
      dispatch({
        type: reducerCases.SET_SEARCH_RESULTS,
        searchResults: queryResult.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    query(searchQuery)
  }

  const updateSearch = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <nav className='flex flex-row justify-end w-full h-[80px] px-3 bg-black'>
      <form className='flex flex-row items-center' onSubmit={handleSubmit}>
        <div className='flex flex-row items-center bg-white rounded-full h-10 w-[32rem] '>
          <FaSearch className='h-6 text-black pointer mx-[1rem]' />
          <input
            type='text'
            placeholder='Artists, Songs, Albums...'
            className='rounded-lg h-6 border-none w-full focus:outline-none'
            value={searchQuery}
            onChange={updateSearch}
          />
          <button
            type='submit'
            className='text-black bg-white w-24 pr-[1rem] rounded-full'
          >
            Search
          </button>
        </div>
      </form>
      <div className='flex flex-col rounded-full items-center justify-center ml-[5rem]'>
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
