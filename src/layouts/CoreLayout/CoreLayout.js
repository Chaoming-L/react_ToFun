import React from 'react'
import './CoreLayout.less'

export const CoreLayout = ({ children }) => (
  <div className='container'>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
