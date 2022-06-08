import React, {useState,useEffect,useContext} from "react";
import { useResource } from "react-request-hook";
import { useNavigation } from 'react-navi'

import StateContext from "./Context";

export default function CreatePost() {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleContent (evt) { setContent(evt.target.value) }
  
  
  const {state, dispatch} = useContext(StateContext)
  const {user} = state

  const navigation = useNavigation()

  const [post , createPost ] = useResource(({ title, content, author,dateCreated,dateCompleted,complete,id }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author,dateCreated,dateCompleted,complete,id }
}))
  
useEffect(() => {
  if(post && post.data && post.isLoading === false) {
    // navigation.navigate(`/post/${post.data.id}`)
  }
}, [post])



  function handleCreate (evt) {  
    const id = Math.floor(Math.random() * 1000000)
    createPost({ title, content, author: user, dateCreated: Date().valueOf(), dateCompleted: null, complete: false, id: id})
    dispatch({type:'CREATE_POST', title, content, author: user, dateCreated: Date().valueOf(), dateCompleted: null, complete: false, id: id})

  }

  return (
    <>
    <h2>Create a New Task</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
    </>
  );
}
