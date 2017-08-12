import React from 'react'

function AppointmentInfo(props){
		return(
			<div className='appointments'>
				<h4>You have an appointment with {props.info.Physician}</h4>
				<p>Please come back on {props.info.CheckUp} at least 15 minutes before {props.info.Time} to ensure that all the paperwork or necessary work is done before the appointment.</p>
				<p>The reason for your next visit is: {props.info.Reason}.</p>
			</div>
		)
}

export default AppointmentInfo
