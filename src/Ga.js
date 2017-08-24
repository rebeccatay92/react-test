import React, {Component} from 'react'
import Question from './Question'
import Post from './Post'
import Comment from './Comment'

const questions = [
  {
    title: 'What is react?',
    description: 'React has virtual DOM',
    upvotes: 5,
    downvotes: 1
  },
  {
    title: 'What is virtual DOM?',
    description: 'ohmygawd stop asking',
    upvotes: 10,
    downvotes: 2
  },
  {
    title: 'This is a qns',
    description: 'This is a description',
    upvotes: 0,
    downvotes: -10
  }
]

class Ga extends Component {
  // render can only return 1 tag (div), not h1 and then p together.
  render () {
    let questionList = questions.map(function(q, index) {
      return <Question detail={q} key={index} />
    })


    let commentList = this.props.post.comments.map(function(comment, index) {
      return <Comment title={comment.title} user={comment.user} key={index} />
    })

    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <p>{this.props.info.description}</p>

        <div>
          <h1>Questions</h1>
          <ul>
            { questionList }
          </ul>
        </div>

        <div>
          <h1>Post: {this.props.post.title}</h1>
          <h2>Written by: {this.props.post.author}</h2>
          <p>{this.props.post.body}</p>
          <ul>
            { commentList }
          </ul>
        </div>

      </div>
    )
  }
}

export default Ga
