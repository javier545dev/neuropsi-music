import { useEffect } from 'react'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'
import { useStateProvider } from '../utils/StateProvider'

import Header from '../components/Header'
import Aside from '../components/Aside'
import Body from '../components/Body'
import Lyric from '../components/Lyric'
import Footer from '../components/Footer'

const Home = () => {
  const [{ token }, dispatch] = useStateProvider()
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
        imgProfile: data.images
      }
      dispatch({ type: reducerCases.SET_USER, userInfo })
    }
    getUserInfo()
  }, [dispatch, token])

  return (
    <main className='flex flex-col items-center max-h-[100vh] max-w-[100vw] mx-auto bg-black overflow-hidden'>
      <Header />

      <div className='flex flex-row w-full h-[85vh]'>
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
