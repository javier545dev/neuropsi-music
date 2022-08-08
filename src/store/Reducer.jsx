import { reducerCases } from './Constants'
export const initialState = {
  token: null,
  device: null,
  userInfo: null,
  searchResults: '',
  currentlyPlaying: null,
  playerState: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case reducerCases.SET_DEVICE:
      return {
        ...state,
        device: action.device
      }
    case reducerCases.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case reducerCases.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      }
    case reducerCases.SET_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying
      }
    case reducerCases.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState
      }
    default:
      return state
  }
}

export default reducer
