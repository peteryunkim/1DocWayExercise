import React from 'react'
// import {getPhysicianInfo} from '../ApiCalls/ApiFunction'
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';

class FutureAppointment extends React.Component{
	constructor(){
		super()
		this.state={
			popoverOpen: false,
			//physician info populated by API call
			physicianInfo: null,
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
		// retrieve physician info from API

		// getPhysicianInfo(this.props.infor.PhysicianID)
		// .then(res => this.setState({
		// 	physicianInfo: res
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
			<div className='appointments'>
				<h4>You have an appointment with 
					<a id={'Popover-' + this.props.info.PhysicianID} onMouseOver={this.toggle}> {this.props.info.Physician}</a>
					<Popover placement='Right' isOpen={this.state.popoverOpen} target={'Popover-' + this.props.info.PhysicianID} toggle={this.toggle}>
					<PopoverTitle>{this.props.info.Physician}</PopoverTitle>
					<PopoverContent>
						<img src={require('../img/phys1.jpeg')} alt='physician' height='150px'/>
						<p>Name: {this.props.info.Physician}</p>
						<p>Specialty: {this.state.fakePhysicianInfo.specialty}</p>
						<p>Education: {this.state.fakePhysicianInfo.education}</p>
					</PopoverContent>
					</Popover>
					
				</h4>
				<p>Please come back on {this.props.info.CheckUp} at least 15 minutes before {this.props.info.Time} to ensure that all the paperwork or necessary work is done before the appointment.</p>
				<p>The reason for your next visit is: {this.props.info.Reason}.</p>
			</div>
		)
	}
}

export default FutureAppointment
