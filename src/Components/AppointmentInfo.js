import React from 'react'

class AppointmentInfo extends React.Component{

componentDidMount(){
let today = new Date()
let apptDate = this.props.info.checkup
console.log(today, apptDate)
console.log(this.props)
}

// class AppointmentInfo extends React.Component{
	// constructor(){
	// 	super()
	// 	this.state = {

	// 	}
	// }
	render(){
		return(
			<div className='appointments'>
			
		
				<h4>Your next appointment is with {this.props.info.nextPhysician}</h4>
				<p>Please come back on {this.props.info.nextCheckUp} at least 15 minutes before {this.props.info.nextTime} to ensure that all the paperwork or necessary work is done before the appointment.</p>
				<p>The reason for your next visit is: {this.props.info.nextReason}.</p>
			</div>
		)
	}
}

export default AppointmentInfo
/*
<h1> Previous Appointment </h1>
				<h4> Your previous appointment was with {props.info.lastPhysician} on {props.info.lastCheckUp}</h4>
				<p> Th reason for your visit was {props.info.lastReason}.</p>


fakeAppt: { 
					previous: {
						Physician: 'Dr. FeelGood, M.D.',
          	CheckUp: '6/12/2017',
          	Time: '10am',
          	Reason: 'a headache'
				},
					next: {
          Physician: 'Dr. FeelBetter, M.D.',
					CheckUp: '6/12/2018',
          Time: '10am',
          Reason: 'yearly physical'
					}
        } */