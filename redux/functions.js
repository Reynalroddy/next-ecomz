// import { logout } from "./userSlice";
import axios from "axios";
import { addToCart } from '../redux/cartSlice';
// export const addUserToLocalStorage = ({ user, token }) => {
//   localStorage.setItem("user", JSON.stringify(user));
//   localStorage.setItem("token", token);
// };

// export const logoutUser = (dispatch) => {
//   dispatch(logout());
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   localStorage.removeItem("shippingAddy");
//   localStorage.removeItem("payMode");
//   window.location.href = "/";
// };


export const getUsers= async ()=>{

  try {
    const res = await axios.get('http://localhost:3001/api/users');
    
  } catch (error) {
    dispatch(getProductsFail());
  }
}
export const createUser = async ( product) => {
  
  try {
    const res = await axios.post(`http://localhost:3001/api/users`,product);
    
  } catch (error) {
  console.log(error)
   
}
};

        
            
      
export const addcart = async (dispatch, p, qty) => {
  let q = parseInt(qty);
  const it = {
    ...p,
    qty: q,
  };
  dispatch(addToCart(it));
};

     


