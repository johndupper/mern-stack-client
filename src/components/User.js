import React, { Component } from 'react'

export default class User extends Component {
  render () {
    return (
      <li onClick={() => console.log(this.props.name)}>
        <p><b>{this.props.name}</b></p>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
      </li>
    )
  }
}
