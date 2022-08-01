/* eslint-disable camelcase */
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/Constants'
import axios from 'axios'

const Body = () => {
  const [{ token, searchResults }, dispatch] = useStateProvider()
  console.log(searchResults, 'searchResults')
  const { tracks, artists } = searchResults

  const playTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number
  ) => {
    const response = await axios.put(
      'https://api.spotify.com/v1/me/player/play',
      {
        context_uri,
        offset: {
          position: track_number - 1
        },
        position_ms: 0
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    )
    console.log('trackplay', response)
    if (response.status === 204) {
      const currentlyPlaying = {
        id,
        name,
        artists,
        image
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
    } else dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
  }

  return (
    <div className='flex flex-col h-full w-full basis-3/4  md:basis-3/4 lg:basis-11/12 overflow-y-auto bg-gradient-to-b from-black via-cyan-500 to-cyan-400'>
      <div className='relative flex flex-col h-full w-full bg-animated bg-cover'>
        <div className='flex flex-row flex-wrap justify-center items-center h-[100%] pb-[15rem] w-full pt-[5rem] z-10'>
          {tracks?.items.map(item => {
            const {
              id,
              name,
              artists,
              image,
              album,
              context_uri,
              track_number
            } = item
            console.log(item, 'tracks')
            return (
              <div
                className='flex flex-col flex-wrap justify-center items-center gap-8 w-full h-[10rem]'
                key={id}
                onClick={() =>
                  playTrack(id, name, artists, image, context_uri, track_number)
                }
              >
                <div className='flex flex-row justify-center items-center w-full h-[12rem] shadow-lg hover:w-[15rem] hover:h-[15rem] hover:bg-cyan-300 hover:z-20 transition ease-in-out delay-100 text-white hover:text-black'>
                  <img
                    src={album.images[1].url}
                    alt='track'
                    className='h-[6rem] w-[6rem] hover:w-[9rem] hover:h-[9rem] rounded-full'
                  />
                  <h1 className='pt-[0.5rem]'>{album.artists[0].name}</h1>
                  <h2 className='pt-[0.5rem]'>{name}</h2>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center h-[100%] pb-[2rem] w-full z-10'>
          {artists?.items.map(item => {
            console.log(item, 'artists')
            return (
              <div
                className='flex flex-col justify-center items-center gap-5 w-[15rem] h-[15rem] '
                key={item.id}
              >
                <div>
                  <h1>prueba</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Body
