import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate}from 'react-router-dom'
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
