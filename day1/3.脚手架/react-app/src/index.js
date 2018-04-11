import React from 'react';
import ReactDOM from 'react-dom';
import 'weui';
import './index.css';
//import App from './App';
import Header from './components/header/header';
import Search from './components/search/search';
import Turing from './components/turing/turing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Header name={['a','b','c']} />
		<Header name="详情页" />
		<Search />
		<Turing />
	</div>, document.getElementById('root'));
registerServiceWorker();
