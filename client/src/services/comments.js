import api from './api-helper'


export const createComment = async (commentData) => {
  const resp = api.post('/comments', { comment: commentData })
  return resp.data
}

export const updateComment = async (id, commentData) => {
  const resp = api.put(`/comment/${id}`, { comment: commentData })
  return resp.data
}


export const deleteComemnt = async (id) => {
  const resp = api.delete(`/comment/${id}`)
  return resp
}