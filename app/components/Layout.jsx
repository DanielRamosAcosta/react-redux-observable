import React from 'react'

export default class Layout extends React.Component {
  render () {
    return (
      <div class='Layout'>
        {this.props.children}
      </div>
    )
  }
}
