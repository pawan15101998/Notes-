import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import './createnote.css'
// import Display from "../Display/Display";

const Createnote = (props) => {
  console.log(props)
  const SubmitEvent = (event) => {
    event.preventDefault();
    props.Displayreturn()
    const { Title, Content } = event.target;
    const copy = {
      Title: Title.value,
      Content: Content.value,
      id: uuidv4(),
      createAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
    props.setNote(copy);
  };


  return (
    <>
    <div className="create">
      <form onSubmit={SubmitEvent}>
        <input name="Title" type="text" placeholder="enter title" /> <br />
        <textarea name="Content" id="" placeholder="enter note..."></textarea>{" "}
        <button className='addbtn'>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Createnote;
