import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate}from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Profilenav = () => {
    const profilenav=[
        {id:1,
        names:'stories',
      slug:'/stories'
      },
        {
            id:2,
            names:'posts&reel',
            slug:'/post'

        },
        {
            id:3,
            names:'reels',
            slug:'/reels'

        },
       
    ]
    const profiledata=useSelector(state=>state.data)
    const profiledetail=profiledata?.data?.data
  return (<>
  <Helmet>
      <title>User Profile Navigation</title>
      <meta name="description" content="Navigate through user profile sections including stories, posts, and reels. Explore different media types and user-generated content." />
      <meta name="keywords" content="profile navigation, user stories, user posts, user reels, Instagram profile navigation" />
      <meta property="og:title" content="User Profile Navigation" />
      <meta property="og:description" content="Explore user profile sections such as stories, posts, and reels. Navigate through various media types with ease." />
      <meta property="og:type" content="website" />
      {/* Add an image URL relevant to your profile page */}
      <meta property="og:image" content="URL-to-your-image.jpg" />
    </Helmet>

  {profiledetail&&
    <div className=' flex justify-center items-center space-x-24  font-cursive  text-2xl py-8'>
      { profilenav.map(({id,names,slug})=>(
     <ul>
 <li key={id}  > <NavLink to={slug} className={({isActive})=>`${isActive?'text-red-500 border-b-2 border-b-red-500  ':' '} `}>{names}</NavLink> </li> </ul>
      ))}
    </div>
     }

    </>
  )
}

export default Profilenav
