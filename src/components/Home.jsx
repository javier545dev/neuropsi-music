import Header from './Header'
import Aside from './Aside'
import Body from './Body'
import Lyric from './Lyric'
import Footer from './Footer'

const Home = () => {
  return (
    <main className='flex flex-col items-center mx-auto bg-black min-w-screen w-full'>
      <Header />

      <div className='flex flex-row items-center justify-between w-full h-[85vh]'>
        <Aside />
        <div className='flex flex-row w-auto bg-gradient-to-b from-black via-slate-800 to-cyan-300 h-[75vh]'>
          <Body />
          <Lyric />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home
