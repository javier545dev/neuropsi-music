import { reducerCases } from './Constants'
export const initialState = {
  token: null,
  userInfo: null,
  searchResults: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token
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
    default:
      return state
  }
}

export default reducer
