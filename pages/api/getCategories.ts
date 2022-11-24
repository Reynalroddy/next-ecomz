import { NextApiRequest,NextApiResponse } from "next";

// import  sanityClient  from "@sanity/client";
import { sanityClient } from "../../sanity";
//  const config = {
    
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     token:process.env.SANITY_API_TOKEN,
//     useCdn: process.env.NODE_ENV === "production",
//   };

//    const client = sanityClient(config);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const query = `*[_type=="category"]{
            _id,
             title,
        description,
            }`
            const result = await sanityClient.fetch(query);
            return  res.status(200).json({ data: result })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'cant get category',error })
    } 
//    return  res.status(200).json({ data: result })
}
