import React from "react";
import Navbar from "../components/header/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlist } from "../components/redux/ShoppingCart";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { current } from "@reduxjs/toolkit";

const Account = () => {
  const { wish } = useSelector((item) => item.user);
  const { quantity, amount } = useSelector((carts) => carts.user);
  const name = useSelector((currentUser) => currentUser.user.currentUser);   
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleRemoveWish = (cartItem) => {
    dispatch(removeWishlist(cartItem));
    toast.success("Item Removed!");
  };

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
 }
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="only-profile">
          <img
            src="https://img.freepik.com/free-photo/top-view-arrangement-with-salad-boxes-sauce_23-2148247882.jpg?w=740&t=st=1692709585~exp=1692710185~hmac=bacddd6a681f238f85bf29020feccb0e1dd4d81f51945836080753ed134a1b94"
            alt="profile"
          />
          <div>
            <img
              src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
              alt="profile"
              className="profile"
              style={{width:'110px', height:'110px'}}
            />
          </div>
          <div>
            <h1 className="user">{name}</h1>
            <div class="top-left">
              <h1>{quantity}</h1>
              <h1>Order</h1>
            </div>
            <div class="top-right">
              <h1>{amount}</h1>
              <h1>Price</h1>
            </div>
          </div>
        </div>
        <div className="wish-container">
        <h1 className="h1-text">Your Wishlist</h1>
        <div className="main">
        {wish.length === 0 ? (
          <div>
            <h1 className="text">No Item in cart!</h1>
          </div>
        ) : (
          wish?.map((food_cart) => (
            <div className="under-container"> 
              <div className="explore-card-cover">
                <Link to={`/item/${food_cart.id}`}>
                  <img src={food_cart.image} alt={food_cart.name} className="explore-card-image"/>
                </Link>
              </div>
              <button className="cart-btn" onClick={() => handleRemoveWish(food_cart)}><i className="fa-solid fa-trash"></i></button>
              <div className="food-name">{food_cart.name}</div>
              <div className="rat-pir">
                <div className="approx-price">{food_cart.price + "₹"}</div>
                  
              </div>
            </div>
          ))
        )}
        </div>
        </div>
      </div>
<button onClick={handleClick}>LogOut</button>
    </>
  );
};

export default Account;
