import React, { useState } from "react";
import styled from 'styled-components'
import {finded} from '../actions/card'
import { connect } from 'react-redux'

const Addr = styled.input`
  background: url(http://kshisa.ru/images/bill/search.png) no-repeat 17px center/16px;
  padding: 7px 8px 7px 40px;
  font-size: 1.7em;
  float: left;
  margin-top: 6px;
  margin-left: 3px;
  color: white;
  width: 299px;
`;
const Logo = styled.img`
  width: 140px;
  float: left;
  margin-top: 6px;
  margin-left: 17px;
  height: 42px;
  border: 4px double wheat
}
`;
const Avat = styled.div`
  margin: 2px 90px;
  float: right;
  position: absolute;
`;
const Puls1 = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  margin: auto;
  z-index: 1;
  opacity: 0;
  border: 3px solid rgba(255,255,255,.1);
  -webkit-animation: pulsejg1 4s linear infinite;
  -moz-animation: pulsejg1 4s linear infinite;
  animation: pulsejg1 4s linear infinite;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);
  -moz-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
const Puls2 = styled.div`
position: absolute;
  width: 70px;
  height: 70px;
  margin: auto;
  z-index: 2;
  opacity: 0;
  border: 1px solid rgba(255,255,255,0);
  -webkit-animation: pulsejg2 4s linear infinite;
  -moz-animation: pulsejg2 4s linear infinite;
  animation: pulsejg2 4s linear infinite;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);
  -moz-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);
  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
const Icon = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background: url(http://icon-icons.com/icons2/72/279581_msg2.png) no-repeat;
  background-size: 180px 180px;
  margin: auto;
  z-index: 3;
  -webkit-box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);
  -moz-box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);
  box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
`;
const Buts = styled.input`
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
  margin-left: 4px;
  height: 49px;
  width: 47px;
  border: 1px solid white;
  padding: 2.2px;
  background-image: url(http://kshisa.ru/images/butt/search.png);
`;

const Head = (props) => {
  const [name, setName] = useState("");
  const find = (e) => {
    e.preventDefault()
    props.finded(name)
  }
	return (
	  <div className="head">
	    <Logo
		    src='http://kshisa.ru/images/butt/logo.png'
		    alt="Logo"
	    />
      <form onSubmit={find}>
	      <Addr
          type="input"
          value={name}
          onChange={e => setName(e.target.value)}
        >
        </Addr>
        <INP></INP>
      </form>
      <Avat>
        <Puls1></Puls1>
        <Puls2></Puls2>
        <Icon>
            <Buts
              type="image"
              name="avat"
              src="http://kshisa.ru/images/butt/ava000.png">
            </Buts>
        </Icon>
      </Avat>
    </div>
	)
}
const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps, {finded})(Head)
