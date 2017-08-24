// functional components are components that only render props and do not change state
import React from 'react'

const DisplayedCounter = (props) => (
  <h1>
    Counter: {props.number}
  </h1>
)

export default DisplayedCounter
