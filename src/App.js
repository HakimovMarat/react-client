import React, { Component } from 'react'
import Start from './components/Start'
import './App.css';
import { Provider } from 'react-redux'
import styled from 'styled-components'
import store from './store'

const BACK1 = styled.div`
  background: url(http://kshisa.ru/images/0/morning.png) no-repeat;
  background-size: 100%;
  height: 1000px;
`;
const BACK2 = styled.div`
  background: url(http://kshisa.ru/images/0/day.png) no-repeat;
  background-size: 100%;
  height: 1000px;
`;
const BACK3 = styled.div`
  background: url(http://kshisa.ru/images/0/night.png) no-repeat;
  background-size: 100% 75%;
  height: 1000px;
`;
const BUTT = styled.img`
  margin-left: 7px;
  float: left;
  width: 49px;
  cursor: pointer;
`;
class App extends Component {
  constructor() {
    super()
    this.state = {click: 3}
    this.buttClick1 = this.buttClick1.bind(this);
    this.buttClick2 = this.buttClick2.bind(this);
    this.buttClick3 = this.buttClick3.bind(this);
  }
  buttClick1 = () => { this.setState(() => ({ click: 1 })) } 
  buttClick2 = () => { this.setState(() => ({ click: 2 })) }
  buttClick3 = () => { this.setState(() => ({ click: 3 })) }

render() {
  let back
  let mini = <div className = "head">
                  <BUTT
                    src={'http://kshisa.ru/images/0/sm-gorisond-morning.png'}
                    alt=''
                    onClick={() => this.buttClick1()}
                  />      
                  <BUTT
                    src={'http://kshisa.ru/images/0/sm-gorisond-day.png'}
                    alt=''
                    onClick={() => this.buttClick2()}
                  />
                  <BUTT
                    src={'http://kshisa.ru/images/0/sm-gorisond-night.png'}
                    alt=''
                    onClick={() => this.buttClick3()}
                  /></div>
  if (this.state.click === 1) {
    back = <BACK1>{mini}<Start/></BACK1>
  }
  else if (this.state.click === 2) {
    back = <BACK2>{mini}<Start/></BACK2>
  }
  else if (this.state.click === 3) {
    back = <BACK3>{mini}<Start/></BACK3>
  }
  return (
    <Provider store={store}>
      {back}
    </Provider>
    );
  }
}

export default App;
