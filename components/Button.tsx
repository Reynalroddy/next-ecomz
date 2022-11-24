import React from 'react'

interface props{
    title:string;
    color?:string;
    background?:string;
    loading?:boolean
    onClick?:()=>void;

}
const Button = (props:props) => {
  return (
    <button className={`${props.color} ${props.background} text-sm font-bold w-auto py-2 px-7 rounded-md capitalize cursor-pointer opacity-75 hover:opacity-100 transition`} onClick={props.onClick}>{props.loading?'loading':props.title}</button>
  )
}
   
export default Button