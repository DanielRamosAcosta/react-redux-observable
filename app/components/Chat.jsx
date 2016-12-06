import React from 'react'

import { connect } from 'react-redux'
import { chatConnect, chatDisconnect } from '../actions';

@connect(
  ({ chat }) => ({
    messages: chat.messages,
    connected: chat.connected
  }),
  { chatConnect, chatDisconnect }
)
export default class Chat extends React.Component {
  renderMessages (messages) {
    return messages.map((message, i) =>
      <div key={i}><span>{message.handle}:</span> <span>{message.text}</span></div>
    )
  }

  render () {
    return (
      <div class='Chat'>
        <button onClick={() => this.props.chatConnect()} disabled={this.props.connected}>
          Connnect
        </button>
        <button onClick={() => this.props.chatDisconnect()} disabled={!this.props.connected}>
          Disconnect
        </button>
        {this.renderMessages(this.props.messages)}
      </div>
    )
  }
}
