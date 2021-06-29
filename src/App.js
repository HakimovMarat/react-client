import React, { Component } from 'react';
import Left from './components/Left';
import Rigt from './components/Rigt';
import Card from './components/Card';
import './App.css';
import { Provider } from 'react-redux'
import styled from 'styled-components';
import store from './store'

const MAIN = styled.div`
    width: 960px;
    margin-left: auto;
    margin-right: auto;
`;
const LEFT = styled.div`
    width: 16%;
    height: 1320px;
    float: left;
    border-right: 2px;
    margin-bottom: -15px;
    text-align: center;
`;
const CENT = styled.div`
    text-align: center;
    color: #675353;
    font-weight: 600;
    font-style: oblique;
    top: 210px;
    left: 10%;
    width: 60%;
    height: 1320px;
    float: left;
    padding: 0 6px 0 6px;
`;
class App extends Component {
render() {
  return (
      <Provider store={store}>
          <MAIN>
            <LEFT>
              <Left />
            </LEFT>
            <CENT>
              <Card />
            </CENT>
            <LEFT>
              <Rigt />
            </LEFT>
          </MAIN>
      </Provider>
    );
  }
}

export default App;
