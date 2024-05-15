import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authslice'
function Logout() {
    const dispatch =useDispatch()
    const logoutHandler=()=>{
        authservice.logout().then(dispatch(logout()))
    }
  return (
   <button className='inline-block px-6 py-2 duration-200  text-white hover:bg-blue-500 rounded-full' onClick={logoutHandler}> logout </button>
  )
}

export default Logout
