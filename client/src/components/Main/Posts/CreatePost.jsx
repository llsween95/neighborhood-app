import React, { Component } from 'react'
import './Posts.css'

export default class CreatePost extends Component {

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
    const { createNewPost, history } = this.props
    return (
      <form className='postForm' onSubmit={(e) => {
        //e.preventDefault()
        createNewPost(this.state)
        history.push('/')
        this.setState({ content: '' })
      }}
      >
        <input
          type="text"
          placeholder="Create new post"
          value={content}
          onChange={this.handleChange}
        />
        <button>Post</button>
      </form>
    )
  }
}
