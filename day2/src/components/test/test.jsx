import React, {
  Component
} from 'react';
// 库 框架
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr:["a","b","c"]
    }
  }
  vFor(arr){
    return arr.map((e,i)=>{
      return <li key={i}>{e}</li>
    })
  }
  render() {
    // return (
    //   <div className="App" >
    //     <ul>
    //       {this.vFor(this.state.arr)}
    //     </ul>
    //   </div>
    // );
    // 虚拟DOM   内存
    // var el = {
    //   el:div,
    //   props:{
    //     className:"App"
    //   }
    // }
    return React.createElement('h1', {className:'App'}, React.createElement('ul', null, this.vFor(this.state.arr)));
  }
}

export default Test;