import React, { useCallback, useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import Button from './Button'
import Conf from '../conf/conf'
const Stories = () => {
 const username = useSelector(state=>state.data)
 const user =username?.data?.data?.username 
const [stories,setstories]=useState(null)
const [loading,setloading]=useState(true)
const[error,seterror]=useState(false)
 console.log(user)

    const search = useCallback( async()=>{
      seterror(false)
      setloading(true)
      const params = new URLSearchParams({ username_or_id_or_url: user && user, url_embed_safe:true });

        const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/stories?${params}`
        const option = {
          method :'GET',
          headers:{
            'X-RapidAPI-Key':Conf.apiKey,
                      'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
          }
      
        }
        try{const response = await fetch(url,option)
          const data =await response.json()
         console.log(data)
         setstories(data)
         }
        catch(error){ 
          console.log(error)
          seterror(error.message)
        }
      setloading(false)},[user])
useEffect(()=>{
  if(user){
  search()}
},[user])

// const handleDownload = async (url) => {
//   try {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const urlObject = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = urlObject;
//     a.download = 'story.mp4'; // You can customize the filename here
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   } catch (error) {
//     console.error('Error downloading the file:', error);
//   }
// };
const items=stories?.data?.items
return !loading? (
    <div className='w-full    text-black text-center'>   {user&&stories&&stories.data&&stories.data.items? <div className='grid grid-cols-1 justify-items- md:grid-cols-4 center m-2 gap-4'> 
      {error && <div> {error}</div>}
      {items.map(items=>(
       <div  key={items.id}>

       <div className='bg-black flex justify-center'>
    {items.media_type===2?(
        <video  src={ items&&items.video_url} controls className='h-[400px] w-[350px]' ></video> 
        
      )
      
      :items.media_type===1
      ?(
        <img src={items.thumbnail_url} alt=""  className='h-[400px] w-[350px]'/>
      ):null }
        </div>
      {/* <Button className='mt-2' onClick={() => handleDownload(items.video_url)}>download</Button> */}

       </div>
      )
)}
  
      </div>:
   stories?.data?.items?.lenght===0?(<div>no stories</div>):null

    }
    </div> ):user&&
    <div className='w-full  flex flex-col  items-center text-black text-center'>
      loading...
    </div>
  
}

export default Stories
