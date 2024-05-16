import Search from '../components/Search'
import Profile from '../components/Profile'
import Profilenav from '../components/Profilenav'
import Stories from '../components/Stories'
import {BrowserRouter as Router , Route ,Link, Routes, Outlet}from 'react-router-dom'
function Home() {
 


  return (

    
        <div className='w-full min-h-96 mt-4 text-center'>
              <Search/>
               <Profile/> 
               <Profilenav/>
               <Outlet/>
           

            
    </div>
  )
}

export default Home
