import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Landing = () => {
  return (
    <section className='bg-[#E7ECEE]  sticky top-0'>
        <div className='max-w-7xl mx-auto px-7'>
<div className='w-full grid grid-cols-1 md:grid-cols-2 h-screen items-center'>
<div className=''>
<h4 className='capitalize  font-bold text-5xl leading-tight'><span className='bg-gradient-to-r from-pink-500 to-violet-500  bg-clip-text text-transparent'>Powered</span><br/> By intellect <br/> driven by values</h4>
    

    <div className='flex my-4 gap-4 items-center '>

       <Button title='buy now' color={'text-white'} background='bg-red-400'/>
        <button className='border-0 border-black font-bold capitalize text-sm cursor-pointer hover:border-b-2 transition-all ease-in-out'>learn  more</button>
    </div>
</div>

<div className='hidden md:block pt-0 md:pt-10'>
    <div className='relative w-full h-[600px]'>
    <Image src='/iphone.png' layout='fill' objectFit='contain'/>
    </div>
</div>

</div>

        </div>
    </section>
  )
}

export default Landing