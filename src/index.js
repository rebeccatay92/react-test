import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Ga from './Ga'
import Counter from './Counter'

const gaInfo = {
  title: 'GA Overflow',
  description: 'Something about GA'
}

const post = {
  title: 'Dinosaurs are awesome',
  author: 'Dino',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  comments: [
    {
      title: 'First',
      user: 'Prima'
    },
    {
      title: 'Second',
      user: 'Shimei'
    },
    {
      title: 'Third',
      user: 'Borkster'
    },
    {
      title: 'Fourth',
      user: 'Pupper'
    }
  ]
}
ReactDOM.render(<Counter num={0} />, document.getElementById('root'))
registerServiceWorker()

// ReactDOM.render(<Ga info={gaInfo} post={post} />, document.getElementById('root'))
// registerServiceWorker()
