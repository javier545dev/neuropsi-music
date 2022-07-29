const Aside = () => {
  return (
    <div className='flex flex-col items-start w-[25vw]'>
      <aside className='flex flex-col h-full w-full mb-[8rem] items-center justify-start'>
        <div className='flex flex-col'>
          <img
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
            alt='spotify'
            className='text-center mx-[3rem]'
          />
        </div>
        <ul className='text-[#b3b3b3] list-none justify-center items-center flex flex-col h-full gap-[1rem] p-[1rem]'>
          <li className='flex gap-[1rem] pointer transition ease-in-out delay-100 hover:text-white hover:border-b-cyan-400 border-transparent border-2'>
            Home
          </li>
          <li className='flex gap-[1rem] pointer transition ease-in-out delay-100 hover:text-white hover:border-b-cyan-400 border-transparent border-2'>
            Search
          </li>
          <li className='flex gap-[1rem] pointer transition ease-in-out delay-100 hover:text-white hover:border-b-cyan-400 border-transparent border-2'>
            Albums
          </li>
          <li className='flex gap-[1rem] pointer transition ease-in-out delay-100 hover:text-white hover:border-b-cyan-400 border-transparent border-2'>
            Songs
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Aside
