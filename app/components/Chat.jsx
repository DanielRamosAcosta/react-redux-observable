import React from 'react'

import { connect } from 'react-redux'
import { chatConnect, chatDisconnect, sendMessage } from '../actions';

@connect(
  ({ chat }) => ({
    messages: chat.messages,
    connected: chat.connected
  }),
  { chatConnect, chatDisconnect, sendMessage }
)
export default class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }
  }

  renderMessages (messages) {
    return messages.map((message, i) =>
      <div key={i}><span>{message.handle}:</span> <span>{message.text}</span></div>
    )
  }
  render () {
    return (
      <div class='Chat'>
        <div>
          <button onClick={() => this.props.chatConnect()} disabled={this.props.connected}>
            Connnect
          </button>
          <button onClick={() => this.props.chatDisconnect()} disabled={!this.props.connected}>
            Disconnect
          </button>
        </div>
        <div>
          <input type="text" value={this.state.message} onChange={e => this.setState({message: e.target.value})}/>
          <button onClick={() => this.props.sendMessage(this.state.message)} disabled={!this.props.connected}>
            Send
          </button>
        </div>
        <div>
          {this.renderMessages(this.props.messages)}
        </div>
      </div>
    )
  }
}
