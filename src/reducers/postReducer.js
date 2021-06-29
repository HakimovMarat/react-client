import {
  GET_POSTERS,
  GET_FILMDATA,
  UPD_COUNT,
  UPD_COUNTR,
  UPD_PLAC,
  GET_NEXT,
  GET_NEXTR,
  GET_FIND,
  LOGIN,
  LOGON,
  GET_USER,
  NAME,
  EMAIL,
  NEW_USER
} from '../constants'

const initialState = {
  info:     '',
  crew:     [],
  butsc:    [],
  butsg:    [],
  posters:  [],
  animate:  [],
  find:     [],
  numbb:    8,
  numbs:    5,
  numba:    0,
  trigger:  0,
  triggerr: 0,
  count:    1,
  countr:   1,
  placard:  0,
  login:    0,
  user:     'ava',
  avat:     [],
  name:     '',
  email:    '',
  User:     ''
}
export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      return{
        ...state,
        login: 3
    }
    case GET_USER:
      return{
        ...state,
        placard: 0,
        login: 0,
        numb:    action.numb,
        user:    action.foto,
        info:    action.card[0],
        butsc:   action.card[1],
        butsg:   action.card[2],
        crew:    action.card[3],
    }
    case LOGIN:
      return{
        ...state,
        login: 2,
        placard: 2,
        avat: action.payload
    }
    case LOGON:
      return{
        ...state,
        login: action.count,
        User: action.payload,
        placard: 2
    }
    case NAME:
      return{
        ...state,
        name: action.payload,
    }
    case EMAIL:
      return{
        ...state,
        email: action.payload,
    }
    case GET_FIND:
      return {
        ...state,
        placard: 3,
        find: action.find
    }
    case  UPD_PLAC:
      return {
        ...state,
        placard: action.placard,
    }
    case GET_POSTERS:
      return {
        ...state,
        posters: action.code0,
        animate: action.code1,
        info:  action.card[0],
        butsc: action.card[1],
        butsg: action.card[2],        
        crew:  action.card[3],
        placard: 0
    }
    case GET_FILMDATA:
      return {
        ...state,
        info:  action.card[0],
        butsc: action.card[1],
        butsg: action.card[2],        
        crew:  action.card[3],
        placard: 0
    }
    case UPD_COUNT:
      return {
        ...state,
        count: action.payload
    }
    case UPD_COUNTR:
      return {
        ...state,
        countr: action.payload
    }
    case GET_NEXT:
      return {
        ...state,
        posters: action.payload,
        numbs:   action.numbs,
        trigger: action.trigger
    }
    case GET_NEXTR:
      return {
        ...state,
        animate: action.payload,
        numba:   action.numbs,
        triggerr: action.trigger
    }
    default:
			return state
  }
}
