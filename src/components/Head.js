import React, {useState} from "react";
import styled from 'styled-components'
import {finded, logon} from '../actions/card'
import {connect} from 'react-redux'

const Addr = styled.input `
  background: url(http://kshisa.ru/images/0/gorisond.png) no-repeat 1px center/111px;
  padding: 7px 8px 7px 117px;
  font-size: 1em;
  float: left;
  margin: 5px 5px 5px 16px;
  color: white;
  width: 67%;;
`;
const INP = styled.input.attrs({
  type: 'submit',
  value: ''
})` 
  float: left;
  margin-top: 5px;
  height: 36px;
  width: 36px;
  border: 1px solid white;
  padding: 2.2px;
  background-image: url(http://kshisa.ru/images/0/sch.png);
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const Head = (props) => {
  const [name, setName] = useState("");
  const find = (e) => {
    e.preventDefault()
    props.finded(name)
  }
  return ( 
    <div>
      <form onSubmit = {find}>
        <Addr type = "input" value = {name}
              onChange = {e => setName(e.target.value)}
        >
        </Addr> 
        <INP></INP>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, {finded, logon})(Head)