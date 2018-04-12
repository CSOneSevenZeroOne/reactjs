import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/test/test.jsx';
import Lifecycle from './components/lifecycle/lifecycle.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Test />
		<Lifecycle />
	</div>, document.getElementById('root'));
registerServiceWorker();
