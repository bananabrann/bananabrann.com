import React from "react"

import bananas from "../../res/img/bananas.png"

import "./Break.scss"

class Break extends React.Component {
  render() {
    return (
      <div className="break">
        <span />
        {/* <i className="center-me" class="fas fa-leaf"></i> */}
        <img src={bananas} />
        <span />
      </div>
    )
  }
}

export default Break
