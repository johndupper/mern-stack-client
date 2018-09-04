import React, { Component } from 'react'

import Users from './components/Users'
import UserForm from './components/UserForm'

import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Users />
        <UserForm />
      </div>
    )
  }
}
