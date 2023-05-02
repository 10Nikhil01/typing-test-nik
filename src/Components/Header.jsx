import React from 'react'
import AccountIcon from './AccountIcon'
import CompareButton from './CompareButton'
import LOGO from '../Logos/logo_transparent.png'
const Header = () => {
  return (
    <div className="header" sx={{display:"block", width:"100%"}}>
        <div className="logo">
              <img className='logo-image' src={LOGO}/>
        </div>
              <CompareButton/>

        <div className="user-logo">
            <AccountIcon />
        </div>
    </div>
  )
}

export default Header