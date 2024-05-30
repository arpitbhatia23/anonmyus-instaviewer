import React, { useCallback, useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import Button from './Button'
import Conf from '../conf/conf'
import Usequery from './Usequery'
const Stories = () => {
 const username = useSelector(state=>state.data)
 const user =username?.data?.data?.username 
const {post,error,loading}=Usequery(`https://instagram-scraper-api2.p.rapidapi.com/v1/stories?username_or_id_or_url=${user}&url_embed_safe=true`)

    console.log(post)


 const rendermedia=(items)=> {
  
   if(items.media_type===2){
   return ( <div className='mt-2'>
   <video  src={ items&&items.video_url} controls className=' h-[400px] w-[350px] border border-black mt-2' ></video> </div>
  )
   }
   if (items.media_type===1){
    return( <div className='mt-2'>
    <img src={items.thumbnail_url} alt=""  className='h-[400px] w-[350px] border border-black mt-2'/>
    </div>
    )
   } 
   return
 }

 if (loading){
  if(user){
    return(
      <div>loading...</div>
    )}
}
if (error){
  return(
    <div>{error}</div>
  )
}
if(post?.data?.items.length === 0){
  return(
    <div>no stories</div>
  )
}

return (
  <div className=' w-full'>
    {
      user&&post&&post.data&&<div className='grid grid-cols-1 md:grid-cols-4'>
        {
          post.data.items.map((items,id)=>(
            <div key={id} className='flex justify-center py-8  mt-8'>
              <div className=''>
              {rendermedia(items,id)}</div>
            </div>

          ))
        }
        </div>
    }

  </div>
)







}

export default Stories
