import {render} from './index'

function createStore(reducer){
	let state;

	function dispatch(action){
		state = reducer(state, action)
		console.log(`the state is ${state.count}`);
    console.log(`the action is ${action.type}`);
    render()
	}

	function getState(){
		return state
	}

	return {
		getState, 
		dispatch
	}
}

export default createStore