import CurrentTrack from './CurrentTrack'
const Footer = () => {
  return (
    <div className='flex flex-row w-screen h-[140px] z-30 absolute bottom-0 bg-black text-white justify-center items-center border-t-2 border-teal-400'>
      <CurrentTrack />
    </div>
  )
}

export default Footer
