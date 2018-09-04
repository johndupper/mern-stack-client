/* globals alert */
import React, { Component } from 'react'

// forms (controlled components)
export default class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  submitForm (event) {
    alert(`Adding ${this.state.value} to Users list`)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Add User' />
      </form>
    )
  }
}
