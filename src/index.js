import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
// 	<App />, document.getElementById('root')
// );

//Attempting to implement Redux

import createStore from './createStore'
import fetchPatientInfo from './Reducers/patientPortal.js'

const store = createStore(fetchPatientInfo)


export function render(){
	ReactDOM.render(
		<App store={store}/>, 
		document.getElementById('root')
	);
}

store.dispatch({type:'@@INIT'})
