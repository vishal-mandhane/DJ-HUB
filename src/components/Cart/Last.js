import React, { useState } from 'react'
import Navbar from '../header/Navbar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Last = () => {
    const navigate = useNavigate();
    const handleBack = () => {
    navigate("/orders");
  };
   
  const { amount } = useSelector((carts) => carts.user);

  const [name, setName] = useState("Place Order")
  const handlePlace = () =>{
    setName("SuccessFully");
  }
  return (
      <>
    <Navbar />
    <div className='last-container'>
        {name === "Place Order"? (
            <>
                <div className='large-container'>
                    <i className="fa-solid fa-arrow-left" onClick={handleBack}>Back</i>
                    <div>
                    <h1>Grand Total: {amount + "₹"}</h1>
                    <button className='place-btn' onClick={handlePlace}>{name}</button>
                    </div>
                </div>
            </>
        ):(
           <div className='large-container'>
                <div className='Lasttotal-container'>
                    <img src='https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif' alt='yes'/>
                    <h1>Order Placed Succesfully!</h1>
                </div>
            </div>
        )}
    </div>
    </>
  )
}

export default Last