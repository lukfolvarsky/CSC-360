import React, {useState} from "react";

export default function CreatePost({ user, setPosts, posts }) {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleContent (evt) { setContent(evt.target.value) }
  function handleCreate (evt) {  
    const newPost = { title, content, author: user }
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
     setPosts([newPost, ...posts])
  }

  return (
    <>
    <h2>Create a Todo Task</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <div>
      <label htmlFor="create-description">Description:</label>
      <textarea value={content} onChange={handleContent} />
      </div>      

      <input type="submit" value="Create" disabled={title.length === 0}/>
    </form>
    </>

  );
}
