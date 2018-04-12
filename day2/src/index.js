import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/test/test.jsx';
import Lifecycle from './components/lifecycle/lifecycle.jsx';
import registerServiceWorker from './registerServiceWorker';




import { createStore } from 'redux'
import { Provider } from 'react-redux'
//仓库
let store = createStore((state = {
	num:1
}, action) => {
	switch(action.type) {
		case 'INCREMENT':
			state.num = state.num + 1
			return Object.assign({}, state, {name: action.skill});
		case 'DECREMENT':
			return state
		default:
			return state
	}
})

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Test name="abc" />
			<Lifecycle />
		</div>
	</Provider>, document.getElementById('root'));
registerServiceWorker();