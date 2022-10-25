import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header_content">
                <HeaderLogo />
                <HeaderNav />
            </div>
        </div>
    </div>
  )
}
