import React from 'react'
import FutureAppointment from '../Components/FutureAppointment'
import PreviousAppointment from '../Components/PreviousAppointment'
// import {getPatientAppt} from '../ApiCalls/ApiFunctions' - used in componentDidMount


// class AppointmentContainer extends React.Component{

// 		constructor(){
// 			super()
// 			this.state={
// 				//this would populate with the API call for pt appointment
// 				appt: null,
// 				//fake appointment for demonstration purposes
// 				fakeAppt: { 
// 					previous: [
// 						{
// 							Physician: 'Dr. FeelGood, M.D.',
// 	          	CheckUp: '6/12/2016',
// 	          	Time: '10am',
// 	          	Reason: 'yearly physical'
//           	},
// 						{
// 							Physician: 'Dr. FeelGood, M.D.',
// 	          	CheckUp: '6/12/2017',
// 	          	Time: '10am', 
// 	          	Reason: 'a headache'
// 						}
// 				],
// 					next: [
// 						{
// 		          Physician: 'Dr. FeelBetter, M.D.',
// 		          PhysicianID: 1,
// 							CheckUp: '6/12/2018',
// 		          Time: '10am',
// 		          Reason: 'yearly physical'
// 						},
// 						{
// 		          Physician: 'Dr. Footman, M.D.',
// 		          PhysicianID: 2,
// 							CheckUp: '6/27/2018',
// 		          Time: '10am',
// 		          Reason: 'foot pain'
// 						}
// 					]
//         }
// 			}
// 		}

// 		componendDidMount(){
// 			//get patient appt info from API and populate appt in state

// 			// getPatientAppt(this.props.patientID)
// 			// .then(res => this.setState({
// 			// 	appt: res
// 			// }))
// 		}

// 		render(){
// 			return (
// 				<div>
// 					<div className='prev'>
// 						<h1> Previous Appointments </h1>
// 						{this.state.fakeAppt.previous.map( el => <PreviousAppointment info={el}/>)}
// 					</div>		
// 					<h1> Next Appointments </h1>
// 					<table className='appointment-table'>
// 					  <tr>
// 					    <th> Physician </th>
// 					    <th> Date </th> 
// 					    <th> Reason </th>
// 					  </tr>
// 						{this.state.fakeAppt.next.map (el => <FutureAppointment info={el}/>)}
// 					</table>
// 					<h4>NOTE: Please come in at least 15 minutes before your appointment to ensure that all the paperwork or necessary work is done before the appointment.</h4>
// 				</div>
// 			)
			
// 		}
// }

// export default AppointmentContainer

class AppointmentContainer extends React.Component{

		constructor(){
			super()
			this.state={
				//this would populate with the API call for pt appointment
				appt: null,
				//fake appointment for demonstration purposes
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
			// .then(res => store.dispatch({type: 'GET_PATIENT_APP', payload: res})
			// }))
		}

		render(){
			return (
				<div>
					<div className='prev'>
						<h1> Previous Appointments </h1>
						{this.state.fakeAppt.previous.map( el => <PreviousAppointment info={el}/>)}
					</div>		
					<h1> Next Appointments </h1>
					<table className='appointment-table'>
					  <tr>
					    <th> Physician </th>
					    <th> Date </th> 
					    <th> Reason </th>
					  </tr>
						{this.state.fakeAppt.next.map (el => <FutureAppointment info={el}/>)}
					</table>
					<h4>NOTE: Please come in at least 15 minutes before your appointment to ensure that all the paperwork or necessary work is done before the appointment.</h4>
				</div>
			)
			
		}
}

export default AppointmentContainer


