import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncreament = () => {
    this.setState(prevState => {
      console.log(prevState.count)
      return {count: Math.floor(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state
    const result = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="description">Count is {result}</p>
        <button type="button" onClick={this.onIncreament}>
          Increment
        </button>
        <p className="info">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
