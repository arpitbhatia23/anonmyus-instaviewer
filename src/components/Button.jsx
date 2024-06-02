import React from 'react'
import { useSelector } from 'react-redux'

function Button({children ,
    type='button',
    className,
    bgColor="bg-blue-600",
    textcolor="text-white",
    ...props

}) {
  const theme = useSelector(state=>state.theme.theme)
  return (
   <button className={`px-4 py-4 rounded-lg ${bgColor} ${textcolor} ${className} ${theme==="dark"? 'bg-blue-600':'bg-red-500 text-black'}`} {...props}>
    {children}
   </button>
  )
}

export default Button
