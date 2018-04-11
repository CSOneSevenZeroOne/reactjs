import React, {
	Component
} from 'react';

class Search extends Component {
	//M
	constructor(props){
		super(props);
		this.state = {
			bool : false,
			value: ""
		}
	}
	showInput(){
		this.setState({
			bool: !this.state.bool,
		})
	}
	hideInput(){
		console.log(this.state.bool)
		this.setState({
			bool: !this.state.bool,
		})
	}
	getInputValue(e){
		console.log(e.target.value)
	}
	//V
	render() {
		return(
			<div className={((bool)=>{
				if(bool){
					return 'weui-search-bar weui-search-bar_focusing' 
				}else{
					return 'weui-search-bar' 
				}
			})(this.state.bool)} id="searchBar">
	            <form className="weui-search-bar__form">
	                <div className="weui-search-bar__box">
	                    <i className="weui-icon-search"></i>
	                    <input onChange={this.getInputValue.bind(this)} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
	                   	<a onClick={this.hideInput.bind(this)} href="javascript:" className="weui-icon-clear" id="searchClear"></a>
	                </div>
	                <label onClick={this.showInput.bind(this)} className="weui-search-bar__label" id="searchText">
	                    <i className="weui-icon-search"></i>
	                    <span>搜索</span>
	                </label>
	            </form>
	            <a href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
	        	{this.state.value}
	        </div>
		)
	}
}

export default Search;