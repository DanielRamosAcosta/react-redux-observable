import React from 'react'

export default class Connection extends React.Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  handleKeyPress (e) {
    if(e.charCode === 13) {
      this.chatConnect()
    }
  }

  chatConnect () {
    if (!this.state.username) return
    this.props.chatConnect(this.state.username)
  }

  render () {
    return (
      <div class='Connection'>
        <input
          type='text'
          value={this.state.username}
          onChange={e => this.setState({username: e.target.value})}
          disabled={this.props.connected}
          placeholder='Username'
          onKeyPress={::this.handleKeyPress}
        />
        <button onClick={::this.chatConnect} disabled={this.props.connected}>
          Connnect
        </button>
        <button onClick={() => this.props.chatDisconnect()} disabled={!this.props.connected}>
          Disconnect
        </button>
      </div>
    )
  }
}
