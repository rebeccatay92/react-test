import React, {Component} from 'react'
import DisplayedCounter from './DisplayedCounter'
import DisplayedName from './DisplayedName'

class Counter extends Component {
  constructor (props) {
    super()
    this.state = {
      number: props.num,
      name: 'Show name',
      namesArr: []
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

  updateList (e) {
    console.log(e)
    this.setState({
      namesArr: this.state.namesArr.concat(this.state.name)
    })
    //dont use push. push is mutative and props/states/react must be immutable
  }

  render () {
    let allNames = this.state.namesArr.map((name, index) => <li key={index}>{name}</li>)

    return (
      <div>
        <DisplayedCounter number={this.state.number}/>
        <button onClick={(e) => this.increaseCounter(e)}>Upvote</button>
        <DisplayedName name={this.state.name} />

        <div>
          <label>
            Type your name:
            <input type='text' onChange={(e) => this.showName(e)} />
          </label>
          <button onClick={(e) => this.updateList(e)}>Add name</button>
        </div>

        <h2>List of names</h2>
        <ul>
          {allNames}
        </ul>
      </div>
    )
  }
}

export default Counter
