import React, { Component } from 'react'

class Question extends Component {
  render() {
    return (
      <li>
        <h2>Qns: {this.props.detail.title}</h2>
        <p>Description: {this.props.detail.description}</p>
        <button>Upvote: {this.props.detail.upvotes}</button>
        <button>Downvote: {this.props.detail.downvotes}</button>
      </li>
    )
  }
}

export default Question
