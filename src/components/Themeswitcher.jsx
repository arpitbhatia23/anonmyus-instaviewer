import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { settheme } from '../store/authslice'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
function Themeswitcher() {
    const dispatch = useDispatch()
     const toggletheme=()=>{
        dispatch(settheme(theme === 'light' ? 'dark' : 'light'))
     }
     const theme = useSelector((state)=>state.theme.theme)
  return (
    <button onClick={toggletheme} className='px-4 py-2  text-xl  flex justify-center items-center'>
        {theme==='light'?<IoSunnyOutline/>:<IoMoonOutline/>}
        
    </button>
  )
}

export default Themeswitcher
