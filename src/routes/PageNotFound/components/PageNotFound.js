import React, {Component} from "react";
import NotFoundImage from "../assets/404.jpg";
import {withRouter} from "react-router";

class PageNotFound extends Component {
  render () {
    const props = this.props
    return (
      <div className='text-center'>
        <h1>Page not found!!!</h1>
        <h3>
          <a className={classes.link} onClick={props.router.goBack}>Back</a>
        </h3>
        <img src={NotFoundImage} />
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: React.PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
