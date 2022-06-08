import React, { useEffect, useContext } from 'react'
import StateContext from '../Context'
import { useResource } from 'react-request-hook'
import PostList from '../PostList'


export default function HomePage() {

  const {state, dispatch} = useContext(StateContext)
      
  // const [ posts, getPosts ] = useResource(() => ({
  //   url: '/posts',
  //   method: 'get'
  // }))

  const [ updatedPosts, getPosts ] = useResource((username) => ({
      url: `/posts?author=${username}`,
      method: 'get',
    }))
    
  // useEffect(getPosts, [state.user])

  useEffect(() => {
    if (state.user) {
      if (state.user.length > 0) {
           getPosts(state.user)
      }
    }
  }, [state.user])

  useEffect(() => {
    if (updatedPosts && updatedPosts.data) {
      console.log(updatedPosts)
        dispatch({ type: 'SHOW_POST', updatedPosts: updatedPosts.data })
    }
  }, [updatedPosts])

  return <PostList posts={state.posts} dispatch= {dispatch} />
}