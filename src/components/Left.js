import React from "react";
import Slider from "react-slick";
import { getposters, getfilmdata, updatecount, getnext, getlast} from '../actions/card'
import { connect } from 'react-redux'

class Left extends React.Component {
  componentDidMount(){
    this.props.getposters(0)
    this.props.getfilmdata()
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
  imageClick = (n) => {
    this.props.getfilmdata(n, 0)
  }
  render() {
    const { posters } = this.props
    const { numbs } = this.props
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
        {posters.map(poster => (
          <div id ="posters">
            <input 
              type="hidden" 
              name={'id' + poster[0]} 
              value={poster[0]}
            />
            <img
              className="image"
              src={'http://kshisa.ru/images/mini/' + poster[1] +  'm0.jpg'}
              alt={numbs}
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
  numbs :  state.post.numbs,
  posters: state.post.posters,
  count: state.post.count,
  trigger: state.post.trigger
})
export default connect(mapStateToProps, { getposters, getfilmdata, updatecount, getnext, getlast })(Left)
