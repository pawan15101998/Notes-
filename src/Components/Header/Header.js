import React from 'react';
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import ReplayIcon from '@material-ui/icons/Replay';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
const Header = () => {
  return (
      <>
          <div className="header">
              <div className="leftHeader">
              <MenuIcon className='hamburger'/>
              <div className="image">
              <img src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/medium/public/article_images/2021/05/google-keep-logo.png" alt="" />
              </div>
              <h3>Keep</h3>
              </div>
              <input type="text" placeholder='search'/>
              <div className="rightHeader">
                <ReplayIcon className='setting'/>
                <ViewStreamIcon className='setting'/>
                <SettingsIcon className='setting'/>
              </div>
          </div>
          <hr />
      </>
  )
};

export default Header;