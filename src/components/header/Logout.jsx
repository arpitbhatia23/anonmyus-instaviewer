import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authslice'
import toast from 'react-hot-toast'
function Logout() {
    const dispatch =useDispatch()
    const logoutHandler=()=>{
        authservice.logout().then(dispatch(logout()))
        toast.success("logout succesfully")
    }
  return (
   <button className='inline-block px-6 py-2 duration-200   hover:bg-orange-500 rounded-full' onClick={logoutHandler}> logout </button>
  )
}

export default Logout
