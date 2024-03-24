import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/header/Navbar";
import { useNavigate } from "react-router-dom";
import { getTotals, removeCart} from "../components/redux/ShoppingCart";
import { toast } from "react-hot-toast";
import { decreaseCart, AddCart } from "../components/redux/ShoppingCart";

const Cart = () => {
  const { cart } = useSelector((item) => item.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTotals())
  }, [cart, dispatch])

  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/menu");
  };
  const handleOrder = () => {
    navigate("/orders");
  };


  const handleChangeDecrease = (food) =>{
    dispatch(decreaseCart(food))
  }

  const handleChangeIncrease = (food) =>{
    dispatch(AddCart(food));
  }

  const handleRemoveCart = (cartItem) => {
    dispatch(removeCart(cartItem));
    toast.success("Item Removed!");
  };
  return (
    <div>
      <Navbar />
      <div className="text-container">
        <h1 className="text">Cart Section</h1>
        <div className="btn-container">
          <i className="fa-solid fa-arrow-left" onClick={handleclick}>Prev</i>
          <i class="fa-solid fa-arrow-right" onClick={handleOrder}>Next</i>
        </div>
      </div>
      {cart.length === 0 ? (
        <div>
          <h1 className="text">No Item in cart!</h1>
        </div>
      ) : cart?.map((food_cart) => (
        <div className="cart-container" key={food_cart.id}>
          <img
            src={food_cart.image}
            alt={food_cart.name}
            className="cart-image"
          />
          <h1 className="cart-text">{food_cart.name}</h1>
          <h1 className="cart-text">{"Price: " + food_cart.price + "₹"}</h1>
          <div className="button-s">
            <div className="decrease-btn">
              <button className="btn" onClick={() => handleChangeDecrease(food_cart)}>
                -
              </button>
            </div>
            <div className="price-container">{food_cart.quantity}</div>
            <div className="increase-btn">
              <button className="btn" onClick={()=> handleChangeIncrease(food_cart)}>
                +
              </button>
            </div>
          </div>
          <button
            className="cart-btn"
            onClick={() => handleRemoveCart(food_cart)}
          >
            Delete<i className="fa-solid fa-trash"></i>
          </button>
          <div className="quantity-no">
            <h1 className="cart-text">
              {"Total: " + ( food_cart.price * food_cart.quantity ) + "₹"}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
