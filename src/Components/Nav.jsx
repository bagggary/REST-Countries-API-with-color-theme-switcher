import React from 'react'
import light from'../assets/light.svg';
import dark from'../assets/dark.svg';

export default function Nav() {
  return (
  <header>
    <div className='container'>
        <nav>
            <h1>Where in the world?</h1>
            <div className='theme'>
                <img src={light} alt="themeIcon" />
                <div>Dark Mode</div>
            </div>
       </nav>
    </div>
  </header>
  )
}
