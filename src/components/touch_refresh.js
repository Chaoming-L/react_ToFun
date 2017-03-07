import React from "react";

class TouchRefresh extends React.Component {
  constructor(props) {
    super(props)
    this.startY = 0;
  }

  componentDidMount() {
    let _this = this;

    document.addEventListener('touchstart', function (e) {
      let touch = e.targetTouches[0];
      let touchStart = touch.pageY;
      // 开始位置
      _this.startY = touchStart;
    }, false)

    document.addEventListener('touchend', function (e) {
      let touch = e.changedTouches[0];
      let touchEnd = touch.pageY;
      let moveY = touchEnd - _this.startY;
      console.log(moveY)
      if (moveY > 150) {
        _this.props.action()
      }

      _this.startY = 0;
    }, false)
  }

  touchMove = (e) => {
    let y = e.targetTouches[0].pageY;
    let touchY = y - this.startY;
  }


  render() {
    return (
      <div onTouchMove={this.touchMove}>
        {this.props.children}
      </div>
    )
  }
}

export default TouchRefresh
