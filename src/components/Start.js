import React, {  } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {start} from '../actions/card'
import Left from './Left'
import Rigt from './Rigt'
import Card from './Card'
import styled from 'styled-components'

const Well = styled.div `
  padding: 22px 0 33px;
  color: aliceblue;
  margin: auto;
`;
const Logo = styled.img `
  width: 25%;
`;
const Buts = styled.input `
  width: 42px;
  height: 42px;
  float: left;
  padding: 12.5px;
  z-index: 3;
`;
const MAIN = styled.div`
  width: 960px;
  margin-left: auto;
  margin-right: auto;
`;
const LEFT = styled.div`
  width: 17%;
  height: 1320px;
  float: left;
  border-right: 2px;
  margin-bottom: -15px;
  text-align: center;
`;
const CENT = styled.div`
  text-align: center;
  font-weight: 600;
  width: 60%;
  height: 1320px;
  float: left;
  padding: 0 13px 0 13px;
`;
export const Start = () => {
    const logon = useSelector(state => state.post.logon);
    const user = useSelector(state => state.post.user);
    const rank = useSelector(state => state.post.rank);
    const dispatch = useDispatch()
    let main
    if (logon === 1)  {
        main =  <MAIN>
                  <LEFT>
                    <div id ="posters1">
                    <img
                      className="image"
                      src = {'http://kshisa.ru/images/0/' + rank}
                      alt = ''
                      onClick = ''
                    />
                    </div>
                    <Left/>
                  </LEFT>
                    <CENT>
                      <Card/>
                    </CENT>
                  <LEFT>
                    <div id ="posters1">
                    <img
                      className="image"
                      src = {'http://kshisa.ru/images/0/' + user}
                      alt = ''
                    />
                    </div>
                    <Rigt/>
                  </LEFT>
                </MAIN>
    }
    else {
        main =  <MAIN>
                <LEFT></LEFT>
                <CENT>
                  <Well>WELCOME TO</Well>
                  <Logo src = 'http://kshisa.ru/images/0/gorisond.png' alt = "Logo" />
                  <div className  = "Avat1">
                  <div className  = "Puls1"></div> 
                  <div className  = "Puls2"></div> 
                  <div className  = "Icon" >
                    <Buts type    = "image" name = "avat"
                          src     = {'http://kshisa.ru/images/0/login.png'}
                          onClick ={() => dispatch(start(1, 0))}
                    /> 
                  </div>
                  </div>
                  <div className  = "Avat2">
                  <div className  = "Puls1"></div> 
                  <div className  = "Puls2"></div> 
                  <div className  = "Icon" >
                    <Buts type    = "image" name = "avat"
                          src     = {'http://kshisa.ru/images/0/join.png'}
                          onClick ={() => dispatch(start(1, 1))}
                    /> 
                  </div>
                  </div>
                </CENT>
                <LEFT></LEFT>
                </MAIN>
    }
    return (
      <div>
        {main}
      </div>
    )
}

export default (Start)