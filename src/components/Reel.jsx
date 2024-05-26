import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Conf from '../conf/conf'

const Reel = () => {
  const [reel,setreel]=useState()
  const username = useSelector(state=>state.data)
  const user =username?.data?.data?.username 
console.log(user)
    const search = async()=>{
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/reels?username_or_id_or_url=${user}`
    const option = {
      method : 'GET',
      headers:{
        'X-RapidAPI-Key': Conf.apiKey,
                  'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
      }

    }
    try {
      const response =await fetch(url,option)
      const data = await response.json()
setreel(data)
console.log(data)
    }
    catch (error){
      console.log(error)
    }}

const items=reel?.data?.items

useEffect(()=>{
  if(user){
  search()
  }
},[user])
  
  return (<>
   <div className='w-full   '>   {user&&reel&&reel.data&&reel.data.items?
    <div className=' grid grid-cols-1 md:grid-cols-4 m-2 gap-6  text-center'> 
      
      
      {items.map(items=>(
       <div  key={items.id}>
  
       <div className='  flex  justify-center '>
        <video  src={ items&& items.video_url} controls className='h-[600px] w-[400px] mt-3 bg-slate-500' ></video> <br />

        </div>
       </div>
      )
  )}
  
      </div>:
     user?<div > loading reel</div>: reel?.data.detail&&<div>{data.detail}</div>
    }
    </div>
  
  
  
    </>
  )
}

export default Reel
