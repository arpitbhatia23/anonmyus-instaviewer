import Search from '../components/Search'
import Profile from '../components/Profile'
import Profilenav from '../components/Profilenav'
import Stories from '../components/Stories'
import {BrowserRouter as Router , Route ,Link, Routes, Outlet}from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function Home() {
 


  return (
    
        <div className='w-full min-h-96 mt-4 text-center flex flex-col items-center justify-center '>
       <div className='text-center  text-2xl font-cursive'>view insta story & post anonymously</div>
       <Toaster/>

           <div> <Search/></div>  
               <Profile/> 
               <Profilenav/>
               <Outlet/>
            
    </div>
  )
}

export default Home
