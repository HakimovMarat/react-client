import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux'

class Crew extends React.Component{
  render(){
    const { crew } = this.props
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
          {crew.map(poster => (
            <div id ="crew">
              <div style={{ color: "black"} }>{poster[0]}</div>
              <img
                className="image"
                src={'http://kshisa.ru/images/crew/' + poster[1] + '.jpg'}
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
  crew: state.post.crew
})
export default connect(mapStateToProps)(Crew)