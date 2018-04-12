import React, {
    Component
  } from 'react';
  // 库 框架
  class Child extends Component {
    constructor(props) {
      super(props)
      this.state = {
        arr:["a","b","c"]
      }
    }
    render() {
     return (
         <div style={{
           border:'1px solid red'
         }}>子组件{this.props.name}</div>
     )
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount周期");
    }
  }
  
  export default Child;