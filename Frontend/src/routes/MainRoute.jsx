import React, { lazy } from 'react'
import { Route, Routes} from 'react-router'
import Auth from './Auth.jsx';
import Setting from '../pages/user/Setting.jsx';
import Unauth from './Unauth.jsx';
import Cart from '../pages/user/Cart.jsx';
import ProductDetails from '../pages/admin/ProductDetails.jsx';
import CreateProduct from '../pages/admin/CreateProduct.jsx';
const Products = lazy(()=>import("../pages/Products.jsx"));
const About = lazy(()=>import("../pages/About.jsx"));
const Signin = lazy(()=>import("../pages/user/Signin.jsx"));
const Signup = lazy(()=>import("../pages/user/Signup.jsx"));
const PageNotFound = lazy(()=>import("../pages/PageNotFound.jsx"));

const MainRoute = () => {
  return (
    <Routes>
                    <Route path="/" element={<Products/>}/> 

                    <Route path='/about' element={<About/>}/>

                    <Route path='/signin' element={
                      <Unauth>
                        <Signin/>
                      </Unauth>
                    }/>
                    <Route path='/signup' element={
                      <Unauth>
                        <Signup/>
                      </Unauth>
                    }/>

                    <Route path='/setting' element={
                       <Auth>
                          <Setting/>
                       </Auth>
                    }/>

                    <Route path='/create-product' element={
                       <Auth>
                          <CreateProduct/>
                       </Auth>
                    }/>

                     <Route path='/productDetail/:id' element={
                       <Auth>
                          <ProductDetails/>
                       </Auth>
                    }/>

                     <Route path='/cart' element={
                       <Auth>
                          <Cart/>
                       </Auth>
                    }/>

                    <Route path='*' element={<PageNotFound/>}/>
    </Routes>

  )
}

export default MainRoute
