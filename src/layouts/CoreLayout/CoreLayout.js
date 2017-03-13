import React from "react";
import AppBarFixed from "./appbar";
import "./CoreLayout.less";
import "assets/css/main.less";

export const CoreLayout = ({ children }) => (
  <div className='container'>
    <AppBarFixed />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
