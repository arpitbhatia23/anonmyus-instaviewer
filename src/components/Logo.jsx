import React from 'react'

function Logo({width='100px',
  className=''
}) {
  return (
    <div className={`font-cursive text-4xl text-center ${className}`}>instaviewer </div>
  )
}

export default Logo
