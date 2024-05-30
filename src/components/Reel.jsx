import { useSelector } from 'react-redux'
import { Button } from "../components/index";
import Usequery from './Usequery';
const Reel = () => {
  const username = useSelector(state=>state.data)
  const user =username?.data?.data?.username 
console.log(user)
const {post,error,loading}=Usequery(`https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${user}`)

const items=post?.data?.items
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
  return (<>
   <div className='w-full   '>   {user&&post&&post.data&&post.data.items?
    <div className=' grid grid-cols-1 md:grid-cols-4 m-2 gap-6  text-center'> 
      
      
      {items.map(items=>(
       <div  key={items.id}>
  
       <div className='  flex '>
        <video  src={ items&& items.video_url} controls className='  border border-gray-950' ></video> <br />

        </div>
        <a href={items.video_url} target='_blank' download="true"><Button className='m-2'  > view </Button> </a> 

       </div>
      )
  )}
  
      </div>:null
    }
    </div>
  
  
  
    </>
  )
}

export default Reel
