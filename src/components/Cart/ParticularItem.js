import React, {useEffect, useState} from "react";
import "../Cart/ParticularItemStyles.css";
import { useParams, Link } from "react-router-dom";
// import { restaurant } from "../Lists";
import Navbar from "../header/Navbar";
import { useDispatch } from "react-redux";
import { AddCart, AddWishlist } from "../redux/ShoppingCart";
import { toast } from "react-hot-toast";
import Slider from "react-slick";
import NextArrow from "../Carousal/nextArrow";
import PrevArrow from "../Carousal/prevArrow";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import {  query, where } from "firebase/firestore";


const ParticularItem = () => {
  const [current, setCurrent] = useState("");

  const { id } = useParams();
  const val = parseInt(id);

  const [restaurant, setExploreItem] = useState(null);
  const [all, setAll] = useState(null);
  var AllList = [];
  var List = [];
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "ItemList"),  // Reference to the "ItemList" collection
          where("id", "==", id)       // Query condition: id field equal to val
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        List.push(doc.data());
      });
        
        setExploreItem(List)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const fetchAll = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ItemList"));
        const data = querySnapshot.docs.map((doc) => {
          doc.data()
          AllList.push(doc.data())
        });
        
        setAll(AllList);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAll();

  }, []);

  

  // const filterFoodType = all.filter(item => item.foodType === restaurant.foo );
 
  const dispatch = useDispatch();
  
  const addToCart = (item) => {
    dispatch(AddCart(item));
    toast.success("Item added in cart!");
  };
  const addToWish = (item) => {
    dispatch(AddWishlist(item));
    toast.success("Item added in Wishlist!");
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};
 
if (!restaurant || !all) return null;
  

  return (
    <div>
      <Navbar />
      {restaurant.map((item) => {
        return (
          <div key={item.id} className="main-container">

             (
              <>
             
                <div className="img-food-true">
                  <img className="img" src={item.image} alt={item.name} />
                  <div className="time-container">
                    {item.deliveryTime + " min"}
                  </div>
                  <div className="img-desc">
                    <p><span>Description<br></br></span>"{item.description}"</p>
                  </div>
                </div>
                <div className="true-container">
                  <div className="detail-container">
                    <h1>{item.name}</h1>
                    <h4>{"Price: " + item.price + "₹"}</h4>
                    <div className="detail-container-1">
                      <h5>{item.foodType}</h5>
                      <div className="Rating-container">
                        {"Rating: " + item.rating + "+"}
                      </div>
                    </div>
                  </div>
                  <div className="main-btn-container">
                    <button
                      className="main-btn"
                      onClick={() => addToCart(item)}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      Add to Cart
                    </button>
                    <button
                      className="main-btn"
                      onClick={() => addToWish(item)}
                    >
                      <i class="fa-regular fa-heart fa-solid"></i>
                      Wishlist
                    </button>
                  </div>
                </div>
              
              </>
            ) 
          </div>
        );
      })}
      
      <div className="delivery-collection">
        <div className="max-width">
          <div className="collection-title">
            <div className="collection">
            <h1>{"More " + current}</h1>
            <p>If Eat Feels You Happy So why are you waiting for??</p>
            </div>
            <br></br>
          </div>
          <div className="main-item">
            <Slider {...settings}>

            {all.map((type) => {
    console.log("HHHH", restaurant[0].foodType);
    return (
        <>
            {restaurant[0].foodType === type.foodType && (
                <div className='delivery-item-cover' key={type.id}>
                    <Link to={`/item/${type.id}`}>
                        <img src={type.image} alt={type.name} className='delivery-item-image'/>
                        <div className='delivery-item-title'>{type.name}</div>
                    </Link>
                </div>
            )}
        </>
    );
})}

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularItem;


