import React from "react";

export default function Post({dispatch,title, content, author, dateCreated, dateCompleted, complete, id, updateTodo}) {
  
  function handleCheckbox(event){
    console.log("hey");
   dispatch({type:'UPDATE_POST', title, content, author, dateCreated, dateCompleted: Date().valueOf(), complete: event.target.checked})

   console.log(dateCompleted);
   updateTodo(id,dispatch);
  }

  function handleCheckboxDelete(event){
    
   dispatch({type:'DELETE_POST', title, content, author, dateCreated, dateCompleted: Date().valueOf(), complete: event.target.checked})
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
      <div> <b>Content: </b>{content}</div>
      <br />
      <i>
      Written by <b>{author}</b>
      </i>
      <br/>
      Date Created: {dateCreated}
      <br/>
      Date Completed: {dateCompleted}
      <br/>
      Completed: {complete}
      <input type = "checkbox" value= {complete} onChange={handleCheckbox} />
      <br/>
      <button onChange={handleCheckboxDelete} type="button">Delete Task</button>
    </div>
  );
}
