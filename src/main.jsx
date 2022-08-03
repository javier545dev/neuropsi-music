import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateProvider } from './utils/StateProvider'
import reducer, { initialState } from './utils/Reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
)
