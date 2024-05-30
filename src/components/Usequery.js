import { useState ,useEffect} from "react"
import { useCallback } from "react"
import Conf from "../conf/conf"
const Usequery=(urlpath)=>{
const [post,setpost]=useState("")
const [loading,setloading]=useState(true)
const [error,seterror]=useState(false)
const search =useCallback( async()=>{
    seterror(false)
    setloading(true)
    const url = urlpath
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
      seterror(error.message)
      setloading(false)
    }
  },[])
  useEffect(()=>{
    if(urlpath){
    search()
    }
  },[urlpath])

 return {error,loading,post}
}
export default Usequery