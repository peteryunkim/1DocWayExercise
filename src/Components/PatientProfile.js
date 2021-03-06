import React from 'react'

function PatientProfile(props) {

		return (
		<div className='profile'>
			<img className='patient-picture'src={require('../img/JP.jpg')} alt='patient' height='250px' width='auto'/>
			<p>Welcome back, {props.patient.name}! </p>
			<p>You are a patient of {props.patient.physicianName}</p>
			<p>You were last seen on {props.patient.lastCheckUp}</p>
			<p>Age: {props.patient.age}</p>
			<p>Weight: {props.patient.weight}</p>
		</div>
		)
}

export default PatientProfile
