import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Reitg from './Reitg'
import Clock from './Clock'
import Crew from './Crew'
import Find from './Find'
import Pass from './Pass'
import Head from './Head';
import Avat from './Avat';
import {updateplacard, logon, password, newUser, ava, name, email} from '../actions/card'

const H3 = styled.h3`
  color: white;
  margin: -1px;
  float: left;
  width: 100%;
  font-size: 16px;
`;
const H4 = styled.h4`
  color: #19b5c4;
  margin: -1px;
  float: left;
  width: 100%;
  font-size: 13px;
`;
const LOGON = styled.div`
  color: white;
  top: 95px;
  position: relative;
  font-size: 25px;
`;
const LOGIN = styled.div`
  color: white;
  top: 23px;
  position: relative;
  font-size: 15px;
`;
const SCRN = styled.div`
  background: url(http://kshisa.ru/images/butt/TV01.png) no-repeat;
  background-size: contain;
  height: 300px;
  margin-left: 14px;
`;
const POST = styled.img`
  float: left;
  width: 170px;
  margin-left: 17px;
  margin-top: 15px;
`;
const FOTO = styled.div`
  float: left;
  width: 360px;
  margin-top: 15px;
  margin-left: -1px;
`;
const MIDL = styled.div`
  width: 100%;
  height: 96px;
`;
const PANL = styled.div`
  width: 100%;
  height: 75px;
`;
const POLR = styled.div`
  position: relative;
  width: 90%;
  margin-left: 38px;
  color: black;
  font-size: 12px;
  margin-top: 4px;
  background: url(http://kshisa.ru/images/butt/board.png) no-repeat;
  height: 245px;
  background-size: cover;
`;
const INNER = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  top: 27px;
`;
const IMG = styled.input`
  width: 170px;
  margin-left: 10px;
`;
const KAD = styled.input`
  width: 350px;
  height: 238px;
  margin-left: 10px;
`;
const BILL = styled.img`
  width: 58px;
  margin-left: 4px;
  margin-top: 7px;
  margin-bottom: 4px;
  float: left;
`;
const BUTT = styled.img`
  margin-left: 10px;
