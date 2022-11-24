import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {signIn,signOut,useSession} from "next-auth/react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../typings";
// interface sessionz {
//     user:{
//         image:string
//     }
// }
const Header = () => {
  const {data:session} = useSession();
  const { cartItem,cartTotalAmount } = useSelector((state:RootState) => state.cart);
    //  const  session=false;
  return (
    <header className='sticky top-0 z-30 bg-[#E7ECEE] p-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link href='/'>
      <div className='relative w-10 h-10 cursor-pointer opacity-75 transition hover:opacity-100'>
       <Image src='https://rb.gy/vsvv2o' layout='fill' objectFit='contain' />
       </div>
      </Link>
     
        <div className='hidden md:flex space-x-8 items-center cursor-pointer '>
            <Link  href='/product' className=''>
            <h6 className='text-md font-bold opacity-75 transition hover:opacity-100 '>
                Product
            </h6>
            </Link>

            <Link  href='/explore' className=''>
            <h6 className='text-md font-bold opacity-75 transition hover:opacity-100'>
                Explore
            </h6>
            </Link>
            <Link  href='/support' className=''>
            <h6 className='text-md font-bold opacity-75 transition hover:opacity-100'>
                Support
            </h6>
            </Link>
            <Link  href='/business' className=''>
            <h6 className='text-md font-bold opacity-75 transition hover:opacity-100'>
                Business
            </h6>
            </Link>
        </div>
{/* <img src='https://dog.ceo/img/dog-api-logo.svg' className='w-10 h-10 object-cover' alt=''/> */}
<div className='flex items-center space-x-3 cursor-pointer'>
    <span className=' font-bold'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
    </span>
{

cartItem &&
<Link href='/checkout'>
<span className='relative '>
<span className='absolute -top-2 -right-2  h-4 w-4 rounded-full flex items-center justify-center bg-red-500 text-white text-sm font-bold p-1 '>{cartItem.length}</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

</span>
</Link>
}
{
session?(
    <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={20}
            height={20}
            onClick={() => signOut()}
          />
):

<span className='font-bold' onClick={()=>signIn()}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

</span>
}


</div>
        </div>

    </header>
  )
}

export default Header;