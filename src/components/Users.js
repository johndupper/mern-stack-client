import React, { Component } from 'react'
import axios from 'axios'

import User from './User'

export default class Users extends Component {
  constructor (props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => { this.setState({ users: response.data }) })
  }

  render () {
    if (!this.state.users.length) return null
    return (
      <ul>
        {this.state.users.map(u => {
          return (
            <User key={u.name} // sibling scoped
              name={u.name}
              email={u.email}
              phone={u.phone}
            />
          )
        })}
      </ul>
    )
  }
}
