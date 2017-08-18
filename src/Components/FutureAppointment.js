import React from 'react'
// import {getPhysicianInfo} from '../ApiCalls/ApiFunction' - used in componentDidMount
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';

// class FutureAppointment extends React.Component{
// 	constructor(){
// 		super()
// 		this.state={
// 			popoverOpen: false,
// 			//physician info populated by API call
// 			physicianInfo: null,
// 			//fake physician used for demonstration purposes
// 			fakePhysicianInfo: 
// 			{
// 				name: 'Dr. Health',
// 				photo: null,
// 				specialty: 'Internal Medicine',
// 				education: 'University of Health'
// 			}
// 		}
// 		this.toggle = this.toggle.bind(this)
// 	}

// 	componentDidMount(){
// 		// retrieve physician info from API for each individual physician

// 		// getPhysicianInfo(this.props.infor.PhysicianID)
// 		// .then(res => this.setState({
// 		// 	physicianInfo: res
// 		// }))
// 	}

// 	toggle() {
//     this.setState({
//       popoverOpen: !this.state.popoverOpen
//     });
//     console.log('toggled')
//   }

// render(){
// 		return(
// 		  <tr>
// 		    <td className='physician-name' id={'Popover-' + this.props.info.PhysicianID} onMouseOver={this.toggle} onMouseLeave={this.toggle}> {this.props.info.Physician} </td>
// 		    <td> {this.props.info.CheckUp} </td> 
// 		    <td> {this.props.info.Reason} </td>

// 				<Popover placement='top' isOpen={this.state.popoverOpen} target={'Popover-' + this.props.info.PhysicianID} toggle={this.toggle}>
// 				<PopoverTitle>{this.props.info.Physician}</PopoverTitle>
// 				<PopoverContent>
// 					<img src={require('../img/phys1.jpeg')} alt='physician' height='150px'/>
// 					<p>Name: {this.props.info.Physician}</p>
// 					<p>Specialty: {this.state.fakePhysicianInfo.specialty}</p>
// 					<p>Education: {this.state.fakePhysicianInfo.education}</p>
// 				</PopoverContent>
// 				</Popover>
// 		  </tr>
// 		)
// 	}
// }

// export default FutureAppointment

class FutureAppointment extends React.Component{
	constructor(){
		super()
		this.state={
			popoverOpen: false,
			//physician info populated by API call
			physicianInfo: null,
			//fake physician used for demonstration purposes
			fakePhysicianInfo: 
			{
				name: 'Dr. Health',
				photo: null,
				specialty: 'Internal Medicine',
				education: 'University of Health'
			}
		}
		this.toggle = this.toggle.bind(this)
	}

	componentDidMount(){
		// retrieve physician info from API for each individual physician

		// getPhysicianInfo(this.props.infor.PhysicianID)
		// .then(res => store.dispatch({type: 'GET_PHYSICIAN', payload: res})
		// }))
	}

	toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
    console.log('toggled')
  }

render(){
		return(
		  <tr>
		    <td className='physician-name' id={'Popover-' + this.props.info.PhysicianID} onMouseOver={this.toggle} onMouseLeave={this.toggle}> {this.props.info.Physician} </td>
		    <td> {this.props.info.CheckUp} </td> 
		    <td> {this.props.info.Reason} </td>

				<Popover placement='top' isOpen={this.state.popoverOpen} target={'Popover-' + this.props.info.PhysicianID} toggle={this.toggle}>
				<PopoverTitle>{this.props.info.Physician}</PopoverTitle>
				<PopoverContent>
					<img src={require('../img/phys1.jpeg')} alt='physician' height='150px'/>
					<p>Name: {this.props.info.Physician}</p>
					<p>Specialty: {this.state.fakePhysicianInfo.specialty}</p>
					<p>Education: {this.state.fakePhysicianInfo.education}</p>
				</PopoverContent>
				</Popover>
		  </tr>
		)
	}
}

export default FutureAppointment
