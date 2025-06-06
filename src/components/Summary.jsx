import { useContext } from "react";
import { Context } from "./Context";

function Summary()
{

    const {cart} = useContext(Context);

    const totalItems = cart.reduce((acc,item) => acc + item.quantity, 0);

    const subTotal = cart.reduce((acc,item) => acc+item.sellingPrice * item.quantity, 0);
    
    return(
        <>
            <div className="p-4 border border-dark border-3" style={{width:'300px'}}>
                <h4 className="fw-bold border-bottom pb-2">Total</h4>
                <h5 className="fw-bold">Summary</h5>
                <p>Total Items : {totalItems}</p>
                <p>Sub Total : ${subTotal}</p>
                <p>Delivery Charges : $0</p>
                <h6>Total Amount : ${subTotal}</h6>
                <button className="btn btn-success w-100 mt-3">CHECKOUT</button>
            </div>
        </>
    )
}

export default Summary;