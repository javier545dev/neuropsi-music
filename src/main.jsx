import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateProvider } from './store/StateProvider'
import reducer, { initialState } from './store/Reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
)
