import React, { Component } from 'react'
import { withToggler } from '../HOC/withToggler'

export class Favourite extends Component {
  render() {
    return (
        <>
            <h3>Click to {this.props.on ? "UnLike" : "Like"}</h3>
            <h1 onClick={this.props.toggle}>{this.props.on? "❤️": "😏"}</h1>
        </>
    )
  }
}

export default withToggler(Favourite)