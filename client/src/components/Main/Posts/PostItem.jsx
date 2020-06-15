import React, { Component } from 'react'
import { getOnePost } from '../../../services/posts';

export default class PostItem extends Component {

  state = {
    post: null
  }


  componentDidMount() {
    console.log('yert')
    const post = getOnePost(this.props.postId);
    console.log(post)
    this.setState({ post })
  }

  setPost = async () => {

  }




  render() {

    const { post } = this.state;
    console.log(post && post.content)
    const { currentUser, postId } = this.props;
    return (
      <div>
        <p>{post && post.content}</p>
      </div>
    )

  }
}