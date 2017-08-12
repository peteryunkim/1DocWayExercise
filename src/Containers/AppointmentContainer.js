import React from 'react'
import FutureAppointment from '../Components/FutureAppointment'
// import {getPatientAppt} from '../ApiCalls/ApiFunctions'
import PreviousAppointment from '../Components/PreviousAppointment'


class AppointmentContainer extends React.Component{

		constructor(){
			super()
			this.state={
				//this would populate with the API call for pt appointment
				appt: null,
				//fake appointmentt
				fakeAppt: { 
					previous: [
						{
							Physician: 'Dr. FeelGood, M.D.',
	          	CheckUp: '6/12/2016',
	          	Time: '10am',
	          	Reason: 'yearly physical'
          	},
						{
							Physician: 'Dr. FeelGood, M.D.',
	          	CheckUp: '6/12/2017',
	          	Time: '10am',
	          	Reason: 'a headache'
						}
				],
					next: [
						{
		          Physician: 'Dr. FeelBetter, M.D.',
		          PhysicianID: 1,
							CheckUp: '6/12/2018',
		          Time: '10am',
		          Reason: 'yearly physical'
						},
						{
		          Physician: 'Dr. Footman, M.D.',
		          PhysicianID: 2,
							CheckUp: '6/27/2018',
		          Time: '10am',
		          Reason: 'foot pain'
						}
					]
        }
			}
		}

		componendDidMount(){
			//get patient appt info from API and populate appt in state

			// getPatientAppt(this.props.patientID)
			// .then(res => this.setState({
			// 	appt: res
			// }))
		}

		render(){
			return (
				<div>
					<h1> Previous Appointments </h1>
					{this.state.fakeAppt.previous.map( el => <PreviousAppointment info={el}/>)}
					
					<h1> Next Appointments</h1>
					{this.state.fakeAppt.next.map (el => <FutureAppointment info={el}/>)}
				</div>
			)
			
		}
}

export default AppointmentContainer


