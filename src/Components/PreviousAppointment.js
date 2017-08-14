import React from 'react'
import Modal from 'react-modal'

const customStyles = {
	  content : {
	    top                   : '50%',
	    left                  : '50%',
	    right                 : 'auto',
	    bottom                : 'auto',
	    marginRight           : '-50%',
	    transform             : 'translate(-50%, -50%)'
	  }
	};

class PreviousAppointment extends React.Component{
	constructor(){
		super()
		this.state = {
			modalIsOpen: false
		}

	}
	openModal() {
    this.setState({
    	modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
    	modalIsOpen: false
    });
  }

	render(){

		return(
			<div >
				<a className='previous-dates' onClick={this.openModal.bind(this)}>{this.props.info.CheckUp}</a>
				<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
        >
          <button className="btn btn-default" onClick={this.closeModal.bind(this)}>x</button>
          <p>The physician you saw was {this.props.info.Physician}.</p>
          <p>The reason for your visit was {this.props.info.Reason}.</p>
          <p>If this is incorrect or if you have any questions/concerns, please contact us. </p>
        </Modal>
			</div>
		)
	}
}

export default PreviousAppointment