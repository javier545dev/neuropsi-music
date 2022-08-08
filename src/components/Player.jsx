import { useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useStateProvider } from '../store/StateProvider'

const Player = () => {
  const [{ token, device, currentlyPlaying, playerState }] = useStateProvider()
  useEffect(() => {
    console.log(playerState, device)
  }, [playerState, device])
  return (
    <div className='w-screen px-[1rem]'>
      {playerState === false ? (
        <div className='flex justify-center items-center h-full w-full'>
          <h1 className='text-3xl'>No track is playing</h1>
        </div>
      ) : (
        <SpotifyPlayer
          autoPlay={true}
          name={device.nameDevice}
          volume={device.volume}
          persistDeviceSelection={true}
          locale={device.locale === 'es_PE' ? 'es_PE' : 'en_US'}
          isInitializing={true}
          token={token}
          devices={[
            {
              id: device.id,
              name: device.nameDevice
            }
          ]}
          uris={[currentlyPlaying?.uri]}
          styles={{
            loaderColor: '#0EC7D9',
            altColor: '#000',
            bgColor: '#000',
            color: '#0EC7D9',
            height: '8vh',
            sliderColor: '#0EC7D9',
            sliderHeight: '10px',
            sliderBorderRadius: '5px',
            sliderHandleColor: '#fff',
            sliderTrackColor: '#707171',
            sliderTrackBorderRadius: '25px',
            trackArtistColor: '#0EC7D9',
            trackNameColor: '#0EC7D9'
          }}
        />
      )}
    </div>
  )
}

export default Player
