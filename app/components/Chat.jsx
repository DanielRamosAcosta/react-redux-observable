import React from 'react'

import { connect } from 'react-redux'
import { chatConnect, chatDisconnect, sendMessage } from '../actions';

import Connection from './Chat/Connection'
import Inputs from './Chat/Inputs'

@connect(
  ({ chat }) => chat,
  { chatConnect, chatDisconnect, sendMessage }
)
export default class Chat extends React.Component {
  renderMessages (messages) {
    return messages.map((message, i) =>
      <div key={i}><span>{message.username}:</span> <span>{message.text}</span></div>
    )
  }

  render () {
    return (
      <div class='Chat'>
        <Connection
          connected={this.props.connected}
          chatConnect={this.props.chatConnect}
          chatDisconnect={this.props.chatDisconnect}
        />
        <Inputs
          connected={this.props.connected}
          sendMessage={this.props.sendMessage}
        />
        <div>
          {this.renderMessages(this.props.messages)}
        </div>
      </div>
    )
  }
}
