import React from 'react'
import AppointmentInfo from '../Components/AppointmentInfo'
import {getPatientAppt} from '../ApiCalls/ApiFunctions'

//Container used so that if the pt has multiple appointments, the AppointmentInfo Component can be reused

class AppointmentContainer extends React.Component{
		constructor(){
			super()
			this.state={
				appt: null,
				//fake appt
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
					next: {
          Physician: 'Dr. FeelBetter, M.D.',
					CheckUp: '6/12/2018',
          Time: '10am',
          Reason: 'yearly physical'
					}
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
					{this.state.fakeAppt.previous.map( el => <p>{el.CheckUp}</p>)}
					<h1> Next Appointment</h1>
					<AppointmentInfo info={this.state.fakeAppt.next}/>
				</div>
			)
			
		}
}

export default AppointmentContainer
