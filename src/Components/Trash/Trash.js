import React from 'react';

const Trash = (trashpop) => {
  return <div>
    {trashpop.Trashdata.map( (val) =>{
      const removenotes = () =>{
        trashpop.removenotes(val)
      }

      const restorenotes = () =>{
        trashpop.restore(val)
      }

    return ( 
      <>
      <div className="showelem">
    <div className="eachnotes">
    <div className="main_content">
    <h2>{val.Title}</h2>
    <p>{val.Content}</p>
    </div>
    <small>{val.createAt}</small>
    <div className="operator">
    <button className='del' onClick={removenotes}>permanent delete</button>
    <button className='upd' onClick={restorenotes}>Restore</button>
    </div>
    </div>
    </div>
    </>
      )
    })}
  </div>;
};


export default Trash;