`;
class Card extends Component {
  constructor(props) {
    super()
    this.state = {ButNumbl: 0, ButNumbd: 0, items: [1, 2, 3, 4], showPik: 0, item: 1, Name: '', Mail: ''}
    this.buttClickc = this.buttClickc.bind(this);
    this.buttClickg = this.buttClickg.bind(this);
    this.buttClickr = this.buttClickr.bind(this);
    this.buttClickd = this.buttClickd.bind(this);
    this.showPik = this.showPik.bind(this);
  }
  buttClickc = () => { this.setState(() => ({ ButNumbl: 0 })) }
  buttClickg = () => { this.setState(() => ({ ButNumbl: 1 })) }
  buttClicke = () => { this.props.updateplacard(0) }
  buttClickw = () => { this.props.updateplacard(1) } 
  buttClickr = () => { this.setState(() => ({ ButNumbr: 0 })) }
  buttClickd = () => { this.setState(() => ({ ButNumbr: 1 })) }
  showPik = (pic, item) => { this.setState(() => ({
      showPik: pic,
      item: item
    })) 
  }
  setName = (e) => {
    this.setState(state => ({
      Name: e
    }))   
  }
  setMail = (e) => {
    this.setState(state => ({
      Mail: e
    }))   
  }
	render () {
    const { info }  = this.props
    const { butsc } = this.props
    const { butsg } = this.props
    const { placard } = this.props
    const { login } = this.props
    const { User } = this.props
    let butsl, butsr, butsm, pics, post, midl
    if (this.state.ButNumbl === 0) { butsl = butsc }     else { butsl = butsg }
    if (this.state.ButNumbr === 0) { butsr = <Reitg /> } else { butsr = <Clock /> }
    if (placard === 0) { 
      butsm = <Crew />  
    } 
    else if (placard === 1) {
      butsm = info[7]
    }
    else if (placard === 2) {
      butsm = ''
    }
    else if (placard === 3) {
      butsm = <Find /> 
    }
    if (this.state.showPik === 0) {
      pics = this.state.items.map((item, index) => {
			        return <IMG type = "image"
                  onClick = {() => this.showPik(1, item)}
                  src={'http://kshisa.ru/images/images/' + info[0] +  'm' + item + '.jpg'}
                  alt={index} />
                  })
    }
    else if (this.state.showPik === 1) {
      pics = <KAD type = "image"
              onClick = {() => this.showPik(0)} 
              src={'http://kshisa.ru/images/images/' + info[0] +  'k' + this.state.item + '.jpg'}
             />
    }
    if (login === 1) {
      post = <SCRN><LOGON>
              <div>Are You A New User?</div>
              <input type="radio"
                onClick={() => this.props.ava()}
              >
              </input>Yes&nbsp;&nbsp;
              <input type="radio"
                onClick={() => this.props.logon(3)}
              >
              </input>No
            </LOGON></SCRN>
            midl= <MIDL><H3>{User}</H3></MIDL>
    }
    else if (login === 2) {
      post = <SCRN><LOGON>
        <div>{this.state.Mail}</div>
        <div>Enter your Name</div>
          <input type="text"
            onChange={e => this.props.name(e.target.value)}
          ></input>
          <div>And E-mail</div>
          <input type="text"
            onChange={e => this.props.email(e.target.value)}
          ></input>
        </LOGON></SCRN>
      midl= <MIDL><H3>Choose Your Avatar</H3></MIDL>   
      butsm = <div><Avat/></div>
    }
    else if (login === 3) {
      post = <SCRN><LOGIN><Pass /></LOGIN></SCRN>
      midl= <MIDL></MIDL>
    } 
    else if (login === 0) {
      post = <SCRN>
			        <POST
                src={'http://kshisa.ru/images/images/' + info[0] +  'p2.jpg'}
                alt=''
              />
			        <FOTO>
                {pics}
                <H3>{ info[2] + '  ('+info[4] + ')' }</H3>
                <H4>{ info[1] }</H4>
              </FOTO>
			      </SCRN>
      midl = <MIDL>
              <PANL>
                {butsl.map(but => (
                <BILL
                  src={'http://kshisa.ru/images/bill/'+ but +'.png'}
                  alt=''
                />
                ))}
                {butsr}
              </PANL>
       <BUTT
         src={'http://kshisa.ru/images/bill/butsc.png'}
         alt=''
         onClick={() => this.buttClickc()}
       />
       <BUTT
         src={'http://kshisa.ru/images/bill/butsg.png'}
         alt=''
         onClick={() => this.buttClickg()}
       />
       <BUTT
         src={'http://kshisa.ru/images/butt/crew.png'}
         alt=''
         onClick={() => this.buttClicke()}
       />
       <BUTT
         src={'http://kshisa.ru/images/butt/rew.png'}
         alt=''
         onClick={() => this.buttClickw()}
       />
       <BUTT
         src={'http://kshisa.ru/images/bill/butsr.png'}
         alt=''
         onClick={() => this.buttClickr()}
       />
       <BUTT
         src={'http://kshisa.ru/images/bill/butsd.png'}
         alt=''
         onClick={() => this.buttClickd()}
       />
     </MIDL>
    }
		return (
		  <div>
        {post}
        <Head/>
        {midl}
        <POLR>
          <INNER>
            {butsm}
          </INNER>
        </POLR>      
   	 </div>
		)
	}
}
const mapStateToProps = (state) => ({
  info: state.post.info,
  butsc: state.post.butsc,
  butsg: state.post.butsg,
  placard: state.post.placard,
  login: state.post.login,
  User: state.post.User
})
export default connect(mapStateToProps, {updateplacard, logon, password, newUser, ava, name, email})(Card)