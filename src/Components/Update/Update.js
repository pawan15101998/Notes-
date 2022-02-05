import React from 'react';
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const Update = (props) => {
console.log(props);
const SubmitUpdate = (e) =>{
e.preventDefault()
const { Title, Content } = e.target;
const copy2 = {
  Title: Title.value,
  Content: Content.value,
  id: uuidv4(),
  createAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
  Modify: moment().format("MMMM Do YYYY, h:mm:ss a"),
};
props.updated(copy2)
}

  return <div>
   { props.update.map( (data) =>{
  return <div className="create">
      <form onSubmit={SubmitUpdate}>
        <input name="Title" type="text" defaultValue={data.Title} placeholder="enter title" /> <br />
        <textarea defaultValue={data.Content} name="Content" id="" placeholder="enter note..."></textarea>
        <button className='addbtn'>Submit</button>
      </form>
    </div>
    } )}
  </div>;
};

export default Update;
