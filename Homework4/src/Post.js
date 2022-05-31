import React, {useState} from "react";

import {Link} from 'react-navi'


export default function Post({dispatch,title, content, author, dateCreated, dateCompleted, complete, id, updatePost,deletePost}) {
  
  const [checked, updateChecked] = useState(false)

  function handleCheckbox(event){
    updateChecked(event.target.checked)
    const updatedPost = { title, content, author, dateCreated, dateCompleted: Date().valueOf(), complete: event.target.checked,id, updatePost,deletePost}
    updatePost(id, updatedPost)
  }

  return (
    <div>
      <hr
        style={{
            color: "black",
            backgroundColor: "black",
            height: 5
        }}
      />
      <h3>{title}</h3>
      <Link href={`/post/${id}`}><h3>{title}</h3></Link>
      <Link href={`/post/${id}`}>View full post</Link>
      <div> <b>Content: </b>{content}</div>
      <br />
      <i>
      Written by <b>{author}</b>
      </i>
      <br/>
      Date Created: {dateCreated}
      <br/>
      Date Completed: {complete ? dateCompleted : "Incomplete"}
      <br/>
      Completed: {complete}
      <input type = "checkbox" value= {checked} onChange={handleCheckbox} />
      <br/>
      <input type = "button" value= "Delete Task" onClick= {() => deletePost(id)} />
    </div>
  );
}
