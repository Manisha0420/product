import React, { lazy } from 'react'
import { Route, Routes} from 'react-router'
const Products = lazy(()=>import("../pages/Products.jsx"));
const About = lazy(()=>import("../pages/About.jsx"));
const Signin = lazy(()=>import("../pages/Signin.jsx"));
const Signup = lazy(()=>import("../pages/Signup.jsx"));
const PageNotFound = lazy(()=>import("../pages/PageNotFound.jsx"));

const MainRoute = () => {
  return (
    <Routes>
                    <Route path="/" element={<Products/>}/> 

                    <Route path='/about' element={<About/>}/>

                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/signup' element={<Signup/>}/>

                    <Route path='*' element={<PageNotFound/>}/>
    </Routes>

  )
}

export default MainRoute
