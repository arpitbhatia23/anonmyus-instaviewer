import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Conf from '../conf/conf';
import { useCallback } from 'react';
import Button from './Button';
import { setpost } from '../store/authslice';
const Post = () => {
  const username = useSelector(state=>state.data)
  const user =username?.data?.data?.username 
  console.log(user)
  const dispatch=useDispatch()
const post = useSelector(state=>state.post.posts)
const [loading, setloading]=useState(true)
const [error,seterror]=useState(false)
console.log(post)
  const search =useCallback( async()=>{
    seterror(false)
    setloading(true)
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${user}&url_embed_safe=true`
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
dispatch(setpost(data))
setloading(false)
    }
    catch (error){
      console.log(error)
      seterror(true)
      setloading(false)
    }
  },[])
  useEffect(()=>{
    if(user){
    search()
    }
  },[user])
  if(user){
if(loading){
  if(user){
  return <div>Loading...</div>}}
}
if(error){
  return <div>{error}</div>
 
}

 const  renderMedia=(item, index)=>{
  
if(item.carousel_media){

  return(< div>
 <Carousel  showThumbs={false} thumbWidth={'400px'} showIndicators={false} showStatus={false} className='w-[350px] flex justify-center '>                      
          { item.carousel_media.map((carouselItem, carouselIndex) => (
             <div key={carouselIndex} >
               <img src={carouselItem.thumbnail_url} alt='image' className='mt-4 h-[400px] w-[350px] border border-gray-950 text-center'/>
             <a href={carouselItem.thumbnail_url} target='_blank'><Button className='m-2'  > view </Button> </a> 
         </div>
            
              
         ))}</Carousel> 
        
       
        </div>
      )
 }
 if(item.media_name==='album_item'){
  return(<div>

 <img src={item.thumbnail_url} alt={`album-item-${index}`} className='mt2 border border-gray-950'/>
 <div className='flex' >
 <a href={item.thumbnail_url} target='_blank'><Button className='m-2'  > view </Button> </a> 
 </div>
      </div>
)
 }
if(item.media_name==="post"){
  return(<div>
  
 <img src={item.thumbnail_url} alt={`post-item-${index}`} className='h-[400px] w-[350px] mt-2 border border-gray-950' />
  <a href={item.thumbnail_url} target='_blank'><Button className='m-2'  > view </Button> </a> 
     
      </div>
  )
}
if(item.is_video){
  return(
<div>
 <video src={item.video_url} controls className='h-[408px] w-[350px] bg-slate-400 mt-2 border border-gray-950'></video>
 <div > 
 <a href={item.video_url} target='_blank'><Button className='m-2'  > view </Button> </a> 
      </div>
      </div>
  )
} return null;
}
return (
  <div className="w-full">
    {user && post?.data ? (
      <div className="grid grid-cols-1 md:grid-cols-4">
        {post.data.items.map((item, index) => (
          <div key={index} className="flex justify-center">
            {renderMedia(item, index)}
          </div>
        ))}
      </div>
    ) : null}
  </div>
);


}


export default Post
