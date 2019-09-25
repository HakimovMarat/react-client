import {
  GET_POSTERS,
  GET_FILMDATA,
  UPD_COUNT,
  GET_NEXT
} from '../constants'

const initialState = {
  info: '',
  posters: [],
  trigger: 0,
  count: 0
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTERS:
      return {
        ...state,
        posters: action.payload
    }
    case GET_FILMDATA:
      return {
        ...state,
        info: action.payload
      }
    case UPD_COUNT:
      return {
        ...state,
        count: action.payload
    }
    case GET_NEXT:
      return {
        ...state,
        posters: action.payload,
        trigger: action.trigger
    }
    default:
			return state
  }
}
