import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import PatientProfile from './Components/PatientProfile'
import AppointmentContainer from './Containers/AppointmentContainer'
// import {getPatientInfo} from './ApiCalls/ApiFunctions'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      //real patient - PatientProfileContainer would use this in a real app but because no population,
      // we will use fake patient to pass down into container
      patient: null,
      //fake patient
      fakePatient: {
        name: 'PK',
        ID: 12323,
        physicianName: 'Dr. FeelGood, M.D.',
        picture: null, // would need to pull picture from database
        age: '21',
        weight: '160 lbs',
        
      }
    }
  }

  componentDidMount(){
    //function to get patient information from API and populate it into the state of App to pass down the data to necessary components

    // getPatientInfo()
    // .then(res => this.setState({
    //   patient: res
    // }))
  }

  render(){
    return (
      <div>
        <Navbar />
        <PatientProfile patient={this.state.fakePatient}/>
        <AppointmentContainer patientID={this.state.fakePatient.ID}/>
      </div>
    );
  }  
}

export default App;
