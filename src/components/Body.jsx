/* eslint-disable camelcase */
import { useStateProvider } from '../store/StateProvider'
import { reducerCases } from '../store/Constants'
import axios from 'axios'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'

const Body = () => {
  const [{ token, searchResults }, dispatch] = useStateProvider()
  const { tracks, artists } = searchResults

  const playTrack = async item => {
    const {
      id,
      name,
      track_number,
      album: { uri, images }
    } = item
    console.log(item)
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri: uri,
        offset: {
          position: track_number - 1
        },
        position_ms: 0
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )
    if (response.status === 204) {
      const currentlyPlaying = {
        id,
        name,
        artists,
        image: images[2].url
      }
      console.log(currentlyPlaying)
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
    } else dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
  }
  const msToMinutesAndSeconds = ms => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <div className='flex flex-col h-full w-full basis-3/4  md:basis-3/4 lg:basis-11/12 overflow-y-auto bg-gradient-to-b from-black via-cyan-500 to-cyan-400'>
      <div className='relative flex flex-col h-full w-full bg-animated bg-cover'>
        <div className='grid overflow-hidden grid-lines grid-cols-4 auto-rows-fr gap-0 text-white sticky px-2 md:px-[0rem] items-center py-[1rem] top-[3vh] h-5 text-[0.8rem]  divide-x divide-solid  divide-gray-50'>
          <div className='flex items-center justify-center'>
            <h3>#</h3>
          </div>
          <div className='flex items-center justify-center'>
            <h3>
              TITLE <br /> / ARTIST
            </h3>
          </div>
          <div className='flex items-center justify-center'>
            <h3>ALBUM</h3>
          </div>
          <div className='flex items-center justify-center'>
            <AiFillClockCircle className='text-[1rem] md:text-[1.5rem]' />
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center h-[100%] pb-[15rem] w-full pt-[5rem] z-10'>
          {tracks?.items.map((item, index) => {
            return (
              <div
                className='grid overflow-hidden grid-lines grid-cols-4 auto-rows-fr gap-0 w-full h-[8rem] items-center justify-center hover:bg-cyan-300 hover:z-20 transition ease-in-out delay-100 text-white hover:text-black shadow-lg'
                key={item.id}
                onClick={() => playTrack(item)}
              >
                <div
                  className='flex flex-row justify-center items-center gap-3 md:gap-10 lg:gap-14 w-full '
                  onClick={() => playTrack(item)}
                >
                  <span>{index + 1}</span>

                  <BsFillPlayCircleFill
                    onClick={() => playTrack(item)}
                    className='text-[2rem]'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='pt-[0.5rem] text-[0.7rem] md:text-[1rem]'>
                    {item.name}
                  </h2>
                  <h1 className='pt-[0.5rem] text-[0.7rem] md:text-[1rem]'>
                    {item.album.artists[0].name}
                  </h1>
                </div>
                <div className='flex flex-row justify-center items-center'>
                  <img
                    src={item.album.images[2].url}
                    alt='track'
                    className='h-[4rem] w-[4rem] hover:w-[7rem] hover:h-[7rem] rounded-full border-2 hover:border-black'
                  />
                </div>
                <div className='flex flex-row justify-center items-center text-[0.7rem] md:text-[1rem]'>
                  <span>{msToMinutesAndSeconds(item.duration_ms)}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center h-[100%] pb-[2rem] w-full z-10'>
          {artists?.items.map(item => {
            return (
              <div
                className='flex flex-col justify-center items-center gap-5 w-[15rem] h-[15rem] '
                key={item.id}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Body
