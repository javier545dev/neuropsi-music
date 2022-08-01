import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'
const Footer = () => {
  return (
    <div className='flex flex-row w-screen h-[170px] z-30 absolute bottom-0 bg-black text-white justify-center items-center border-t-2 border-teal-400'>
      <CurrentTrack />
      <PlayerControls />
    </div>
  )
}

export default Footer
