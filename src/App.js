import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Createnote from "./Components/Createnote/Createnote.js";
import Update from "./Components/Update/Update.js";
import Trash from "./Components/Trash/Trash.js";
import Display from "./Components/Display/Display.js";
import Header from "./Components/Header/Header.js";
import './index.css'
const App = () => {
  const [page, setpage] = useState({
    Create: false,
    Trash: false,
    Update: false,
    Display: true,
  });
  const [first, setfirst] = useState([]);
  const [Trashdata, setTrashdata] = useState([]);
  const [update, setupdate] = useState([]);

  const trashItem= (elem) =>{
    const arr2 = [...Trashdata]
    arr2.push(elem)
    setTrashdata(arr2)
    var index = first.indexOf(elem)
    first.splice(index, 1)
  }


  const PageSetter = (name) => {
    if (name === "Create") {
      setpage({
        Create: true,
        Trash: false,
        Update: false,
        Display: false,
      });
    } else if (name === "Display") {
      setpage({
        Create: false,
        Trash: false,
        Display: true,
        Update: false,
      });
    } else if (name === "Trash") {
      setpage({
        Create: false,
        Trash: true,
        Update: false,
        Display: false,
      });
    } else if (name === "Update") {
      setpage({
        Create: false,
        Trash: false,
        Update: true,
        Display: false,
      });
    }
  };
  const setobj = (cp) => {
    const arr = [...first];
    arr.push(cp); 
    setfirst(arr);
  };

  const displaypage = () =>{
    PageSetter(setpage({
      Create: false,
      Trash: false,
      Update: false,
      Display: true,
    }));
  }

  const updatenotes = (updatedata) =>{
    PageSetter(setpage({
      Create: false,
      Trash: false,
      Update: true,
      Display: false,
    }));
    const arrupdate = [...update]
    arrupdate.push(updatedata)
    setupdate(arrupdate)
  }

  const updated = (copy2) =>{
    var updateindex = first.indexOf(copy2.id)
    first.splice(updateindex, 1)
    const arr3 = [...first];
    arr3.push(copy2); 
    setfirst(arr3);
    PageSetter(setpage({
      Create: false,
      Trash: false,
      Update: false,
      Display: true,
    }));
  }

  
  
  const removenotes = (deletepermanent) =>{
    console.log(deletepermanent);
    var deleteindex = Trashdata.indexOf(deletepermanent.id)
    Trashdata.splice(deleteindex, 1)
    const newtrash = [...Trashdata]
    setTrashdata(newtrash)
  }

  const restore = (restoredata) =>{
    var restoreindex = Trashdata.indexOf(restoredata.id)
    Trashdata.splice(restoreindex, 1)
    first.push(restoredata)
    PageSetter(setpage({
      Create: false,
      Trash: false,
      Update: false,
      Display: true,
    }));
  }

  return (
    <>
      <div className="main">
      <div className="nav">
    <Header/>
      </div>
      <div className="down">
      <div className="lft">
      <Navbar setpage={PageSetter} />
      </div>
      <div className="rht">
      {page.Create && <Createnote setNote={setobj} Displayreturn ={displaypage} />}
      {page.Update && <Update update={update}  updated={updated}/>}
      {page.Trash && <Trash Trashdata={Trashdata} removenotes={removenotes} restore = {restore} />}
      {page.Display && <Display Notes ={first} trashItem= {trashItem} updatenotes= {updatenotes} />}
      </div>
      </div>
      </div>
    </>
  );
};

export default App;
