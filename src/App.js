import React, { Component } from 'react';
import Box from './components/Box';

export default class App extends Component {
  
  constructor(props) {  // 생성자 : 컴포넌트가 실행되자 마자 호출이 되는 함수
    super(props)
    this.state = {
      counter: 0,
      num: 1,
      value: 0,
    }
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + this.state.num, 
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <div>
        <div>state: {this.state.counter}</div>
        <button onClick={this.increase}>클릭!</button>
        <Box num={this.state.value}/>
      </div>
    )
  }
}


/* 정리
constructor라는 생성자를 통해 컴포넌트 생성할 때 state도 같이 생성한다~!
state업데이트 : setState함수를 통해 값 변경
*/