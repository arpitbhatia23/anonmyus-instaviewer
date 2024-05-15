import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Conf from '../conf/conf';
const Post = () => {
  const username = useSelector(state=>state.data)
  const user =username?.data?.data?.username 
  console.log(user)
  const [post ,setpost]=useState()
const [loading, setloading]=useState(true)
const [error,seterror]=useState(false)

  const search = async()=>{
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
setpost(data)
setloading(false)
    }
    catch (error){
      console.log(error)
      seterror(ture)
      setloading(false)
    }
  }
  useEffect(()=>{
    if(user){
    search()
    }
  },[user])
if(loading){
  return <div>Loading...</div>
}
if(error){
  return <div>{error}</div>
}
  return  (
  <div className='w-full    text-black'>
  {user && post&&post.data?(
    <div className='grid grid-cols-1 md:grid-cols-4 m-2 gap-6'>
      {post.data.items. map((items, index) => (
        <div key={index} className=' flex justify-center'>
          {items.carousel_media ? (
            <Carousel  showThumbs={false}   showStatus={false} className=' h-[400px] w-[350px] flex justify-center bg-black'>                      
           { items.carousel_media.map((carouselItem, carouselIndex) => (
              <div key={carouselIndex} className='flex   justify-center  '>
                <img src={carouselItem.thumbnail_url} alt='image' className='mt-4 bg-slate-400 text-center'/>
              </div>
            ))}</Carousel> 
          ) : items.media_name === 'album_item' ? (
            <div className='bg-black'>
              <img src={items.thumbnail_url} alt={`album-item-${index}`} className='mt2'/>

            </div>
          ) : items.media_name === 'post' ? (
            <div className='bg-black'>
              <img src={items.thumbnail_url} alt={`post-item-${index}`} className='h-[400px] w-[350px] mt-2' />

            </div>
          ) : items.is_video ? (
            <div className='bg-black'>
              <video src={items.video_url} controls className='h-[400px] w-[350px] bg-slate-400 mt-2'></video>

            </div>
          ):null}
        </div>
      ))}
    </div>
  ):null}
</div>
)
}


export default Post
