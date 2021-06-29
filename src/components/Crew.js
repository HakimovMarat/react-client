import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux'
import {newUser} from '../actions/card'

class Crew extends React.Component{
  render(){
    let row, path
    const { crew } = this.props
    const { login } = this.props
    const { avat } = this.props

    if (login === 0) {
      row = crew
      path = 'images/'
    }
    else if (login === 2) {
      row = avat
      path = 'avat/'
    }
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block", width: "30px", height: "30px",  right: "-53px", zIndex:"1"}}
          onClick={onClick}
          src={"http://kshisa.ru/images/butt/rt.png"}
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
          src={"http://kshisa.ru/images/butt/lt.png"}
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
          {row.map(poster => (
            <div id ="crew">
              <div style={{ color: "black"}}>{poster[0]}</div>
              <input
                type = "image"
                className="image"
                src={'http://kshisa.ru/images/'+ path + poster[1] + '.jpg'}
                alt= ''
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
export default connect(mapStateToProps, {newUser})(Crew)