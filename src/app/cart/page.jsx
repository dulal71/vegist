'use client'
import { GlobalContext } from '@/GlobalContext/ContextProvider';
import Image from 'next/image';
import React, { useContext } from 'react';

const Cart = () => {
    const {cart,setCart} =useContext(GlobalContext)
    const increase = ()=>{
      
    }
    return (
        <div>
          {
            cart.map(item=> <div key={item.id} className='max-w-[500px] mx-auto flex justify-between items-center bg-white shadow p-5 my-5 border-gray-300'>
              <div>
 <Image src={item.image_link} width={100} height={100} alt='image'></Image>
 <p className='truncate w-40'> {item.dish_name}</p>
              </div>
           <div>
            <p className='font-bold text-xl'>Price</p>
            <p className='bg-red-400 px-2 text-white font-bold rounded-md'>{item.price}</p>
           </div>
           <div className='flex flex-col'>
            <p className='font-bold text-xl'>Quantity</p>
            <div className='flex gap-2 items-center'>
  <button className='font-semibold text-xl' onClick={()=>{
    setCart(cart.map(p=> p.id===item.id?{...p,quantity:p.quantity-1}:p))
  }}>-</button><span >{item.quantity}</span><button className='font-semibold text-xl' onClick={()=>{
    setCart(cart.map(p=>p.id === item.id?{...p,quantity:p.quantity+1}:p))
  }}>+</button>
            </div>
          
           </div>
           <div>
            <span className='font-bold text-red-700 text-xl'>Total</span>
            <p>{Number(item.quantity)*Number(item.price)}</p>
           </div>
              
             </div>)
          }
        </div>
    );
};

export default Cart;