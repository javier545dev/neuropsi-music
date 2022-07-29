import { useStateProvider } from '../utils/StateProvider'

const Body = () => {
  const [{ searchResults }] = useStateProvider()
  console.log(searchResults)
  return (
    <div className='w-[50vw]'>
      <div className='flex flex-row justify-between w-full h-[100vh]'>
        {/* {searchResults.map(item => (
          <div
            className='flex flex-col items-center justify-center w-full h-[100vh]'
            key={item.id}
          >
            <img src={item.images[0].url} alt='' className='h-full w-full' />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Body
