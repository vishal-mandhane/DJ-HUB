import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/header/Navbar";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../components/redux/ShoppingCart";
import useRazorpay from "react-razorpay";
import toast from "react-hot-toast";
const orderComponent = {
  overflow: "scroll",
};

const Orders = () => {
  const { cart } = useSelector((item) => item.user);
  const { amount } = useSelector((carts) => carts.user);
  const [total, setTotal] = useState(0);
  var final = 0;
  const name = useSelector((currentUser) => currentUser.user.currentUser);   

  const dispatch = useDispatch();
  const [Razorpay] = useRazorpay();

  useEffect(() => {
  
})
  const handlePayment = useCallback(async () => {
    console.log("Jayu" ,name,total);
    const options = {
      key: "rzp_test_HlKNdsUqGWsWWQ",
      amount: total*100,
      currency: "INR",
      name: "DJHub",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      
     
      prefill: {
        name: {name},
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay,total]);

  useEffect(() => {
    console.log("Final", final);
    setTotal(final);
    console.log("Total",total);
    
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/cart");
  };


  const handleClear = () => {
    dispatch(clearCart());
  };

  

  const handleCheck = () =>{
    if(cart.length === 0){
      toast.error('Select Atleast One Item!')
    }else{
      handlePayment();
    }

    
  }

  const handleCheckCancel = () =>{
    if(cart.length === 0){
      toast.error('You do not have Sufficient Item!')
    }else{
      navigate('/menu');
      dispatch(clearCart());
    }
  }

  console.log("total:", total);

  return (
    <>
      <Navbar />
      <div className="main-div">
        <div className="order-cart-container">
          <div className="collected-material">
            <i className="fa-solid fa-arrow-left" onClick={handleBack}></i>
            <h2 className="text">Selected Item</h2>
            <button className="total-btn1" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="collected-item" style={orderComponent}>
            {cart.length === 0 ? (
              <div>
                <h1 className="text">No Item in cart!</h1>
              </div>
            ) : (
                cart?.map((orders) =>
              
                
                {
                  final = final + orders.price * orders.quantity;  return (
                <div key={orders.id} className="div-scroll">
                  <ul className="order-ul">
                    <li className="order-li">
                      <div className="item-in-order">
                        <img
                          src={orders.image}
                          alt={orders.name}
                          className="order-image"
                        />
                       
                        <h3>{orders.name}</h3>
                        <h3>{orders.quantity}</h3>
                        <h3>{orders.price + "₹"}</h3>
                        <h3>
                          {"Total: " + orders.price * orders.quantity + "₹"}
                          
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              )})
            )}
          </div>
        </div>
        <div className="payment-container">
            <h2 className="text-t">Your Bill</h2>
            <div className="total-container">
              <h2 className="totl">SubTotal:- {total+"₹"}</h2>
              <h2 className="totl">Tax:- {total*2/100+"₹"}</h2>  
              <h2 className="totl">Grand Total:- {total+(total*2/100)+"₹"}</h2>
            </div>
          
            <div className="payment">
                <h2 className="text">Your Address</h2>
                <input type="text" className="input-btn" placeholder="Enter Address..."/>
                <input type="submit" className="btn-1"/>
                
            </div>
              
              <div className="button-container">
                <button className="btn-order" onClick={handleCheck}>Order Now!</button>
                <button className="btn-order1" onClick={handleCheckCancel}>Cancel Order!</button>
              </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
