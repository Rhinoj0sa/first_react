import React from 'react'

function Header() {
  return (
    <header className='header'>
        <img src="src/assets/react.svg" alt="React Logo" width="40px"/>
        <nav>
            <ul className='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul> 
        </nav>

    </header>
  )
}

export default Header