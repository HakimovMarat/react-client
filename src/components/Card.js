import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

const H1 = styled.h1`
		color: red;
		font-size: 16px;
		`;
class Card extends Component {
	render () {
		const { info } = this.props
        
		return (
		  <div>
            <H1>{ info[0] }</H1>
			<h1>{ info[1] }</h1>
		  </div>
		)
	}
}
const mapStateToProps = (state) => ({
	info: state.post.info
})
export default connect(mapStateToProps)(Card)