import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

const Line = styled.div`
    background: url(http://kshisa.ru/images/bill/clock.png) no-repeat;
    color: azure;
    float: right;
    border: 1px solid azure;
    width: 28%;
    margin-right: 44px;
`;
const H4 = styled.h4`
  font-family: 'BebasNeueRegular', Arial, Helvetica, sans-serif;
  padding-left: 18px;
  color: azure;
  margin: 1px;
  float: left;
  width: 100%;
  font-weight: 100;
`;
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date0: new Date(),
                    date1: new Date()};
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      var d = new Date();
      var hours = (this.props.info[5]-this.props.info[5]%60)/60
      var min = this.props.info[5]%60
      d.setHours(d.getHours() + hours);
      d.setMinutes(d.getMinutes() + min);
      this.setState({
        date0: new Date(),
        date1: d
      });
    }
    render() {
      const { info } = this.props
      return (
        <Line>
          <H4>
          {this.state.date0.toLocaleTimeString()}
          </H4>
          <H4>
          {
             ( ( info[5]-info[5]%60 )/60 < 10  ? "0" : "" ) + ( info[5]-info[5]%60 )/60
            + ':'
            + ( info[5]%60 < 10 ? "0" : "" ) + info[5]%60
          }
          </H4>
          <H4>
          {this.state.date1.toLocaleTimeString()}
          </H4>
        </Line>
      )
    }
  }
  const mapStateToProps = (state) => ({
	info: state.post.info
  })
  export default connect(mapStateToProps)(Clock)