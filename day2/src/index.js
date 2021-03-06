import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/test/test.jsx';
import Lifecycle from './components/lifecycle/lifecycle.jsx';
import registerServiceWorker from './registerServiceWorker';
import Child from './components/child/child.jsx';
import Brother from './components/brother/brother.jsx';



import { createStore } from 'redux'
import { Provider } from 'react-redux'
//仓库
let store = createStore((state = {
	num:1,
	skill:"ps"
}, action) => {
	switch(action.type) {
		case 'ABC':
			return Object.assign({}, state, {num: action.num});
		case 'DECREMENT':
			return state
		default:
			return state
	}
})

ReactDOM.render(
	<Provider store={store}>
		<div>
			{/*<Test name="abc" />
			<Lifecycle />*/}
			<Brother />
			<Child />
		</div>
	</Provider>, document.getElementById('root'));
registerServiceWorker();