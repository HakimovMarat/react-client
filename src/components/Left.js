import React from "react";
import styled from 'styled-components'
import Slider from "react-slick";
import { getposters, getfilmdata, updatecount, getnext, getlast, logon} from '../actions/card'
import { connect } from 'react-redux'

const CHK = styled.img`
  left: 103px;
  position: absolute;
  width: 50px;
`;

class Left extends React.Component {
  constructor(props) {
    super()
    this.state = {checkIt: 1}
    this.imageClick = this.imageClick.bind(this);
  }
  next = () => {
    if (this.props.count === 2) {
      this.props.getnext(this.props.trigger, this.props.posters, this.props.numbs, 0)
      this.props.updatecount(this.props.count + 1)
    } 
    else if (this.props.count === 5) {
      this.props.updatecount(1)
    }
    else {
      this.props.updatecount(this.props.count + 1)
    }
  }
  last = () => {
    if (this.props.count === 3) {
      this.props.getlast(this.props.trigger, this.props.posters, this.props.numbs, 0)
      this.props.updatecount(this.props.count - 1)
    }
    else if (this.props.count === 1) {
      this.props.updatecount(5)
    }
    else {
      this.props.updatecount(this.props.count - 1)
    }
  }
  imageClick = (n, code) => {
    this.props.getfilmdata(code)
    this.setState(state => ({
      checkIt: n
    }))
  }
  render() {
    const { post } = this.props
    const { numbs } = this.props
    let course = 0
    let check = <CHK 
      src={"http://kshisa.ru/images/0/check.png"}  
    />
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block", width: "30px", height: "30px", right: "-5px", zIndex:"1"}}
          onClick={onClick}
          src={"http://kshisa.ru/images/0/up.png"}
          alt="up"
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block", width: "30px", height: "30px", left: "-5px", zIndex:"1"}}
          onClick={onClick}
          src={"http://kshisa.ru/images/0/dn.png"}
          alt="dn"
        />
      );
    }
    var settings = {
      infinite: true,
      slidesToShow: 4,
      vertical: true,
      beforeChange: (current, next) => {
		    if (next === 0 && current === 14)  { next = 15 }
		    if (next === 14 && current === 0)  { current = 15 }
        course = next - current
	    },
      afterChange: () => {
        if (course === 1) {
          this.next()
        }
		    if (course === -1) {
          this.last()
		    }
	    },
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{
            width: "170px"
          }}>
        <Slider {...settings}>
        {post.map(poster => (
          <div id ="posters">
           {this.state.checkIt === poster[0] ? check : ""}
            <input 
              type="hidden" 
              name={'id' + poster[0]} 
              value={poster[0]}
            />
            <img
              className="image"
              src={'http://kshisa.ru/images/' + poster[2] + '/' + poster[1] +  poster[3]}
              alt= ''
              onClick={() => this.imageClick(poster[0], poster[1])}
            />
            
          </div>
        ))}
        </Slider>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  numbs:   state.post.numbs,
  post:    state.post.post,
  count:   state.post.count,
  trigger: state.post.trigger
})
export default connect(mapStateToProps, { getposters, getfilmdata, updatecount, getnext, getlast, logon })(Left)
