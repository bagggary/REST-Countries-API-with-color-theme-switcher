import React from 'react'
// import light from'../assets/light.svg';
// import dark from'../assets/dark.svg';
// import { ReactComponent as Light } from '../assets/light.svg';
// import { ReactComponent as Dark } from '../assets/dark.svg';
import {UserContextConsumer} from "../ThemeContext"
export default function Nav() {
  return (
      <UserContextConsumer>
           {({theme, changeTheme}) => (
           <header className={theme === 'light' ? '' : `header-${theme}`}>
            <div className='container'>
               <nav>
                <h1>Where in the world?</h1>
                 <div className='theme ' onClick={changeTheme}>
                  {/* <img src={theme === 'light' ? light : dark} alt="themeIcon" /> */}
                  <i class={`fa-${theme === 'light' ? 'regular' : 'solid'} fa-moon`}></i>
                  <div>{`${theme} mode`}</div>
                   </div>
                    </nav>
                     </div>
                      </header>
              )}
            </UserContextConsumer>
  )
}
