import React from 'react'
import { Link } from 'react-router-dom'
import CreateComment from '../Comments/CreateComment'
import { createComment } from '../../../services/comments'
import './Posts.css'

export default function ShowPosts(props) {
  const { allPosts, currentUser, deleteOnePost, history } = props


  // createNewComment = async () => {
  //   const newComment = await createComment(commentData)
  //   this.setState(prevState => ({
  //     comments: [...prevState.comments, newComment]
  //   }))
  // }


  return (
    <div>
      {
        allPosts.map(p => (
          <div className="postContainer" style={styler} key={p && p.id}>
            {/* <button onClick={() => history.push(`/posts/${p.id}`)}>View</button> */}
            <div className='allPostsContainer'>
              <div className='userContainer'>
                <ion-icon name="person-circle-outline"></ion-icon>
                <p key={p && p.id}>{p.user && p.user.name}</p>
              </div>
              <div className="post-content">
                <p key={p && p.id}>{p && p.content}</p>
              </div>

              <br />
              {
                currentUser && currentUser.id === (p && p.user_id) && (
                  <div className='btnContainer'>
                    <button onClick={() => history.push(`/posts/${p.id}/edit`)}>Edit</button>
                    <button onClick={() => { deleteOnePost(p.id) }}>Delete</button>
                  </div>
                )
              }
            </div>
            <hr />
            <br />
            <CreateComment
            />
            <br />
            <div className='allComments'>
              <p key={p && p.id}>{p && p.comments.map(comment => (
                <div className="userAndComment">
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <p>{comment.content}</p>
                </div>
              ))}</p>
            </div>
          </div>

        )).reverse()
      }
      {console.log(allPosts)}
    </div >
  )
}


const styler = {
  border: '1px solid gray',
  margin: '2% auto'
}