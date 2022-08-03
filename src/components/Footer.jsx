import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-screen h-[150px] z-30 absolute bottom-0 bg-black text-white justify-evenly items-center border-t-2 border-teal-400'>
      <CurrentTrack />
      <PlayerControls />
    </div>
  )
}

export default Footer
