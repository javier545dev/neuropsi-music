/* eslint-disable camelcase */
import Spotify from '../assets/spotifyLogo.png'
const Login = () => {
  const handleClick = async () => {
    const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
    const redirect_uri = 'http://localhost:5173/'
    const api_uri = 'https://accounts.spotify.com/authorize'
    const scope = [
      'user-read-private',
      'user-read-email',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read'
    ]
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen gap-20 bg-green-600'>
      <img src={Spotify} alt='spotify' className='h-[20vh]' />
      <h2>Login Spotify</h2>
      <button
        className='cursor-pointer text-[1.5rem] border-none bg-black text-green-600 px-[5rem] py-[1rem] rounded-full'
        onClick={handleClick}
      >
        Connect Spotify
      </button>
    </div>
  )
}

export default Login
