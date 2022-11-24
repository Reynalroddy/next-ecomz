import store from "./redux/store";

export interface Post {

    _id:string;
    _createdAt:string;
    title:string;
    author:{
        name:string;
        image:string;
    };
    description:string;
    publishedAt:string;
    comments:[comment];
    mainImage:{
        asset:{
            url:string;
        }
    };
    slug:{
        current:string;
    }
    body:[object]
}

export interface comment {
approved:boolean;
comment:string;
email:string;
name:string;
post:{
    _ref:string;
    _type:string;
}

_createdAt:string;
_id:string;
_rev:string;
_type:string;
_updatedAt:string;

}

export interface category {

    _id:string;
    title:string;
description:string;
}

interface Image {
    _key: string;
    _type: "image";
    asset: {
      url: string;
    };
  }

export interface product {
    _id:string;
    title:string;
price:number;
category:{
    _ref:string;
_type: string;
},
 qty:number;
 image:[Image];
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

