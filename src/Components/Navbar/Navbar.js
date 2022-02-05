import React from 'react';
import './navbar.css'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import AddAlertIcon from '@material-ui/icons/AddAlert';
const Navbar = (props) => {

  const helper = (param) =>{
    props.setpage(param)
  }

  return (
    <>
        <div className="sideNav">
            <div className="frst">
            <EmojiObjectsIcon/>
            <h2 onClick={(e) =>  helper('Create') } >Create</h2>
            </div>
  
            <div className="frst">
            <AddAlertIcon/>
            <h2 onClick={(e) => helper('Display')} >Display</h2>
            </div>
  
            <div className="frst">
            <EditIcon/>
            <h2 onClick={(e) => helper('Trash')} >Trash</h2>
            </div>
  
            <div className="frst">
            <ArchiveIcon/>
            <h2 onClick={(e) => helper('Update')} >Update</h2>
            </div>
  
            <div className="frst">
            <DeleteForeverIcon/>
            <h2>Bin</h2>
            </div>
        </div>
    </>
  )
};

export default Navbar;

