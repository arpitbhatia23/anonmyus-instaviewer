import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {Logout,Container,Login, Logo} from '../index'
function Header() {
   const  authstatus  = useSelector((state)=>state.auth.status)
   const navigate = useNavigate()
   const navitems = [{
    name:'Home',
    slug:"/home",
    active:authstatus,
   },
   {
    name:'Login',
    slug:"/login",
    active:!authstatus,
   },
   {
    name:"Signup",
    slug:"/signup",
    active:!authstatus

   }

]
  return (
    <header className='py-3 shadow bg-slate-900'>
        <Container>
            <nav className='flex'>
            <div className='mr-4'>
                <Link to='/'>
                    <Logo className='text-white'/>
                </Link>
            </div>
            <ul className='flex ml-auto' >

           {navitems.map((item)=>item.active?(
            <li key={item.name}>
            <button className='inline-block px-4 py-2 duration-200 text-white hover:bg-blue-600 rounded-full' onClick={()=>navigate(item.slug)}>{item.name}</button>


            </li>

           ):null)}
            <li>
                {
                    authstatus&&(
                        <li>
                        <Logout/>    
                        </li>
                    )
                }
            </li>

            </ul>

            </nav>
        </Container>

    </header>
  )
}

export default Header
