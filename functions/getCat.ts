import {sanityClient,urlFor} from "../sanity"
import { category } from "../typings";
import axios from "axios";

// export const getCat=async ()=>{
//     const res = `*[_type=="category"]{
//         _id,
//          title,
//     description,
//         }`
//         const cats = await sanityClient.fetch(res);
//       return {
//         props: {
//           cats
//         },
//       };

// }

export  const fetchCategories = async () => {
    const res = await axios(
      `http://localhost:3000/api/getCategories`
    );
  
    // const {result} = res.data
    const categories = res.data.data;
//   console.log(res)
    return categories;
  };

  export  const fetchProducts = async () => {
    const res = await axios(
      `http://localhost:3000/api/getProducts`
    );
  
    // const {result} = res.data
    const products = res.data.data;
//   console.log(res)
    return products;
  };