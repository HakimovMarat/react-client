import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import {start, password} from '../actions/card'

const RAD = styled.input`
  margin: 2px 2px;
`;
const SPAN = styled.span`
  border: black;
  border-style: solid;
  background-color: #6254dc;
  margin: 2px;
  padding: 5px 4px 0 0;
  font-size: 10px;
`;
export const Pass = () => {
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")
    const [pass3, setPass3] = useState("")
    const [pass4, setPass4] = useState("")
    const [pass5, setPass5] = useState("")
    useSelector(state => state.post.user)
    const dispatch = useDispatch()
    let pass
    if (pass1 && pass2 && pass3 && pass4 && pass5) {
      pass = <button 
              onClick={() => dispatch(password(pass1 + pass2 + pass3 + pass4 + pass5))}
             >{pass1 + pass2 + pass3 + pass4 + pass5}</button>
    }
    else {
      pass = pass1 + pass2 + pass3 + pass4 + pass5
    }

    let vals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N']
    return (
        <div> ENTER PASSWORD OR <button
                                  onClick={() => dispatch(start(0))}
                                >
                                GO BACK</button>
        <hr></hr>
        {vals.map(val => (
          <SPAN>
          <RAD type="radio" 
             name="1"
             value={val}
             onClick={e => setPass1(e.target.value)}
              />{val}</SPAN> 
        ))}
        <hr></hr>
        {vals.map(val => (
          <SPAN>
          <RAD type="radio" 
             name="2"
             value={val}
             onClick={e => setPass2(e.target.value)}
              />{val}</SPAN> 
        ))}
        <hr></hr>
        {vals.map(val => (
          <SPAN>
          <RAD type="radio" 
             name="3"
             value={val}
             onClick={e => setPass3(e.target.value)}
              />{val}</SPAN> 
        ))}
        <hr></hr>
        {vals.map(val => (
          <SPAN>
          <RAD type="radio" 
             name="4"
             value={val}
             onClick={e => setPass4(e.target.value)}
              />{val}</SPAN> 
        ))}
        <hr></hr>
        {vals.map(val => (
          <SPAN>
          <RAD type="radio" 
             name="5"
             value={val}
             onClick={e => setPass5(e.target.value)}
              />{val}</SPAN> 
        ))}
        <hr></hr>
        {pass}
        </div>
    )
}

export default (Pass)