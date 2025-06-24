import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {asyncupdateuser} from "../../features/actions/userAction"
const Cart = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.userReducer);

  const AddHandler = (index) =>{
     const copyuser = {...user , cart:[...user.cart]};
     copyuser.cart[index]={
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity+1,
     }
     dispatch(asyncupdateuser(copyuser.id , copyuser))
  }
 
  const SubstractHandler = (index)  =>{
    const copyuser = {...user , cart:[...user.cart]}

    if (copyuser.cart[index].quantity <= 1) {
      copyuser.cart.splice(index ,1)
    } else {
      copyuser.cart[index]={
        ...copyuser.cart[index],
        quantity:copyuser.cart[index].quantity-1,
      }
    }
  }

  const cartlist = user?.cart?.map((o,i)=>{
    return(
      <div
           key={i}
                className="items-center rounded mb-5 bg-zinc-200 flex justify-between p-5"  
      >
        <img src={o.product.image}
             className='w-[10vmax] h=[10vmax]'
        />
        <h1>{o.product.title}</h1>
        <div>
            <button onClick={()=>AddHandler(i)} className='p-2 border'>+</button>
            <span>{o.quantity}</span>
            <button onClick={()=>SubstractHandler(i)} className='p-2 border'>-</button>

        </div>

      </div>
    )
  })
  return (
    <div>{cartlist}</div>
  )
}

export default Cart
