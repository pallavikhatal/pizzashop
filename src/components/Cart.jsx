// import React, { useContext } from 'react'
// import { Context } from './Context'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const Cart = () => {
//   const { cart, setCart } = useContext(Context);

//   console.log(cart); 

//   const removeFromCart = (name) => {
//     const updatedCart = cart.filter(item => item.name !== name);
//     setCart(updatedCart);
//   };

//   return (
//     <div className='d-flex flex-wrap justify-content-center gap-4 p-3'>
//       {
//         cart.map((item, index) => (
//           <Card key={index} style={{ width: '18rem' }} className='shadow rounded border-0'>
//             <Card.Img variant="top" src={item.image} className='p-3' style={{ height: '250px', objectFit: 'cover' }} />
//             <Card.Body>
//               <Card.Title className='fw-bolder'>{item.name}</Card.Title>
//               <Card.Text className='fst-italic'>
//                 {item.description}
//               </Card.Text>
//               <p className='text-decoration-line-through fw-bold text-danger'>₹{item.msp}</p>
//               <p className='text-success fw-bolder'>₹{item.sellingPrice}</p>
//               <Button variant="outline-danger" onClick={()=> removeFromCart(item.name)}>Remove From Cart</Button>
//             </Card.Body>
//           </Card>
//         ))
//       }
//     </div>
//   )
// }

// export default Cart;


import { useContext } from "react";
import { Context } from "./Context";
import CartItem from "./CartItem";
import Summary from "./Summary";

function Cart() 
{

  const {cart} = useContext(Context);

  return(
    <>
      <div className="d-flex justify-content-between gap-3 p-4">
        <div className=" border border-dark border-3 p-4">
          <h4 className="border-bottom pb-3">My Cart</h4>
          {
            cart.length === 0 ? (
              <p>Your Cart is Empty</p>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )
          }
        </div>

        <Summary />

      </div>
    </>
  )
}

export default Cart;