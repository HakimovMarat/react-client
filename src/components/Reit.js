import React from "react"
import {
  connect
} from 'react-redux'
import styled from 'styled-components'

const Line = styled.div `
  color: azure;
  float: right;
  width: 265px;
  height: 68px;
`;
const H3 = styled.h3`
  color: white;
  margin: 2px;
  float: left;
  width: 99%;
  font-size: 18px;
`;
class Reit extends React.Component {
  render() {
    const { info } = this.props
    return ( 
      <Line >
        <img 
          src = { 'http://kshisa.ru/images/0/imdb.png' }
          alt = '' 
          style = {{ width: "24%"}}
        >  
        </img>
        <H3>{info[3] / 10}</H3>
      </Line >
    )
  }
}

const mapStateToProps = (state) => ({
  info: state.post.info
})
export default connect(mapStateToProps)(Reit)