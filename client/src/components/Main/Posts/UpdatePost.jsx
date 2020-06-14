import React, { Component } from 'react'

export default class UpdatePost extends Component {

  state = {
    content: ''
  }

  componentDidMount() {
    if (this.props.post) {
      this.setPostForm();
    }
    //this.props.getPosts()
    console.log('hii')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      this.setPostForm();
    }
  }

  setPostForm = () => {
    const { content } = this.props.post;
    this.setState({ content })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      content: value
    })
  }

  render() {

    const { content } = this.state;
    const { putPost, history, post } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        putPost(post.id, this.state);
        history.push('/');
        this.setState({
          content: ''
        })
      }}>
        <hr />
        <h3>Update Post</h3>
        <input
          id="id"
          type="text"
          value={content}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
