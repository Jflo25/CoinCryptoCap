import React, {useContext} from 'react'
import {HiSun, HiMoon} from 'react-icons/hi'
import {ThemeContext} from '../context/ThemeContext'


const ToggleDark = () => {
   const {theme, setTheme} = useContext(ThemeContext);

 
  return (
    <div>
      {theme === 'dark' ? (
        <div onClick = {()=> setTheme(theme ==='dark' ? 'light' : 'dark')} > 
        <HiSun/> Light Mode
        </div>
      ) : (
        <div onClick = {()=> setTheme(theme ==='dark' ? 'light' : 'dark')}> 
        <HiMoon/> Dark Mode
       </div>
       )
    }
    </div>
  )
}

export default ToggleDark