import React, {Component} from 'react'
import DisplayedCounter from './DisplayedCounter'
import DisplayedName from './DisplayedName'
import Enemy from './Enemy'

class Counter extends Component {
  constructor (props) {
    super()
    this.state = {
      number: props.num,
      keyword: 'Search keyword',
      enemiesArr: ['The Hound', 'The Cersei', 'The Sansa']
    }
  }

  increaseCounter (e) {
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
    this.setState(e.target.value ? { keyword: e.target.value } : { keyword: 'Search keyword' })
  }

  filterName (e) {
    let keyword = e.target.value

    const result = this.state.enemiesArr.filter((name) => {
      console.log(name, keyword)
      return name.toLowerCase().includes(keyword.toLowerCase())
    })
    console.log(result)
    // this.setState({
    //   enemiesArr: this.state.enemiesArr.concat(result)
    // })
  }

  updateList (e) {
    console.log(e)
    this.setState({
      enemiesArr: this.state.enemiesArr.concat(this.state.name)
    })
    //dont use push. push is mutative and props/states/react must be immutable
  }

  render () {
    let allEnemies = this.state.enemiesArr.map((name, index) => <Enemy key={ index } name={ name }/>)

    return (
      <div>
        <DisplayedCounter number={ this.state.number }/>
        <button onClick={(e) => this.increaseCounter(e)}>Upvote</button>
        <DisplayedName keyword={ this.state.keyword } />

        <div>
          <label>
            Type your name:
            <input type='text' onChange={(e) => this.filterName(e)} />
          </label>
          <button onClick={(e) => this.updateList(e)}>Add name</button>
        </div>

        <h2>Arya's Kill List</h2>
        <ul>
          { allEnemies }
        </ul>
      </div>
    )
  }

  // only run the api after components have been initialized / rendered
//   componentDidMount () {
//     const url = `https://api.got.show/api/characters`
//
//     fetch(url)
//       .then((response) => {
//         console.log(response)
//         return response.json()
//       }) // processes the promise object into json
//       .then((data) => {
//         console.log('data', data)
//         data.map((character) => {
//           this.setState({
//             enemiesArr: this.state.enemiesArr.concat(character.name)
//           })
//         })
//       }) // reads the process json
//       .catch((err) => {
//         console.log('err', err)
//       }) // catch error
//   }
}

export default Counter
