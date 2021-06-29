import React from "react";
import Slider from "react-slick";
import {getposters, getfilmdata, updatecountr, getnextr, getlastr} from '../actions/card'
import { connect } from 'react-redux'

class Rigt extends React.Component {
  componentDidMount(){
    this.props.getposters()
    this.props.getfilmdata()
  }
  next = () => {
    if (this.props.countr === 2) {
      this.props.getnextr(this.props.triggerr, this.props.animate, this.props.numba, 4)
      this.props.updatecountr(this.props.countr + 1)
    }
    else if (this.props.countr === 5) {
      this.props.updatecountr(1)
    }
    else {
      this.props.updatecountr(this.props.countr + 1)
    }
  }
  last = () => {
    if (this.props.countr === 3) {
      this.props.getlastr(this.props.triggerr, this.props.animate, this.props.numba, 4)
      this.props.updatecountr(this.props.countr - 1)
    }
    else if (this.props.countr === 1) {
      this.props.updatecountr(5)
    }
    else {
      this.props.updatecountr(this.props.countr - 1)
    }
  }
  imageClick = (n) => {
    this.props.getfilmdata(n, 4)
  }
  render() {
    const { animate } = this.props
    const { numba } = this.props

    let course = 0
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          className={className}
          style={{ ...style, display: "block", width: "30px", height: "30px", right: "-5px", zIndex:"1"}}
          onClick={onClick}
          src={"http://kshisa.ru/images/butt/up.png"}
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
          src={"http://kshisa.ru/images/butt/dn.png"}
          alt="dn"
        />
      );
    }
    var settings = {
      infinite: true,
      slidesToShow: 5,
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
        {animate.map(poster => (
          <div id ="posters">
            <input 
              type="hidden" 
              name={'id' + poster[0]} 
              value={poster[0]}
            />
            <img
              className="image"
              src={'http://kshisa.ru/images/mini/' + poster[1] +  'm0.jpg'}
              alt={numba}
              onClick={() => this.imageClick(poster[0])}
            />
          </div>
        ))}
        </Slider>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  numba :  state.post.numba,
  animate: state.post.animate,
  count:   state.post.count,
  countr:  state.post.countr,
  triggerr: state.post.triggerr
})
export default connect(mapStateToProps, {getposters, getfilmdata, updatecountr, getnextr, getlastr})(Rigt)
