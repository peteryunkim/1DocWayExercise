export default function fetchPatientInfo(state = {}, action){
	switch (action.type){
		//Need to get API info and populate state
		case 'GET_PATIENT':
			return {patient: action.payload}
		case 'GET_PATIENT_APPT':
			return {appt: {
				prev: action.payload,
				next: action.payload
			}}
		case 'GET_PHYSICIAN':
			return {physicianInfo: action.payload}

		default:
		return state
	}
}