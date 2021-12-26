import React from "react";
import Slider from "react-slick";
import {connect} from 'react-redux'
import {newUser} from '../actions/card'

class Avat extends React.Component{
  render(){
    const { avat  } = this.props
    const { name  } = this.props
    const { email } = this.props

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
          <h3>3. Choose Your Avatar</h3>
          <Slider {...settings}>
          {avat.map(poster => (
            <div id ="crew">
              <input
                type = "image"
                className="image"
                src={'http://kshisa.ru/images/avat/' + poster[1] + '.jpg'}
                alt= ''
                onClick = {() => this.props.newUser(name, email, poster[1])}
              />
            </div>
          ))}
          </Slider>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  avat:  state.post.avat,
  name:  state.post.name,
  email: state.post.email
})
export default connect(mapStateToProps, {newUser})(Avat)