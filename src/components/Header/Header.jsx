import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Feeling hungry? Tap to order your favorite food and let your stomach do a happy dance. A delicious feast is on its way to satisfy your cravings!</p>
         <a href='#explore-menu' >
         <button>View Menu</button>

         </a>
        
      </div>
    </div>
  )
}

export default Header