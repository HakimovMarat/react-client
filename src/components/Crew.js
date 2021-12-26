import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux'
import {newUser, getperson} from '../actions/card'

class Crew extends React.Component{
  imageClick = (code) => {
    this.props.getperson(code)
  }
  render(){
    const { crew } = this.props

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block", width: "30px", height: "30px",  right: "-53px", zIndex:"1"}}
          onClick={onClick}
          src={"http://kshisa.ru/images/0/rt.png"}
          alt="up"
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block", width: "30px", height: "30px", left: "-53px", zIndex:"1"}}
          onClick={onClick}
          src={"http://kshisa.ru/images/0/lt.png"}
          alt="dn"
        />
      );
    }
    var settings = {
      infinite: true,
      slidesToShow: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
        <div>
          <Slider {...settings}>
          {crew.map(poster => (
            <div id ="crew">
              <div style={{ height: "19%"}}>{poster[0]}</div>
              <input
                type = "image"
                className="image"
                src={'http://kshisa.ru/images/1/'+ poster[1] + 'p1.jpg'}
                alt= ''
                onClick={() => this.imageClick(poster[1])}
              />
              <div style={{ color: "black"} }>{poster[2]}</div>
            </div>
          ))}
          </Slider>
        </div>
      )
  }
}
const mapStateToProps = (state) => ({
  crew: state.post.crew,
  login: state.post.login,
  avat: state.post.avat,
  name: state.post.name,
  email: state.post.email
})
export default connect(mapStateToProps, {newUser, getperson})(Crew)