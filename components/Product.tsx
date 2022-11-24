import Image from 'next/image'
import React,{useState} from 'react'
import { product } from '../typings'
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/cartSlice';
import {addcart} from "../redux/functions"

interface props{
    product:product
}
const Product = ({product}:props) => {
  const [qty,setQty] = useState(1)
  const dispatch= useDispatch();

  return (
    <div className='w-full lg:w-64 h-64 rounded-md flex flex-col gap-1 bg-slate-700 justify-center items-center my-3 '>
<div className='relative w-48 h-48 lg:w-28 lg:h-28'>
<Image   src={urlFor(product.image[0]).url()} objectFit='contain' layout='fill'/>
</div>

<div className='flex justify-between w-full p-2'>
    <div>
    <h4 className='font-bold text-md text-white capitalize'>{product.title}</h4>
    <h6 className='font-bold text-sm text-white'>${product.price}</h6>
    <select value={qty} onChange={(e:any)=>setQty(e.target.value)} className='w-auto'>
      <option value=''>select</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>
<option value='9'>9</option>
    </select>
    </div>
  

    <div className='w-12 h-12  rounded-full cursor-pointer flex justify-center items-center bg-gradient-to-r from-pink-500 to-violet-500 text-white' onClick={()=>addcart(dispatch,product,qty)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

</div>
</div>

    </div>
  )
}

export default Product