import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Head from './Head';
import Reit from './Reit'
import Clock from './Clock'
import Crew from './Crew'
import Find from './Find'
import Pass from './Pass'
import Avat from './Avat';
import {start, updateplacard, ava, name, email, putUserLove} from '../actions/card'

const H3 = styled.h3`
  color: white;
  margin: 7px;
  font-size: 16px;
`;
const H4 = styled.h4`
  color: black;
  width: 100%;
  font-size: 13px;
`;
const LOGON = styled.div`
  top: 70px;
  position: relative;
  font-size: 25px;
`;
const LOGIN = styled.div`
  top: 23px;
  position: relative;
  font-size: 15px;
`;
const SCRN = styled.div`
  background: url(http://kshisa.ru/images/0/TV02.png) no-repeat;
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
  margin: 15px 0 10px 2px;
  overflow: hidden;
  height: 240px;
`;
const MIDL = styled.div`
  width: 100%;
  height: 140px;
`;
const PANL = styled.div`
  width: 100%;
  height: 72px;
  margin-left: 14px;
  padding-left: 28px;
`;
const POLR = styled.div`
  position: relative;
  width: 100%;
  color: black;
  font-size: 12px;
  margin-top: 4px;
  background: url(http://kshisa.ru/images/0/board.png) no-repeat;
  height: 270px;
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
  cursor: pointer;
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
  imageClick = (code, user) => {
    this.props.putUserLove(code, user)
  }
	render () {
    const { base }    = this.props
    const { code }    = this.props
    const { info }    = this.props
    const { butsc }   = this.props
    const { butsg }   = this.props
    const { placard } = this.props
    const { login }   = this.props
    const { love }    = this.props
    const { usernum } = this.props
    const { year1 }   = this.props
    const { year2 }   = this.props
    const { name1 }   = this.props
    let butsl, butsr, butsm, pics, post, midl, polr
    if (this.state.ButNumbl === 0) { butsl = butsc }     else { butsl = butsg }
    if (this.state.ButNumbr === 0) { butsr = <Reit /> } else { butsr = <Clock /> }
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
      if (name1) {
        if (year1 && year1 > 0) {
          if (year2 && year2 > 0) {
            pics =  <div>
                    <div>
                      {name1}
                      <div>
                        {year1} --- {year2}
                      </div>
                    </div>
                    <div>
                      {year2 - year1} 
                    </div>
                    </div>          
          }
          else {
            pics =  <div>
                    <div>
                      {name1}
                      <div>
                        {year1}
                      </div>
                    </div>
                    <div>
                      {2021 - year1} 
                    </div>
                    </div>
          }
        }
        else {
          pics =  <div>
                    {name1}
                  </div>
        }
      }
      else {
        pics =  this.state.items.map((item, index) => {
			            return <IMG type="image"
                  onClick = {() => this.showPik(1, item)}
                  src={'http://kshisa.ru/images/' + info[8] + '/' + info[0] +  'm' + item + '.jpg'}
                  alt={index} />
                  })
        pics =  <div>{pics}<input type="image" 
                  src = {love}
                  onClick={() => this.imageClick(info[0], usernum)}
                  alt = '' >
                  </input>
                </div>
      }  
    }
    else if (this.state.showPik === 1) {
      pics =  <KAD type = "image"
                onClick = {() => this.showPik(0)} 
                src={'http://kshisa.ru/images/' + info[8] + '/' + info[0] +  'k' + this.state.item + '.jpg'}
              />
    }
    if (login === 0) {
      post =  <SCRN>
                <LOGIN>
                  <Pass />
                </LOGIN>
              </SCRN>
    } 
    else if (login === 1) {
      this.props.ava()
      post =  <SCRN>
                <LOGON>
                  <div>{this.state.Mail}</div>
                  <div><H4>1. Type your Name</H4></div>
                  <input type="text"
                              onChange={e => this.props.name(e.target.value)}
                              style={{width: "220px"}}
                  >
                  </input>
                  <div><H4>2. Type your E-mail</H4></div>
                  <input type="text"
                              onChange={e => this.props.email(e.target.value)}
                              style={{width: "220px"}}
                  >
                  </input>
                  <div><H4></H4></div>
                  <div><H4>OR <button
                          onClick={() => { this.props.start(0) }}
                        >
                        GO BACK</button>
                  </H4></div>
                </LOGON>
              </SCRN>
      midl =  <MIDL><H3></H3></MIDL>
      polr =  <POLR>
                <INNER>
                  <div><Avat/></div>
                </INNER>
              </POLR>
    }
    else if (login === 2) {
      post =  <div>
                <SCRN>
			            <POST
                    src={'http://kshisa.ru/images/' + base + '/' + code + 'p2.jpg'}
                    alt=''
                  />
			            <FOTO>
                    { pics }
                  </FOTO>  
                  <H3>{ info[2] }</H3>
			          </SCRN>
                <button
                  >{ info[4] }
                </button>
              </div>
      midl =  <MIDL>
                <Head/>
                <BUTT
                  src={'http://kshisa.ru/images/0/butsc.png'}
                  alt=''
                  onClick={() => this.buttClickc()}
                />
                <BUTT
                  src={'http://kshisa.ru/images/0/butsg.png'}
                  alt=''
                  onClick={() => this.buttClickg()}
                />
                <BUTT
                  src={'http://kshisa.ru/images/0/crew.png'}
                  alt=''
                  onClick={() => this.buttClicke()}
                />

                <BUTT
                  src={'http://kshisa.ru/images/0/rew.png'}
                  alt=''
                  onClick={() => this.buttClickw()}
                />
                <BUTT
                  src={'http://kshisa.ru/images/0/butsr.png'}
                  alt=''
                  onClick={() => this.buttClickr()}
                />
                <BUTT
                  src={'http://kshisa.ru/images/0/butsd.png'}
                  alt=''
                  onClick={() => this.buttClickd()}
                />
                <PANL>
                  {butsl.map(but => (
                  <BILL
                    src={'http://kshisa.ru/images/2/'+ but +'.png'}
                    alt=''
                  />
                  ))}
                  {butsr}
                </PANL>
            </MIDL>
      polr =  <POLR>
                <INNER>
                  {butsm}
                </INNER>
              </POLR> 
    }
    else if (login === 3) {
      post =  <div>
                <SCRN>
                  <POST
                    src={'http://kshisa.ru/images/' + base + '/' + code + 'p2.jpg'}
                    alt=''
                  />
                  <FOTO>
                    { pics }
                  </FOTO>  
                </SCRN>
              </div>
      midl =  <MIDL><H3></H3></MIDL>
      polr =  <POLR>
                <INNER>
                 {butsm}
                </INNER>
              </POLR>
    }
		return (
		  <div>
        {post}
        {midl}
        {polr}
   	  </div>
		)
	}
}
const mapStateToProps = (state) => ({
  base:    state.post.base,
  code:    state.post.code,
  info:    state.post.info,
  butsc:   state.post.butsc,
  butsg:   state.post.butsg,
  placard: state.post.placard,
  login:   state.post.login,
  User:    state.post.User,
  love:    state.post.love,
  usernum: state.post.usernum,
  year1:   state.post.year1,
  year2:   state.post.year2,
  name1:   state.post.name1
})
export default connect(mapStateToProps, {start, updateplacard, ava, name, email, putUserLove})(Card)