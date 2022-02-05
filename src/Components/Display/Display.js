import React from 'react';
import './display.css'

const Display = (prop) => {

   
return <div>
 {prop.Notes.map( (val, i) => {

   let movetrash = () =>{
     prop.trashItem(val)
   }

   const updatenotes = () =>{
      prop.updatenotes(val)
   }
    return<>
    <div className="showelem">
    <div className="eachnotes">
    <div className="main_content">
    <h2>{val.Title}</h2>
    <p>{val.Content}</p>
    </div>
    <small>{val.createAt}</small>
    <div className="operator">
    <button className='del' onClick={movetrash}>Delete</button>
    <button className='upd' onClick={updatenotes}>Update</button>
    </div>
    </div>
    </div>
    </> 
 })}
  </div>;
};

export default Display;
