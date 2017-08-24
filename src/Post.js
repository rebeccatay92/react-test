import React, {Component} from 'react'

class Post extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.content.title}</h1>
        <h3>{this.props.content.author}</h3>
        <p>{this.props.content.body}</p>
        <ul>
          {
            this.props.content.comments.map(function (comment, index) {
              return <li key={index}>{comment}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Post
