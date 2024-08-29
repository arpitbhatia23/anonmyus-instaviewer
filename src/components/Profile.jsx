import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
function Profile({
    className="",    
}) {   const [profilepic,setprofilepic]=useState(null)

   const userdata = useSelector(state=>state.data)
   console.log(userdata)
const userdetails = userdata?.data?.data 
useEffect(() => {
  if (userdetails) {
      setprofilepic(userdetails.profile_pic_url);
  }
  
}, [userdetails]);


console.log(profilepic)
  return ( <> 
  <Helmet>
        <title>User Profile - View and Explore</title>
        <meta name="description" content="View and explore the user profile. Check out their profile picture, username, full name, follower count, and biography." />
        <meta name="keywords" content="user profile, profile picture, Instagram user, username, follower count, biography" />
        <meta property="og:title" content="User Profile - View and Explore" />
        <meta property="og:description" content="Explore user profile details including profile picture, username, full name, follower count, and biography." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.yourwebsite.com/profile" />
        {/* Add a relevant image URL here */}
        <meta property="og:image" content="URL-to-your-image.jpg" />
      </Helmet>
  
  { userdetails ?(
    <div className={`  w-full  font-cursive ${className} flex flex-col  justify-start items-center  text-2xl  `}>
        <div className=' flex gap-y-4 items-start pl-2 py-2'><img   src={ profilepic } alt="profile" className=' bg-slate-950 h-24 w-24 rounded-full' /></div>
    <div className=' font-cursive'><span>{userdetails&&userdetails.username} </span> 
    <div className='flex justify-center items-center'>{userdetails&&userdetails.full_name}</div>  </div>
<div className='flex flex-row text-xl '>
<span className=' px-5'> followers {userdetails&&userdetails.follower_count} </span> 
<span className=' px-5'> followeing  {userdetails&&userdetails.following_count} </span>

</div>
<span className='px-5 text-xl '>{userdetails&&userdetails.biography}  </span>
  

    </div>) : (<div className=' text-4xl text-center font-cursive py-24'>{userdata&&userdata.data&&userdata.data.detail} </div>) }
    
    </>
  )
}

export default Profile
