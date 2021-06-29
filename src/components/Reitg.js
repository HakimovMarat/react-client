import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const Line = styled.div`
  color: azure;
  float: right;
  width: 265px;
  height: 68px;
`;
class Reitg extends React.Component {
  render() {
    const { info } = this.props
    return (
      <Line>
        <StarRatingComponent 
         name="rate" 
         className={"Rating"}
         starCount={10}
         value={info[3]}
         starColor={'#3b00ff'}
         emptyStarColor={'#34ada4'}
        />
      <img 
        src = {'http://imdb.snick.ru/ratefor/01/' + info[9] + '.png'}
        alt = ''
        >
      </img>
      </Line>
    )
  }    
}

const mapStateToProps = (state) => ({
	info: state.post.info
  })
export default connect(mapStateToProps)(Reitg)