import React, { Component } from 'react'

 class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from {this.props.place} My dear Nasim Qureshi</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Classprops
