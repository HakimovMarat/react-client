import React from "react";
import Slider from "react-slick";
import { getposters, getfilmdata, updatecount, getnext, getlast} from '../actions/card'
import { connect } from 'react-redux'

class SimpleSlider extends React.Component {
  componentDidMount(){
    this.props.getposters()
  }
  next = () => {
    if (this.props.count < 4) {
        this.props.updatecount(this.props.count + 1)
    }
    if (this.props.count === 4) {
        this.props.updatecount(0)
        this.props.getnext(this.props.trigger, this.props.posters)
    }
  }
  last = () => {
    if (this.props.count > -4) {
      this.props.updatecount(this.props.count - 1)
    }
    if (this.props.count === -4) {
      this.props.updatecount(0)
      this.props.getlast(this.props.trigger, this.props.posters)
    }
  }
  imageClick = (n) => {
    this.props.getfilmdata(n)
  }
  render() {
    const { posters } = this.props
    let course = 0
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
      slidesToScroll: 1
  };
  return (
      <div>
        <Slider {...settings}>
        {posters.map(poster => (
          <div id ="posters">
              <img
              className="image"
              src={'imgs/' + poster[1] +  'kad0.jpg'}
              alt=''
              onClick={() => this.imageClick(poster[0])}
              />
            </div>
        ))}
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posters: state.post.posters,
  count: state.post.count,
  trigger: state.post.trigger
})
export default connect(mapStateToProps, { getposters, getfilmdata, updatecount, getnext, getlast })(SimpleSlider)
