import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => this.setState({number: this.state.number + 1})}>+</button>
      </div>
    )
  }
}

function FunCounter(props) {
  let [count, setCount] = useState({number: 0})
  return (
    <div>
      <p>{count.number}</p>
      <button onClick={() => setCount({number: count.number + 1})}>+</button>
    </div>
  )
}

ReactDOM.render(<FunCounter />, document.getElementById('root'))