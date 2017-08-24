import React, {Component} from 'react'

class Counter extends Component {
  constructor (props) {
    super()
    this.state = {
      number: props.num,
      name: 'Show name'
    }
  }
  increaseCounter (e) {
    // console.log("increase counter", e)
    this.setState({
      number: this.state.number + 1
    })
  }
  showName (e) {
    // if (e.target.value) {
    //   let typedName = e.target.value
    //   this.setState((prevState) => {
    //     return {
    //       name: typedName
    //     }
    //   })
    // } else {
    //   this.setState({ name: 'Show name' })
    // }
    this.setState(e.target.value ? { name: e.target.value } : { name: 'Show name' })
  }

  render () {
    return (
      <div>
        <h1>Counter: {this.state.number}</h1>
        <h2>{this.state.name}</h2>
        <div>
          <label>
            Type your name:
            <input type='text' onChange={(e) => this.showName(e)} />
          </label>
        </div>
        <button onClick={(e) => this.increaseCounter(e)}>Upvote</button>
        <button>Add name</button>
      </div>
    )
  }
}

export default Counter
