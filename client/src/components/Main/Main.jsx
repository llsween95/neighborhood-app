import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import ShowPosts from './Posts/ShowPosts'
import CreatePost from './Posts/CreatePost'
import UpdatePost from './Posts/UpdatePost'
import PostItem from './Posts/PostItem'
import { getAllPosts, createPost, deletePost, updatePost } from '../../services/posts'

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

  deleteOnePost = async (id) => {
    await deletePost(id)
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
  }

  putPost = async (id, postData) => {
    const updatedPost = await updatePost(id, postData);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === id ? updatedPost : post)
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
        <Route exact path="/" render={(props) => (
          <>
            <CreatePost
              {...props}
              createNewPost={this.createNewPost}
            />
            <br />
            <ShowPosts
              {...props}
              currentUser={this.props.currentUser}
              allPosts={this.state.posts}
              deleteOnePost={this.deleteOnePost}
            />
          </>
        )} />
        <Route path='/posts/:id/edit' render={(props) => {
          const postId = props.match.params.id;
          const post = this.state.posts.find(post => post.id === parseInt(postId));
          return <UpdatePost
            {...props}
            post={post}
            putPost={this.putPost}
            getPosts={this.getPosts}
          />
        }} />
        <Route path='/posts/:id' render={(props) => {
          const postId = props.match.params.id;
          //const post = this.state.posts.find(post => post.id === parseInt(postId));
          return <PostItem
            postId={postId}
            currentUser={this.props.currentUser}
          />
        }} />
      </main>
    )
  }
}
