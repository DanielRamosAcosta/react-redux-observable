import React from 'react'

import { connect } from 'react-redux'
import { sendPing } from '../actions';

@connect(({ ping }) => {
  return {
    isPinging: ping.isPinging
  }
},
{ sendPing }
)
export default class Chat extends React.Component {
  render () {
    return (
      <div class='Chat'>
        <p>Esty haciendo ping: {this.props.isPinging.toString()}</p>
        <button onClick={() => this.props.sendPing()}>
          Hazme Click
        </button>
      </div>
    )
  }
}
