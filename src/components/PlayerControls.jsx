import axios from 'axios'
import { reducerCases } from '../store/Constants'
import { useStateProvider } from '../store/StateProvider'

import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle
} from 'react-icons/bs'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { FiRepeat } from 'react-icons/fi'
const PlayerControls = () => {
  const [{ token, playerState }, dispatch] = useStateProvider()
  const changeTrack = async type => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    )
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    )
    if (response.data !== '') {
      const { item } = response.data
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artist: item.artists.map(artist => artist.name),
        album: item.album.images[2].url
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
    } else dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null })
  }

  const changeState = async () => {
    const state = playerState ? 'pause' : 'play'
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState
    })
  }
  return (
    <div className='flex flex-row items-center gap-6 md:gap-10 text-[1.5rem]'>
      <div className='text-gray-500 transition-colors hover:text-white'>
        <BsShuffle />
      </div>
      <div className='text-gray-500 transition-colors hover:text-white'>
        <CgPlayTrackPrev onClick={() => changeTrack('previous')} />
      </div>
      <div className='text-cyan-300 transition-colors hover:text-cyan-300 text-[3rem]'>
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className='text-gray-500 transition-colors hover:text-white'>
        <CgPlayTrackNext onClick={() => changeTrack('next')} />
      </div>
      <div className='text-gray-500 transition-colors hover:text-white'>
        <FiRepeat />
      </div>
    </div>
  )
}

export default PlayerControls
