import  React, {useEffect} from "react";
import Post from "./Post";

import { useResource } from "react-request-hook";

export default function PostList({ posts = [],dispatch }) {

  const [ post, updatePost ] = useResource((id, updatedPost) => ({
    url: `/posts/${id}`,
    method: 'put',
    data: {...updatedPost}

  }))
  
  useEffect(() => {
    if(post && post.data && post.isLoading === false) {
    const updatedPosts = posts.map((p)=>p.id === post.data.id ? post.data : p)
    // console.log(id,updatedPosts)
    dispatch({type: 'UPDATE_POST', updatedPosts})
    }
  }, [post])



  // const updatePost = (id, updatedPost) => {
  //   const updatedPosts = posts.map((post)=>post.id === id ? updatedPost : post)
  //   dispatch({type: 'UPDATE_POST', updatedPosts})
  // }

  const [ del, deletePost ] = useResource((id) => ({
    url: `/posts/${id}`,
    method: 'delete',
    data: {id}
  }))
  
  useEffect(() => {  
     if(del && del.data && del.isLoading === false) {
    const updatedPosts = posts.filter((p)=>p.id === del.data.id)
    dispatch({type: 'DELETE_POST', updatedPosts})
    }
  }, [del])


//   const deletePost = (id) => {
// const updatedPosts = posts.filter((post) => post.id !== id)
// dispatch({type: 'DELETE_POST', updatedPosts})
//   }

  return (
    <div>
      {posts.map((p, i) => (
        <Post {...p}  updatePost={updatePost} deletePost={deletePost}id={p.id} title={p.title} content={p.content} author={p.author} dateCreated={p.dateCreated} dateCompleted={p.dateCompleted} complete={p.complete}/>
        //<Post id={p.id} title={p.title} content={p.content} author={p.author} dateCreated={p.dateCreated} dateCompleted={p.dateCompleted} complete={p.complete} updatePost={updatePost} deletePost={deletePost} key={"post-" + i} />
      ))}
    </div>
  );
}
