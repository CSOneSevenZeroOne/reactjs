import React, {
	Component
} from 'react';
import './header.css';

class Header extends Component {
	//M
	constructor(props) {
		super(props);
		this.state = {
			//title : "今日头条"
		}
		//this.props.name = this.props.name || '默认值';
	}
	//V
	render() {
		return(
			<header>
				{this.props.name}
			</header>
		)
	}
}

export default Header;