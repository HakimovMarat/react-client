import axios from 'axios'
import {
	GET_FILMDATA,
	GET_POSTERS,
	UPD_COUNT,
	UPD_COUNTR,
	UPD_PLAC,
	GET_NEXT,
	GET_NEXTR,
	GET_FIND,
	LOGIN,
	LOGON,
	GET_USER,
	NEW_USER,
	NAME,
	EMAIL
} from '../constants'

export const finded =  e => dispatch => {
	axios.get('/index/find', { params: { find: e } })
		.then(res => dispatch({
            type: GET_FIND,
			find: res.data
    	}))
		.catch(err => console.log(err))
}

export const getposters = () => dispatch => {
	axios.get('/index/start')
		.then(res => dispatch({
			type: GET_POSTERS,
			code0: res.data[0],
			card: res.data[1],
			code1: res.data[2]
		}))
		.catch(err => console.log(err))
}

export const getfilmdata = (code) => dispatch => {
	axios.get('/index/card', { params: { code: code } })
		.then(res => dispatch({
			type: GET_FILMDATA,
			card: res.data
		}))
		.catch(err => console.log(err))
}

export const password = (pass) => dispatch => {
	axios.get('/index/pass', { params: { pass: pass} })
		.then(res => dispatch({
			type: GET_USER,
			numb: res.data[0],
			foto: res.data[1],
			code: res.data[2],
			card: res.data[3],
			blank: res.data[4]
		}))
		.catch(err => console.log(err))
}

export const newUser = (name, mail, avat) => dispatch => {
	axios.get('/index/user', {params: { name: name,
		                                mail: mail,
		                                avat: avat }})
		.then(res => dispatch({
            type: NEW_USER,
			payload: res.data
		}))
		.catch(err => console.log(err))
}

export const ava = () => dispatch => {
    axios.get('/index/avat')
       .then(res => dispatch({
		    type: LOGIN,
			payload: res.data
        }))
        .catch(err => console.log(err))
}
 
export const logon = (count) => dispatch => {
  dispatch({
    type: LOGON,
    count: count,
  })
}

export const name = (name) => dispatch => {
	dispatch({
		   type: NAME,
		   payload: name
	   })
}

export const email = (email) => dispatch => {
	dispatch({
		   type: EMAIL,
		   payload: email
	   })
}

export const updatecount = (count) => dispatch => {
	 dispatch({
            type: UPD_COUNT,
			payload: count
		})
}

export const updateplacard = (count) => dispatch => {
	dispatch({
		   type: UPD_PLAC,
		   placard: count,
	   })
}

export const updatecountr = (countr) => dispatch => {
	dispatch({
		   type: UPD_COUNTR,
		   payload: countr
	   })
}

export const getnext = (trigger, posters, n, file) => dispatch => {
  axios.get('/index/scroll', { params: { numb: n, file: file } })
	   .then (res => dispatch(insert('up', trigger, posters, res.data, GET_NEXT)))
}

export const getnextr = (triggerr, animate, n, file) => dispatch => {
    axios.get('/index/scroll', { params: { numb: n, file: file } })
	   .then (res => dispatch(insert('up', triggerr, animate, res.data, GET_NEXTR)))
}

export const getlast = (trigger, posters, n, file) => dispatch => {
	let pg = 'dn';
	axios.get('/index/pgdn', { params: { hide: n, file: file} })
		 .then (res => dispatch(insert(pg, trigger, posters, res.data, GET_NEXT)))
}
export const getlastr = (triggerr, animate, n, file) => dispatch => {
	let pg = 'dn';
	axios.get('/index/pgdn', { params: { hide: n, file: file } })
		 .then (res => dispatch(insert(pg, triggerr, animate, res.data, GET_NEXTR)))
}

const insert = (pg, trigger, posters, data, type)  => {
	let cut
	if (pg === 'up'){
	  if (trigger === 0) {
		  cut = 10
		  trigger = 1
	  }
	  else if (trigger === 1) {
		  cut = 0
		  trigger = 2
	  }
	  else if (trigger === 2) {
		  cut = 5
	 	  trigger = 0
	  }
    }
	else if (pg === 'dn'){
		if (trigger === 0) {
			cut = 5
			trigger = 2
		}
		else if (trigger === 2) {
			cut = 0
			trigger = 1
		}
		else if (trigger === 1) {
			cut = 10
			trigger = 0
		}
	}
	posters.splice(cut, 5, [data[1][0], data[1][1]],
		                   [data[2][0], data[2][1]],
						   [data[3][0], data[3][1]],
						   [data[4][0], data[4][1]],
						   [data[5][0], data[5][1]]
					)
	return {
		type: type,
		payload: posters,
		numbs: data[0][0],
		trigger: trigger
	}

}
