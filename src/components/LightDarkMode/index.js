// Write your code here

import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangingMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const className = isDarkMode ? 'dark-mode' : 'light-mode'
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`${className} container`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onChangingMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
