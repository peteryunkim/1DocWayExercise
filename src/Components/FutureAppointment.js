import React from 'react'
import ReactTooltip from 'react-tooltip'


function FutureAppointment(props){

	const getPhysicianInfo = (props) => {
		console.log(props)
	}


		return(
			<div className='appointments'>
				<h4>You have an appointment with <span onMouseOver={()=>getPhysicianInfo(props.info.Physician)}>{props.info.Physician}</span></h4>
				<p>Please come back on {props.info.CheckUp} at least 15 minutes before {props.info.Time} to ensure that all the paperwork or necessary work is done before the appointment.</p>
				<p>The reason for your next visit is: {props.info.Reason}.</p>
			</div>
		)
}

export default FutureAppointment
