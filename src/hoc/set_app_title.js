/**
 * Created by Damon on 2017/6/14.
 */

import React from 'react'
import { connect } from 'react-redux'
import { setAppTitle } from 'modules/app_bar'

const setTitle = title => ChildComponentClass => {
  class Container extends React.Component {
    componentWillMount () {
      this.props.setAppTitle(title)
    }

    render () {
      return <ChildComponentClass {...this.props}/>
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    setAppTitle: (title) => dispatch(setAppTitle(title))
  })

  return connect(null, mapDispatchToProps)(Container)
}

export default setTitle