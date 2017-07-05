import React, {Component} from "react";
import NotFoundImage from "../assets/404.jpg";
import {withRouter} from "react-router";

class PageNotFound extends Component {
  render () {
    const props = this.props
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Page not found!</h1>
        <h3>
          <button onClick={props.router.goBack}>Back</button>
        </h3>
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: React.PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
