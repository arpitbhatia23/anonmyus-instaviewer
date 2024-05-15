import { useEffect, useState } from 'react'
import { login,logout } from './store/authslice'
import authservice from './appwrite/auth'
import { useDispatch } from 'react-redux'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  const dispatch = useDispatch()
  const [loading ,setloading] = useState(true)
useEffect(()=>{
authservice.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
})
.finally(() => setloading(false))
},[])

  return !loading ? (
    <>
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block '>
        <Header/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
      </div>

    </div>
   
    </>
  ):
  <div className="border border-blue-300 shadow rounded-md p-4 w-full min-h-screen mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-400 h-52 w-52"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-12 bg-slate-400 rounded"></div>
      <div className="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-12 bg-slate-400 rounded col-span-2"></div>
          <div class="h-12 bg-slate-400 rounded col-span-1"></div>
        </div>
        <div class="h-12 bg-slate-400 rounded"></div>

      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-12 bg-slate-400 rounded col-span-2"></div>
          <div className="h-12 bg-slate-400 rounded col-span-1"></div>
        </div>
        <div className="h-12 bg-slate-400 rounded"></div>
        
      </div><div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-12 bg-slate-400 rounded col-span-2"></div>
          <div className="h-12 bg-slate-400 rounded col-span-1"></div>
        </div>
        <div className="h-12 bg-slate-400 rounded"></div>
        
      </div>
    </div>
  </div>
</div>
}

export default App
