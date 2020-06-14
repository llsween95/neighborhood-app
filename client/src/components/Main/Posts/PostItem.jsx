import React, { Component } from 'react'
import { getOnePost } from '../../../services/posts';

export default class PostItem extends Component {

  state = {
    post: null
  }


  componentDidMount() {
    console.log('yert')
    this.setPost()
    console.log('yert2')
  }

  setPost = async () => {
    const post = await getOnePost(this.props.post);
    console.log(post)
    this.setState({ post })
  }




  render() {
    const { post } = this.state;
    const { currentUser } = this.props;
    return (
      <div>
        <p>hi</p>
      </div>
    )

  }
}