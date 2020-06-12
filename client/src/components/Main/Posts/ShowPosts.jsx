import React from 'react'

export default function ShowPosts(props) {
  const { allPosts } = props
  return (
    <div>
      <h3>Posts:</h3>
      {
        allPosts.map(p => (
          <div style={styler}>
            <p key={p.id}>{p.user.name}</p>
            <p key={p.id}>{p.content}</p>
            <br />
            <p key={p.id}>{p.comments.map(comment => (
              <p>{comment.content}</p>
            ))}</p>
          </div>

        ))
      }
      {console.log(allPosts)}
    </div>
  )
}


const styler = {
  border: '1px solid gray',
  margin: '2% auto'
}