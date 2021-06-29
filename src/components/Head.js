import React, {useState} from "react";
import {useSelector} from "react-redux";
import styled from 'styled-components'
import {finded, logon} from '../actions/card'
import {connect} from 'react-redux'

const Addr = styled.input `
  background: url(http://kshisa.ru/images/bill/search.png) no-repeat 17px center/16px;
  padding: 7px 8px 7px 40px;
  font-size: 1.2em;
  float: left;
  margin-top: 6px;
  color: white;
  width: 60%;
`;
const Logo = styled.img `
  width: 161px;
  height: 51px;
  position: fixed;
  border: 4px double wheat;
  left: 224px;
  top: 8px;
}
`;
const Buts = styled.input `
  width: 45px;
  height: 45px;
  float: left;
  padding: 12.8px;
`;
const INP = styled.input.attrs({
  type: 'submit',
  value: ''
})` 
  float: left;
  margin-top: 6px;
  height: 42px;
  width: 43px;
  border: 1px solid white;
  padding: 2.2px;
  background-image: url(http://kshisa.ru/images/butt/search.png);
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Head = (props) => {
  const [name, setName] = useState("");
  const user = useSelector(state => state.post.user);
  const find = (e) => {
    e.preventDefault()
    props.finded(name)
  }
  const login = () => {
    props.logon(1)
  }
  return ( 
    <div className = "head">
      <Logo src = 'http://kshisa.ru/images/butt/logo.png' alt = "Logo" />
      <div class = "Avat">
        <div class = "Puls1"></div> 
        <div class = "Puls2"></div> 
        <div class = "Icon" >
          <Buts type = "image" name = "avat"
                onClick = {login} 
                src = {'http://kshisa.ru/images/avat/' + user + '.png'}
          /> 
        </div>
      </div>
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