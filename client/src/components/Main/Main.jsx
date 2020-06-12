import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import ShowPosts from './Posts/ShowPosts'
import CreatePost from './Posts/CreatePost'
import { getAllPosts, createPost } from '../../services/posts'

export default class Main extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const posts = await getAllPosts()
    this.setState({ posts })
  }

  createNewPost = async (postData) => {
    const newPost = await createPost(postData)
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }


  render() {
    return (
      <main>
        <Route path="/user/login" render={(props) => (
          <Login
            // router props to access history 
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path="/user/register" render={(props) => (
          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
        <Route path="/" render={(props) => (
          <>
            <CreatePost
              {...props}
              createNewPost={this.createNewPost}
            />
            <br />
            <ShowPosts
              allPosts={this.state.posts}
            />
          </>
        )} />
      </main>
    )
  }
}
