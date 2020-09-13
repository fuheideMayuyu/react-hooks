import React from 'react'
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

ReactDOM.render(<Counter />, document.getElementById('root'))