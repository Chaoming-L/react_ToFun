import React from "react";

class TouchRefresh extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startY: 0
    }
  }

  touchMove = (e) => {
    var y = e.targetTouches[0].pageY

    if (y - this.startY > 100) {
      console.log('3333')
    }
  }

  touchStart = (e) => {
    console.log(e)
    this.setState({startY: e.pageY});
  }

  render () {
    return (
      <div onTouchMove={this.touchMove} onTouchEnd={this.touchStart}>
        {this.props.children}
      </div>
    )
  }
}

export default TouchRefresh
