import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "./Context";

const CartItem = ({ item }) => {

    const { cart, setCart } = useContext(Context);

    const increaseQty = () => {
        const updatedCart = cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        setCart(updatedCart);
    };

    const decreaseQty = () => {
        const updatedCart = cart.map((i) =>
            i.id === item.id && i.quantity > 1
                ? { ...i, quantity: i.quantity - 1 }
                : i
        );
        setCart(updatedCart);
    };

    const removeItem = () => {
        setCart(cart.filter((i) => i.id !== item.id));
    };

    return (
        <>
            <div className="d-flex p-3 border-bottom align-items-center">
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                <div className="ms-3">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="mb-2">{item.description}</p>

                    <div className="d-flex align-items-center">
                        <Button variant="outline-secondary" onClick={decreaseQty}>-</Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button variant="outline-secondary" onClick={increaseQty}>+</Button>
                    </div>
                </div>

                <div className="fw-bold ps-3">${item.sellingPrice * item.quantity}</div>
                <Button variant="link" onClick={removeItem} className="ms-3 text-danger text-decoration-none">X</Button>
            </div>
        </>
    )
}

export default CartItem;