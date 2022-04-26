import React, {useState} from "react";

export default function Post({ title, content, author }) {
  
  const [date, setDate] = useState(new Date().toLocaleString() + "");
  //const [donedate, setDoneDate] = useState(new Date().toLocaleString() + "");
  const [checked, setChecked] = useState(false);

  function handleDate(evt) { setDate(evt.target.value) }
  //function handleDoneDate(evt) { setDoneDate(evt.target.value) }
  
 
  
  return (
    <div>
      <hr
        style={{
            color: "black",
            backgroundColor: "black",
            height: 5
        }}
      />
      <h3>Tittle: {title}</h3>
      <div>Description: {content}</div>
      <i>
      <div>Date Created: <input type="text" value={date} onChange={handleDate} name="create-title" id="create-title" /></div>
      </i>
      <i>
        Written by <b>{author}</b>
      </i>
      

      <label>
      <i>
      <div>Complete? <input type="checkbox" onChange={() => setChecked(!checked)} checked={checked}/>
      </div></i>
           {
             checked ? (<i>
               <input type="text" value={(new Date().toLocaleString() + "")} name="create-title" id="create-title" />
            
             </i>) : (<i><div>Date Completed: <b>N/A</b></div></i>)
           }
     </label>
    </div>
  );
}
