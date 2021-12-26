import {
  GET_POSTERS,
  GET_BLANK,
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
  GET_PERSON
} from '../constants'

const initialState = {
  code:     '',
  base:     '',
  info:     '',
  crew:     [],
  butsc:    [],
  butsg:    [],
  post:     [['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png']],
  animate:  [['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png'], ['', 'blank', 0, 'p1.png']],
  find:     [],
  numbb:    8, 
  numbs:    5,
  numba:    0,
  trigger:  0,
  triggerr: 0,
  count:    1,
  countr:   1,
  placard:  0,
  rank:     'blankp1.png',
  user:     'blankp1.png',
  avat:     [],
  name:     '',
  email:    '',
  User:     '',
  love:     '',
  usernum:  '',
  login:    '',
  logon:    0,
  year1:    '',
  year2:    '',
  name1:    ''
}
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGON:
      return{
        ...state,
        logon: action.logon,
        login: action.login
      }
    case GET_USER:
      return{
        ...state,
        login: 2,
        usernum: action.user[0],
        user:    action.user[1] + '.jpg',
        name:    action.user[2],
        post:    action.post,
        base:    action.card[0][8],
        code:    action.card[0][0],
        info:    action.card[0],
        butsc:   action.card[1],
        butsg:   action.card[2],        
        crew:    action.card[3],
        animate: action.blank,
        love:    action.love,
        rank:    action.rank,
        placard: 0 
    }
    case GET_FILMDATA:
      return {
        ...state,
        login: 2,
        base:  action.card[0][8],
        code:  action.card[0][0],
        info:  action.card[0],
        butsc: action.card[1],
        butsg: action.card[2],        
        crew:  action.card[3],
        year1: '',
        year2: '',
        name1: '',
        placard: 0
    }
    case GET_BLANK:
      return{
        ...state,
        animate: action.blank,
        usernum: action.usern,
        post: action.prope
    }
    case LOGIN:
      return{
        ...state,
        avat: action.payload
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
        post: action.code0,
        animate: action.code1,
        info:  action.card[0],
        butsc: action.card[1],
        butsg: action.card[2],
        crew:  action.card[3],
        placard: 0
    }
    case GET_PERSON:
      return {
        ...state,
        base:  1,
        code:  action.code,
        year1: action.year1,
        year2: action.year2,
        name1: action.name1,
        find:  action.post,
        login: 3,
        placard: 3
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
        post: action.payload,
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
