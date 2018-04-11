import React, {
	Component
} from 'react';

class Search extends Component {
	//M
	constructor(props){
		super(props);
		this.state = {
			answer:""
		}
	}
	getAsk(e){
		console.log(e.target.value)
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = ()=>{
			if(xmlhttp.readyState==4&&xmlhttp.status==200){
				console.log(xmlhttp.responseText)
				this.setState({
					answer:JSON.parse(xmlhttp.responseText)
				})
			}
		}
		xmlhttp.open("GET",`http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info=${e.target.value}`,true);
		xmlhttp.send()
	}
	render() {
		return(
			<div>
				<input onChange={this.getAsk.bind(this)} />
				<p>{this.state.answer?this.state.answer.text:"请发问..."}</p>
	        </div>
		)
	}
}

export default Search;