import { useEffect } from 'react'
import { useStateProvider } from '../store/StateProvider'
import { reducerCases } from '../store/Constants'
import axios from 'axios'

const CurrentTrack = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider()

  useEffect(() => {
    const getCurrentTrack = async () => {
      const { data } = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      )
      if (data !== '') {
        const { item } = data
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map(artist => artist.name),
          image: item.album.images[2].url
        }
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      }
    }
    getCurrentTrack()
  }, [])

  return (
    <div>
      {currentlyPlaying && (
        <div className='flex items-center gap-[1rem]'>
          <div className=''>
            <img
              src={currentlyPlaying.image}
              alt='currentlyplaying'
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col gap-[0.3rem]'>
            <h4 className='text-white'>{currentlyPlaying.name}</h4>
            <h6 className='text-white'>{currentlyPlaying.artists}</h6>
          </div>
        </div>
      )}
    </div>
  )
}

export default CurrentTrack
