
import React, {useContext} from 'react';
import { CartContext } from '../../ context/cartContext';

export default function Login() {
console.log('HIT')
  
  const {loggedIn, isLoggedIn} = useContext(CartContext);

  const logIn = async () => {
    let response = await fetch('/loginAPI', {method:'POST'}) ;
    console.log(response);
    loggedIn(true)
  }

  return <div style={{marginTop: "400px"}}>
    <button onClick={logIn}>LOGIN</button>
    {isLoggedIn && <span>logged in now</span>}
  </div>;
}
