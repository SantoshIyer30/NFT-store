import React from 'react';
import './Header.css';
import SearchIcon from '../assets/header/search.png'
import themeSwtichIcon from '../assets/header/theme-switch.png'

const Header = () => {
  return (
  <div className='header'>
    <h2>OK Boomer</h2>
    <div className = 'searchbar'>
      <div className='searchIconContainer'>
        <img src={SearchIcon} />
      </div>
      <input className = 'searchInput' placeholder='Collection,item or user ...' />
    </div>

    <div className = 'headerItems'>
      <p>Drops</p>
      <p>Marketplace</p>
      <p>Create</p>
    </div>

    <div className ='headerActions'>
      <div className='themeSwitchContainer'>
        <img src={themeSwtichIcon} />
      </div>
    </div>
    <div className='logInButton'> Get In </div>
  </div>
    
  
  )
};

export default Header;
