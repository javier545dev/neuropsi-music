const Aside = () => {
  return (
    <aside className='flex flex-col h-full w-full mb-[8rem] items-center justify-center basis-1/4 md:basis-1/4 lg:basis-2/12'>
      <ul className='text-[#b3b3b3] list-none justify-center items-center flex flex-col h-full gap-[2rem] p-[1rem] mb-[10rem]'>
        <h1
          alt='spotify'
          className='text-center text-white border-b-2 border-b-cyan-400 '
        >
          Neuropsi
        </h1>
        <li className='flex gap-[1rem] pointer transition ease-in-out delay-100 hover:text-white hover:border-b-cyan-400 border-transparent border-2'>
          Albums
        </li>
        <li className='flex gap-[1rem] pointer transition ease-in-out delay-100 hover:text-white hover:border-b-cyan-400 border-transparent border-2'>
          Songs
        </li>
      </ul>
    </aside>
  )
}

export default Aside
