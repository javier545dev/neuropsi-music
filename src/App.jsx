import { useEffect } from 'react'
import { reducerCases } from './utils/Constants'
import { useStateProvider } from './utils/StateProvider'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [{ token }, dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token })
      }
    }
    document.title = 'Spotify'
  }, [dispatch, token])
  return (
    <main className='flex flex-col items-center mx-auto bg-black min-w-screen w-full'>
      <div>{token ? <Home /> : <Login />}</div>
    </main>
  )
}

export default App
