import React from "react";
import Slider from "react-slick";
import {getfilmdata} from '../actions/card'
import { connect } from 'react-redux'

class Find extends React.Component{
  imageClick = (n) => {
    this.props.getfilmdata(n, 0)
  }
  render(){
    const { find } = this.props
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
          alt="down"
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
          {find.map(poster => (
            <div id ="crew">
              <div style={{ color: "black"} }>{poster[3]}</div>
              <img
                className="image"
                src={'http://kshisa.ru/images/mini/' + poster[1] + 'm0.jpg'}
                alt= ''
                onClick={() => this.imageClick(poster[0])}
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
  find: state.post.find
})
export default connect(mapStateToProps, { getfilmdata })(Find)