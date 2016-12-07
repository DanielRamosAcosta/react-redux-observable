import React from 'react'

export default class Inputs extends React.Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }
  }

  handleKeyPress (e) {
    if(e.charCode === 13) {
      this.sendMessage()
    }
  }

  sendMessage () {
    if (!this.state.message) return
    this.setState({message: ''})
    this.props.sendMessage(this.state.message)
  }

  render () {
    return (
      <div class='Inputs'>
        <input
          type='text'
          value={this.state.message}
          onChange={e => this.setState({message: e.target.value})}
          disabled={!this.props.connected}
          placeholder='Message'
          onKeyPress={::this.handleKeyPress}
        />
      <button onClick={::this.sendMessage} disabled={!this.props.connected}>
          Send
        </button>
      </div>
    )
  }
}
