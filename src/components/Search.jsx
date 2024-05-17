import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineSearch } from "react-icons/ai";
import  {setdata}  from '../store/authslice';
import Conf from '../conf/conf';
function Search({className=''}) {
    const handelclick =()=>{
        search (query) 
     console.log('click')
    }
    const handelpress=(event)=>{
        if(event.key==='Enter'){
            search(query)
            console.log('click')
        }
    }
    const [query ,setquery ]=useState('')
    const dispatch =useDispatch()
    const search = async(user)=>{
        console.log(user)
        const params = new URLSearchParams({ username_or_id_or_url: user && user, url_embed_safe:true });
        const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?${params}`
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
         dispatch(setdata(data))
         setquery('')
         }
        catch(error){ 
          console.log(error)
        }}
    

  return (

    <div className={`flex w-full py-4  px-2 ${className} md:justify-end`}>
      <input type="text"  onKeyPress={handelpress}  onChange={(e)=>setquery(e.target.value)}value={query}  placeholder='username or userid_link' className='rounded-xl indent-2  border-2 text-black '/> <span className='text-2xl text-white px-2 ' onClick={handelclick}>
        <AiOutlineSearch/></span>
    </div>
  )
}

export default Search
