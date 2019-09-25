import axios from 'axios'
import {
	GET_FILMDATA,
	GET_POSTERS,
	UPD_COUNT,
	GET_NEXT
} from '../constants'

export const getposters = () => dispatch => {
	axios.get('/index/start')
		.then(res => dispatch({
      type: GET_POSTERS,
			payload: res.data
		}))
		.catch(err => console.log(err))
}

export const getfilmdata = postData => dispatch => {
	axios.get('/index/card', { params: { numb: postData } })
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

export const getnext = (trigger, posters) => dispatch => {
	let pg = 'up';
  axios.get('/index/pgup')
	   .then (res => dispatch(insert(pg, trigger, posters, res.data)))
}

export const getlast = (trigger, posters) => dispatch => {
	let pg = 'dn';
	axios.get('/index/pgdn')
		 .then (res => dispatch(insert(pg, trigger, posters, res.data)))
}

export const insert = (pg, trigger, posters, data)  => {
	let cut
	if (pg === 'up'){
	  if (trigger === 0){
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
		if (trigger === 0){
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
	posters.splice(cut, 5, [data[0][0], data[0][1]], [data[1][0], data[1][1]],
											   [data[2][0], data[2][1]], [data[3][0], data[3][1]],
												 [data[4][0], data[4][1]])
	return {
		  type: GET_NEXT,
		  payload: posters,
		  trigger: trigger
	 }
}
