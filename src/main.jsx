import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import { Route, RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {Authlayout} from './components/index.js'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup'
import Stories from './components/Stories.jsx'
import Post from './components/Post.jsx'
import Reel from './components/Reel.jsx'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:(<Authlayout Authentication>
                   <Home>
                    </Home>
                     </Authlayout>  ),
                   children:[ {
                    path:'/stories',
                    element:<Stories/>
                },{
                    path:'/post',
                    element:<Post/>,
                },{
                    path:'/reels',
                    element:<Reel/>,
                }
                ]
               
            },
            {
                path:'/login',
                element:(<Authlayout Authentication={false}>
                    <Login/>
                    </Authlayout>)
            },
            {
                path:'/signup',
                element:(<Authlayout Authentication={false}>
                    <Signup/>
                    </Authlayout>)
            },
           
            
        ]

        
        
    },
   
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

</React.StrictMode>
 
)
