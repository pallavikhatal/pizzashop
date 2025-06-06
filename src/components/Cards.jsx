// import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Context } from './Context';

// function Cards({pizza}) {

//     const {cart, setCart} = useContext(Context);

//     const {name, description, image, msp, sellingPrice} = pizza;

//   return (
//     <Card style={{ width: '18rem' }} className='shadow rounded border-0'>
//       <Card.Img variant="top" src={image} className='p-3' style={{height:'250px', objectFit:'cover'}} />
//       <Card.Body>
//         <Card.Title className='fw-bolder'>{name}</Card.Title>
//         <Card.Text className='fst-italic'>
//           {description}
//         </Card.Text>
//         <p className='text-decoration-line-through fw-bold text-danger'>₹{msp}</p>
//         <p className='text-success fw-bolder'>₹{sellingPrice}</p>
//         <Button variant="outline-primary" onClick={()=>{setCart([...cart, pizza])}}>Add To Cart</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cards;


import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './Context';

function Cards({ pizza }) {
  const { cart, setCart } = useContext(Context);
  const { name, description, image, msp, sellingPrice } = pizza;

  const isInCart = cart.some((item) => item.id === pizza.id);

  const handleCartToggle = () => {
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== pizza.id));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  return (
    <Card style={{ width: '18rem' }} className='shadow rounded border-0'>
      <Card.Img variant="top" src={image} className='p-3' style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{name}</Card.Title>
        <Card.Text className='fst-italic'>{description}</Card.Text>
        <p className='text-decoration-line-through fw-bold text-danger'>₹{msp}</p>
        <p className='text-success fw-bolder'>₹{sellingPrice}</p>

        <Button
          variant={isInCart ? "success" : "outline-primary"}
          onClick={handleCartToggle}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
