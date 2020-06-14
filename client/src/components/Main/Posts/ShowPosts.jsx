import React from 'react'

export default function ShowPosts(props) {
  const { allPosts, currentUser, deleteOnePost, history } = props




  return (
    <div>
      <h3>Posts:</h3>
      {
        allPosts.map(p => (
          <div style={styler} key={p && p.id}>
            <div>
              <p key={p && p.id}>{p.user && p.user.name}</p>
              <p key={p && p.id}>{p && p.content}</p>
              {
                currentUser && currentUser.id === (p && p.user_id) && (
                  <>
                    <button onClick={() => history.push(`/post/${p.id}/edit`)}>Edit</button>
                    <button onClick={() => { deleteOnePost(p.id) }}>Delete</button>
                  </>
                )
              }
            </div>
            <br />
            <p key={p && p.id}>{p && p.comments.map(comment => (
              <p>{comment.content}</p>
            ))}</p>
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