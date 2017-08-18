import axios from 'axios' //making api calls

export function getPatientInfo(){
	const url = //patient API
	return axios.get(url)
}

export function getPatientAppt(ID){
	const url = //patient appointment API 
	return axios.post(url, {ID: ID})
}

export function getPhysicianInfo(ID){
	const url = //patient API for information
	return axios.post(url, {ID: ID})
}
}