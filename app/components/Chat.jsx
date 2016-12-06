import React from 'react'

import { connect } from 'react-redux'
import { sendPing } from '../actions';

@connect(store => {
  return {
    store: store
  }
},
{ sendPing }
)
export default class Chat extends React.Component {
  makePing () {
    console.log('Hola!')
    console.log(this.props)
    this.props.sendPing()
  }

  render () {
    return (
      <div class='Chat'>
        <p>Soy el chat en sí</p>
        <button onClick={::this.makePing}>
          Hazme Click
        </button>
      </div>
    )
  }
}
