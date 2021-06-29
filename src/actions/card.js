import axios from 'axios'
import {
	GET_FILMDATA,
	GET_POSTERS,
	UPD_COUNT,
	UPD_COUNTR,
	UPD_PLAC,
	GET_NEXT,
	GET_NEXTR,
	GET_FIND
} from '../constants'

export const finded =  e => dispatch => {
	axios.get('/index/find', { params: { find: e } })
		.then(res => dispatch({
            type: GET_FIND,
			payload: res.data            
		}))
		.catch(err => console.log(err))
}

export const getposters =  numb => dispatch => {
	axios.get('/index/start', { params: { file: numb } })
		.then(res => dispatch({
            type: GET_POSTERS,
			payload: res.data
		}))
		.catch(err => console.log(err))
}

export const getfilmdata = (numb, file) => dispatch => {
	axios.get('/index/card', { params: { numb: numb, file: file } })
		.then(res => dispatch({
            type: GET_FILMDATA,
			payload: res.data
		}))
		.catch(err => console.log(err))
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
	let pg = 'up';
  axios.get('/index/pgup', { params: { hide: n, file: file } })
	   .then (res => dispatch(insert(pg, trigger, posters, res.data, GET_NEXT)))
}

export const getlast = (trigger, posters, n, file) => dispatch => {
	let pg = 'dn';
	axios.get('/index/pgdn', { params: { hide: n, file: file} })
		 .then (res => dispatch(insert(pg, trigger, posters, res.data, GET_NEXT)))
}

export const getnextr = (triggerr, animate, n, file) => dispatch => {
	let pg = 'up';
    axios.get('/index/pgup', { params: { hide: n, file: file } })
	   .then (res => dispatch(insert(pg, triggerr, animate, res.data, GET_NEXTR)))
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
	posters.splice(cut, 5, [data[1][0][0], data[1][0][1]],
		                   [data[1][1][0], data[1][1][1]],
						   [data[1][2][0], data[1][2][1]],
						   [data[1][3][0], data[1][3][1]],
						   [data[1][4][0], data[1][4][1]]
					)
	return {
		type: type,
		payload: posters,
		numbs: data[0][0],
		trigger: trigger
	}

}
