// import type { NextPage } from 'next'
import { Tab } from '@headlessui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Product from '../components/Product'
import { useSelector } from "react-redux";
import { fetchCategories,fetchProducts } from '../functions/getCat'
import { category,product, RootState } from '../typings'
import {getSession} from "next-auth/react"
import {cartState} from "../redux/cartSlice";
// import {category} from 
import type {Session} from "next-auth";

interface props{
  catsz:[category],
  products:[product],
  session:Session | null,
}
const Home = ({catsz,products}:props) => {
  // console.log(products);
  const { cartItem } = useSelector((state:RootState) => state.cart);
  // console.log(cartItem);
  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === catsz[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };
  return (
    <div className="">
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="relative h-[200vh]">
        <Landing/>
        </main>
        <section className='relative z-40 -mt-[100vh] min-h-screen  bg-black py-5'>
        <div className='max-w-7xl mx-auto px-7'>
<h1 className='text-white capitalize font-extrabold text-4xl text-center my-3 '>new promos</h1>
{/* tabs */}
{/* <div className="flex gap-2 justify-center relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-slate-700 before:top-4 before:left-3/4 before:text-center before:-translate-x-1/2  text-slate-700"
>
<span>Mac</span>
<span>Mac</span>
<span>Mac</span>
<span>Mac</span>
</div> */}

<Tab.Group>
            <Tab.List className="flex justify-center">
              {catsz.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-3 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#d696dd] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className=" pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel flex flex-wrap gap-3">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel flex flex-wrap gap-3">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel flex flex-wrap gap-3">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel flex flex-wrap gap-3">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
</div>
        </section>
      {/* <h3 className='text-red-500'>DOG FINDER</h3> */}
      {/* <section className='relative z-40 -mt-[100vh] min-h-screen  bg-red-500 py-5'>
        guy
        </section> */}

   
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
const catsz =  await fetchCategories();
const products = await fetchProducts();
const session = await getSession(context)
return {
  props: {
    catsz,
    products,
    session,
  },
}; 
};