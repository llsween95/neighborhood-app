import React, { Component } from 'react'

export default class CreateComment extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      content: value
    })
  }

  render() {
    const { content } = this.state.content
    const { createNewComment, history } = this.props
    return (
      <form onSubmit={(e) => {
        //e.preventDefault()
        createNewComment(this.state)
        history.push('/')
        this.setState({ content: '' })
      }}
      >
        <input
          type="text"
          placeholder="Add comment"
          value={content}
          onChange={this.handleChange}
        />
        <button>Comment</button>
      </form>
    )
  }
}
