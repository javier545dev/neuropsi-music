import { useStateProvider } from '../utils/StateProvider'
import { Player } from '@lottiefiles/react-lottie-player'

const Body = () => {
  const [{ searchResults }] = useStateProvider()
  const { tracks, artists } = searchResults
  console.log(tracks)
  console.log(artists)

  return (
    <div className='flex flex-col h-[100vh] bg-gradient-to-b from-black via-slate-800 to-cyan-300 basis-3/4  md:basis-3/4 lg:basis-11/12 overflow-y-auto'>
      <div className='flex flex-row flex-wrap justify-center items-center h-[100%] pb-[15rem] w-full pt-[5rem] z-10'>
        {tracks?.items.map(item => {
          console.log(item)
          return (
            <div
              className='flex flex-col flex-wrap justify-center items-center gap-5 w-[15rem] h-[15rem]'
              key={item.id}
            >
              <div className='flex flex-col justify-center items-center rounded-full bg-black w-[12rem] h-[12rem]  border-2 border-cyan-300 shadow-lg '>
                <img
                  src={item.album.images[1].url}
                  alt='track'
                  className='h-[6rem] w-[6rem] rounded-full'
                />
                <h1 className='text-white pt-[0.5rem]'>
                  {item.album.artists[0].name}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center h-[100%] pb-[15rem] w-full z-10'>
        {artists?.items.map(item => {
          console.log(item)
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
      <Player
        src='https://assets7.lottiefiles.com/packages/lf20_lbHpNV.json'
        className='z-0 absolute w-[75vw] right-0 bottom-[20%] ml-[5rem] py-10'
        loop
        autoplay
        speed={2}
      />
    </div>
  )
}

export default Body
