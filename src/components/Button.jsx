import React from 'react'

function Button({children ,
    type='button',
    className,
    bgColor="bg-blue-600",
    textcolor="text-white",
    ...props

}) {
  return (
   <button className={`px-4 py-4 rounded-lg ${bgColor} ${textcolor} ${className}`} {...props}>
    {children}
   </button>
  )
}

export default Button
